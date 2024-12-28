interface BadgeProps {
  icon?: React.ReactNode;
  label: string;
  variant: 'new' | 'updated' | 'improved';
}

export default function Badge({ icon, label, variant }: BadgeProps) {
  const variants = {
    new: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400',
    updated: 'bg-amber-500/20 border-amber-500/30 text-amber-400',
    improved: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400'
  };

  return (
    <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full border text-xs font-medium flex items-center gap-1 ${variants[variant]}`}>
      {icon}
      {label}
    </div>
  );
}