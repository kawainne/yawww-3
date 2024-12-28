import Navbar from './components/Navbar';
import BetaBadge from './components/BetaBadge';
import FeatureCard from './components/features/FeatureCard';
import ShootingStars from './components/ShootingStars';
import HighlightedText from './components/HighlightedText';
import { FeatureIcons } from './components/features/FeatureIcons';

export default function Home() {
  return (
    <main className="min-h-screen grid-background relative">
      <ShootingStars />
      <div className="blue-glow top-40 right-20" />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex justify-center mb-8">
          <BetaBadge />
        </div>

        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-medium mb-6 leading-tight">
            Eksplorasi Dunia <HighlightedText>Taksonomi Biologi</HighlightedText>:<br />
            Kenali Keluarga <HighlightedText>Felidae</HighlightedText> Lebih Dekat
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Platform pembelajaran interaktif yang menggabungkan teknologi AI dengan materi taksonomi. 
            Temukan cara baru untuk memahami klasifikasi Felidae dengan akurasi tinggi dan pengalaman 
            belajar yang menyenangkan.
          </p>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <button className="px-5 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-all flex items-center gap-2">
              Mulai Sekarang Gratis
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />
                ))}
              </div>
              <span className="text-sm text-white/60">
                Dipercaya oleh 10,000+<br />pelajar dan peneliti
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <FeatureCard
            icon={FeatureIcons.scan}
            title="Felidae Scanner"
            description="Identifikasi spesies Felidae secara instan menggunakan teknologi AI canggih dengan tingkat akurasi mencapai 98%."
            badge="new"
            keyFeatures={[
              { value: "98%", label: "Akurasi" },
              { value: "30+", label: "Species Database" }
            ]}
          >
            <button className="px-3 py-1.5 text-sm bg-indigo-500/10 rounded-lg hover:bg-indigo-500/20 transition-colors">
              Coba Sekarang
            </button>
          </FeatureCard>

          <FeatureCard
            icon={FeatureIcons.learn}
            title="Pembelajaran Adaptif"
            description="Materi pembelajaran yang menyesuaikan dengan tingkat pemahaman Anda, dilengkapi visualisasi interaktif."
            badge="improved"
            keyFeatures={[
              { value: "AI", label: "Personalized" },
              { value: "4K", label: "Visual Quality" }
            ]}
          >
            <button className="px-3 py-1.5 text-sm bg-indigo-500/10 rounded-lg hover:bg-indigo-500/20 transition-colors">
              Mulai Belajar
            </button>
          </FeatureCard>

          <FeatureCard
            icon={FeatureIcons.game}
            title="Game & Challenges"
            description="Uji pengetahuan melalui game seru dan tantangan interaktif dengan sistem reward yang menarik."
            badge="updated"
            keyFeatures={[
              { value: "Daily", label: "Rewards" },
              { value: "75+", label: "Game Modes" }
            ]}
          >
            <button className="px-3 py-1.5 text-sm bg-indigo-500/10 rounded-lg hover:bg-indigo-500/20 transition-colors">
              Main Sekarang
            </button>
          </FeatureCard>

          <FeatureCard
            icon={FeatureIcons.progress}
            title="Progress Tracking"
            description="Pantau perkembangan belajar dengan analisis detail dan rekomendasi pembelajaran personal."
            badge="improved"
            keyFeatures={[
              { value: "Real-time", label: "Analytics" },
              { value: "AI", label: "Recommendations" }
            ]}
          >
            <button className="px-3 py-1.5 text-sm bg-indigo-500/10 rounded-lg hover:bg-indigo-500/20 transition-colors">
              Lihat Progress
            </button>
          </FeatureCard>

          <FeatureCard
            icon={FeatureIcons.explore}
            title="Eksplorasi Interaktif"
            description="Jelajahi peta taksonomi interaktif dengan visualisasi hubungan antar spesies yang detail."
            badge="new"
            keyFeatures={[
              { value: "4K", label: "Resolution" },
              { value: "360°", label: "View Mode" }
            ]}
          >
            <button className="px-3 py-1.5 text-sm bg-indigo-500/10 rounded-lg hover:bg-indigo-500/20 transition-colors">
              Mulai Eksplorasi
            </button>
          </FeatureCard>

          <FeatureCard
            icon={FeatureIcons.discuss}
            title="Komunitas & Diskusi"
            description="Bergabung dalam komunitas pembelajar, berbagi pengetahuan dan diskusi dengan para ahli."
            badge="updated"
            keyFeatures={[
              { value: "24/7", label: "Live Support" },
              { value: "Expert", label: "Mentoring" }
            ]}
          >
            <button className="px-3 py-1.5 text-sm bg-indigo-500/10 rounded-lg hover:bg-indigo-500/20 transition-colors">
              Gabung Diskusi
            </button>
          </FeatureCard>
        </div>
      </div>
    </main>
  );
}