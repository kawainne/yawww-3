import Badge from './Badge';

export default function NewBadge() {
  return (
    <Badge
      variant="new"
      label="New"
      icon={<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />}
    />
  );
}