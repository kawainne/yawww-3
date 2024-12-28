import Badge from './Badge';

export default function ImprovedBadge() {
  return (
    <Badge
      variant="improved"
      label="Improved"
      icon={
        <svg className="w-3 h-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      }
    />
  );
}