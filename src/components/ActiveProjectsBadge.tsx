import { useActiveProjects } from '../hooks/useActiveProjects';

export default function ActiveProjectsBadge() {
  const count = useActiveProjects();

  if (count === null) return null;

  return (
    <div className="inline-flex items-center gap-2.5 glass-card px-4 py-2.5 fade-in">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
      </span>
      <span className="text-sm text-muted">
        Currently working on{' '}
        <span className="text-base font-bold">{count}</span>{' '}
        new project{count === 1 ? '' : 's'}
      </span>
    </div>
  );
}
