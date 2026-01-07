import { Atom, Zap, Target, Award, Check, BookOpen } from 'lucide-react';

export function PhysicsPage() {
  const features = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: 'Kavramsal Anlama',
      description: 'Fizik prensiplerini derinlemesine kavrayın',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Deney ve Uygulama',
      description: 'Teorik bilgiyi pratiğe dökme becerisi',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Problem Çözme',
      description: 'Sistematik yaklaşımla fizik problemleri',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Sınav Teknikleri',
      description: 'TYT ve AYT\'ye özel çözüm stratejileri',
    },
  ];

  const topics = {
    tyt: ['Hareket', 'Kuvvet ve Hareket', 'Enerji', 'İtme ve Çarpma', 'Elektrostatik', 'Akım ve Manyetizma'],
    ayt: ['Çembersel Hareket', 'Basit Harmonik Hareket', 'Dalga Mekaniği', 'Optik', 'Modern Fizik', 'Atom Fiziği'],
  };

  const packages = [
    {
      name: 'Fizik Temel',
      price: '2.200₺',
      features: [
        'Haftada 3 saat fizik',
        'Konu anlatımı + deney',
        'Aylık deneme',
        'Online materyal',
      ],
    },
    {
      name: 'Fizik İntensif',
      price: '3.800₺',
      features: [
        'Haftada 6 saat fizik',
        'Detaylı konu + problem',
        'Haftalık deneme',
        'Basılı + Online materyal',
        'Soru bankası',
        'Bireysel takip',
      ],
      popular: true,
    },
    {
      name: 'Fizik VIP',
      price: '5.500₺',
      features: [
        'Haftada 10 saat fizik',
        'Birebir özel ders',
        'Günlük soru çözümü',
        'Tüm materyaller',
        'Özel danışman',
        'Video konu anlatımları',
      ],
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/30 to-blue-950/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Atom className="w-16 h-16 mx-auto mb-6 text-indigo-400" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white via-indigo-100 to-blue-100 bg-clip-text text-transparent">
                Fizik
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Özel Ders
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              TYT ve AYT fizik dersleri için deneyimli öğretmenlerle eğitim. 
              Fiziği anlamak ve sevmek için doğru yerdesiniz.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all">
              Ücretsiz Deneme Dersi
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Fizik Eğitimimiz</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Kavramsal öğrenme ve problem çözme odaklı eğitim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-indigo-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mufredat" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Fizik Müfredatı</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              TYT ve AYT fizik konuları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl">
              <div className="inline-block px-4 py-2 bg-purple-500 rounded-lg mb-4">
                <h3 className="text-xl text-white">TYT Fizik</h3>
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
                <h3 className="text-xl text-white">AYT Fizik</h3>
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

      <section id="paketler" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Fizik Paketleri</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Fizikte başarı için özel paketler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border-indigo-500 scale-105'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full text-sm">
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
                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-lg hover:shadow-indigo-500/50'
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
