import { BookText, PenTool, Target, Award, Check } from 'lucide-react';

export function TurkishPage() {
  const features = [
    {
      icon: <BookText className="w-6 h-6" />,
      title: 'Okuma Anlama',
      description: 'Metin analizi ve yorumlama becerileri',
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Dil Bilgisi',
      description: 'Sözcük türleri, cümle yapısı ve dilbilgisi kuralları',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Paragraf Soruları',
      description: 'Ana fikir, yan fikir ve paragraf düzeni',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Sınav Stratejileri',
      description: 'Hızlı okuma ve etkili çözüm teknikleri',
    },
  ];

  const topics = {
    lgs: ['Sözcük türleri', 'Cümle bilgisi', 'Anlam bilgisi', 'Okuma anlama', 'Paragraf', 'Noktalama', 'Yazım kuralları'],
    tyt: ['Sözcük türleri', 'Fiil çatısı', 'Fiil kipleri', 'Cümle türleri', 'Anlatım biçimleri', 'Paragraf', 'Okuma anlama', 'Söz sanatları'],
  };

  const packages = [
    {
      name: 'Türkçe Temel',
      price: '1.800₺',
      features: [
        'Haftada 3 saat Türkçe',
        'Dil bilgisi + anlama',
        'Aylık deneme',
        'Online materyal',
      ],
    },
    {
      name: 'Türkçe İntensif',
      price: '3.200₺',
      features: [
        'Haftada 6 saat Türkçe',
        'Detaylı konu anlatımı',
        'Haftalık deneme',
        'Basılı + Online materyal',
        'Soru bankası',
        'Metin arşivi',
      ],
      popular: true,
    },
    {
      name: 'Türkçe VIP',
      price: '4.500₺',
      features: [
        'Haftada 10 saat Türkçe',
        'Birebir özel ders',
        'Günlük soru çözümü',
        'Tüm materyaller',
        'Özel danışman',
        'Yazma atölyeleri',
      ],
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950/30 to-purple-950/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <BookText className="w-16 h-16 mx-auto mb-6 text-violet-400" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent">
                Türkçe
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Özel Ders
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              LGS ve TYT Türkçe dersleri için uzman öğretmenlerle eğitim. 
              Dilimizi doğru kullanın, metinleri tam anlayın, sınavlarda başarılı olun.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all">
              Ücretsiz Deneme Dersi
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Türkçe Eğitimimiz</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Dil bilgisi ve okuma anlama odaklı kapsamlı eğitim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-violet-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-4">
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
            <h2 className="text-3xl md:text-5xl mb-4">Türkçe Müfredatı</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              LGS ve TYT Türkçe konuları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl">
              <div className="inline-block px-4 py-2 bg-cyan-500 rounded-lg mb-4">
                <h3 className="text-xl text-white">LGS Türkçe</h3>
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
                <h3 className="text-xl text-white">TYT Türkçe</h3>
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
          </div>
        </div>
      </section>

      <section id="paketler" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Türkçe Paketleri</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Türkçede başarı için özel paketler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-violet-600/20 to-purple-600/20 border-violet-500 scale-105'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-sm">
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
                      <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:shadow-lg hover:shadow-violet-500/50'
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
