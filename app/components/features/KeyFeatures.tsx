interface KeyFeature {
  value: string;
  label: string;
}

interface KeyFeaturesProps {
  features: KeyFeature[];
}

export default function KeyFeatures({ features }: KeyFeaturesProps) {
  return (
    <div className="flex items-center gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-1.5 text-sm">
          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
          <span className="font-medium text-indigo-400">{feature.value}</span>
          <span className="text-white/50">{feature.label}</span>
        </div>
      ))}
    </div>
  );
}