import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const MIN_PROJECTS = 3;
const MAX_PROJECTS = 12;

export function useActiveProjects() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const { data, error } = await supabase
        .from('site_stats')
        .select('active_projects, last_updated')
        .eq('id', 1)
        .maybeSingle();

      if (error || !data) return;

      const today = new Date().toISOString().slice(0, 10);
      const lastUpdated = data.last_updated;

      if (lastUpdated < today) {
        // New day — apply one random +/-1 adjustment, clamped 3–12
        const delta = Math.random() < 0.5 ? -1 : 1;
        const newCount = Math.min(MAX_PROJECTS, Math.max(MIN_PROJECTS, data.active_projects + delta));

        const { data: updated } = await supabase
          .from('site_stats')
          .update({ active_projects: newCount, last_updated: today, updated_at: new Date().toISOString() })
          .eq('id', 1)
          .select('active_projects')
          .maybeSingle();

        if (!cancelled) setCount(updated?.active_projects ?? newCount);
      } else {
        if (!cancelled) setCount(data.active_projects);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return count;
}
