import NewBadge from '../badges/NewBadge';
import UpdateBadge from '../badges/UpdateBadge';
import ImprovedBadge from '../badges/ImprovedBadge';
import KeyFeatures from './KeyFeatures';

interface KeyFeature {
  value: string;
  label: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: 'new' | 'updated' | 'improved';
  keyFeatures: KeyFeature[];
  children?: React.ReactNode;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  badge, 
  keyFeatures,
  children 
}: FeatureCardProps) {
  return (
    <div className="glass-card p-6 hover:border-white/20 transition-all cursor-pointer group relative">
      {badge === 'new' && <NewBadge />}
      {badge === 'updated' && <UpdateBadge />}
      {badge === 'improved' && <ImprovedBadge />}
      
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative mb-4 text-indigo-400 group-hover:text-indigo-300 transition-colors">
          {icon}
        </div>
      </div>
      
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-white/50 mb-4">{description}</p>

      <div className="mb-4">
        <KeyFeatures features={keyFeatures} />
      </div>
      
      {children}
    </div>
  );
}