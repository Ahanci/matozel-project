import { BookMarked, Feather, Target, Award, Check } from 'lucide-react';

export function LiteraturePage() {
  const features = [
    {
      icon: <BookMarked className="w-6 h-6" />,
      title: 'Edebi Türler',
      description: 'Şiir, hikaye, roman ve tiyatro analizi',
    },
    {
      icon: <Feather className="w-6 h-6" />,
      title: 'Edebi Sanatlar',
      description: 'Anlam ve söz sanatları uygulaması',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Metin İnceleme',
      description: 'Derinlemesine metin analizi teknikleri',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'TYT-AYT Odaklı',
      description: 'Sınava yönelik strateji ve çözümler',
    },
  ];

  const topics = {
    tyt: ['Şiir İnceleme', 'Hikaye İnceleme', 'Tiyatro', 'Roman', 'Makale-Deneme', 'Söz Sanatları', 'Anlam Sanatları'],
    ayt: ['Yeni Türk Edebiyatı', 'Cumhuriyet Dönemi Edebiyat', 'Şiir Akımları', 'Roman ve Hikaye', 'Tiyatro', 'Eleştiri ve Deneme'],
  };

  const packages = [
    {
      name: 'Edebiyat Temel',
      price: '2.000₺',
      features: [
        'Haftada 3 saat edebiyat',
        'Metin inceleme + teori',
        'Aylık deneme',
        'Online materyal',
      ],
    },
    {
      name: 'Edebiyat İntensif',
      price: '3.500₺',
      features: [
        'Haftada 6 saat edebiyat',
        'Detaylı metin analizi',
        'Haftalık deneme',
        'Basılı + Online materyal',
        'Edebi eser arşivi',
        'Yazma atölyeleri',
      ],
      popular: true,
    },
    {
      name: 'Edebiyat VIP',
      price: '5.000₺',
      features: [
        'Haftada 10 saat edebiyat',
        'Birebir özel ders',
        'Günlük okuma takibi',
        'Tüm materyaller',
        'Özel danışman',
        'Online kütüphane',
      ],
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950/30 to-yellow-950/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <BookMarked className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white via-amber-100 to-yellow-100 bg-clip-text text-transparent">
                Edebiyat
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Özel Ders
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              TYT ve AYT edebiyat dersleri için uzman öğretmenlerle eğitim. 
              Edebiyat dünyasını keşfedin, metinleri derinlemesine anlayın.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all">
              Ücretsiz Deneme Dersi
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Edebiyat Eğitimimiz</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Edebi metinleri anlama ve yorumlama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-amber-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-4">
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
            <h2 className="text-3xl md:text-5xl mb-4">Edebiyat Müfredatı</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              TYT ve AYT edebiyat konuları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl">
              <div className="inline-block px-4 py-2 bg-purple-500 rounded-lg mb-4">
                <h3 className="text-xl text-white">TYT Edebiyat</h3>
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
                <h3 className="text-xl text-white">AYT Edebiyat</h3>
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
            <h2 className="text-3xl md:text-5xl mb-4">Edebiyat Paketleri</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Edebiyatta başarı için özel paketler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-amber-600/20 to-yellow-600/20 border-amber-500 scale-105'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full text-sm">
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
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:shadow-lg hover:shadow-amber-500/50'
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
