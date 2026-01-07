import { Calculator, TrendingUp, Target, Award, Check, BookOpen } from 'lucide-react';

export function MathPage() {
  const features = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Temel Matematik',
      description: 'Sayılar, işlemler ve temel kavramlardan ileri seviyeye',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'İlerleme Takibi',
      description: 'Her konu sonrası değerlendirme ve eksik analizi',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Hedef Odaklı',
      description: 'Sınav türüne göre özelleştirilmiş çalışma programı',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Problem Çözme',
      description: 'Stratejik yaklaşımlar ve hızlı çözüm teknikleri',
    },
  ];

  const topics = {
    lgs: ['Sayılar', 'Cebir', 'Geometri', 'Veri Analizi', 'Olasılık'],
    tyt: ['Temel Matematik', 'Geometri', 'Fonksiyonlar', 'Sayılar', 'Olasılık', 'İstatistik'],
    ayt: ['İleri Cebir', 'Trigonometri', 'Analitik Geometri', 'Limit ve Süreklilik', 'Türev', 'İntegral', 'Logaritma'],
  };

  const packages = [
    {
      name: 'Matematik Temel',
      price: '2.000₺',
      features: [
        'Haftada 3 saat matematik',
        'Konu anlatımı + soru çözümü',
        'Aylık deneme',
        'Online materyal',
      ],
    },
    {
      name: 'Matematik İntensif',
      price: '3.500₺',
      features: [
        'Haftada 6 saat matematik',
        'Detaylı konu anlatımı',
        'Haftalık deneme',
        'Basılı + Online materyal',
        'Soru bankası',
        'Bireysel takip',
      ],
      popular: true,
    },
    {
      name: 'Matematik VIP',
      price: '5.000₺',
      features: [
        'Haftada 10 saat matematik',
        'Birebir özel ders',
        'Günlük soru çözümü',
        'Tüm materyaller',
        'Özel danışman',
        'Sınırsız destek',
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/30 to-purple-950/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Matematik
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Özel Ders
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              LGS, TYT ve AYT matematik dersleri için uzman öğretmenlerle birebir eğitim. 
              Matematiği sevdiren ve başarıya taşıyan programımızla yanınızdayız.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Ücretsiz Deneme Dersi
            </button>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Matematik Eğitimimiz</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Matematikte başarı için gereken her şey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müfredat */}
      <section id="mufredat" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Matematik Müfredatı</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Sınava göre özelleştirilmiş konu başlıkları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl">
              <div className="inline-block px-4 py-2 bg-cyan-500 rounded-lg mb-4">
                <h3 className="text-xl text-white">LGS Matematik</h3>
              </div>
              <ul className="space-y-3">
                {topics.lgs.map((topic, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl">
              <div className="inline-block px-4 py-2 bg-purple-500 rounded-lg mb-4">
                <h3 className="text-xl text-white">TYT Matematik</h3>
              </div>
              <ul className="space-y-3">
                {topics.tyt.map((topic, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-200">
                    <Check className="w-4 h-4 text-purple-400" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-orange-600/20 to-pink-600/20 border border-orange-500/30 rounded-2xl">
              <div className="inline-block px-4 py-2 bg-orange-500 rounded-lg mb-4">
                <h3 className="text-xl text-white">AYT Matematik</h3>
              </div>
              <ul className="space-y-3">
                {topics.ayt.map((topic, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-200">
                    <Check className="w-4 h-4 text-orange-400" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Matematik */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl mb-8 text-center">Neden Matematik Özel Ders?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <BookOpen className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-xl mb-2">Bireysel Öğrenme</h3>
                <p className="text-slate-400 text-sm">
                  Her öğrencinin öğrenme hızına ve seviyesine uygun içerik
                </p>
              </div>
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <Target className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-xl mb-2">Eksik Konu Çalışması</h3>
                <p className="text-slate-400 text-sm">
                  Geçmiş konulardaki eksikliklerin tespiti ve giderilmesi
                </p>
              </div>
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <TrendingUp className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-xl mb-2">Hızlı İlerleme</h3>
                <p className="text-slate-400 text-sm">
                  Birebir eğitimle daha hızlı kavrama ve net artışı
                </p>
              </div>
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <Award className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-xl mb-2">Sınav Stratejileri</h3>
                <p className="text-slate-400 text-sm">
                  Sınavda zaman yönetimi ve pratik çözüm yöntemleri
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paketler */}
      <section id="paketler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Matematik Paketleri</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              İhtiyacınıza özel matematik eğitim paketleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500 scale-105'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm">
                    En Popüler
                  </div>
                )}
                <h3 className="text-2xl mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl">{pkg.price}</span>
                  <span className="text-slate-400">/ay</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  Hemen Başla
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
