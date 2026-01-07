import { Target, BookOpen, Users, Award, Check, Clock, TrendingUp, Star } from 'lucide-react';

export function LGSPage() {
  const whyUs = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'LGS\'ye Özel Program',
      description: 'MEB müfredatına %100 uyumlu, LGS formatında hazırlanmış içerikler.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '8. Sınıf Uzmanı Öğretmenler',
      description: 'LGS\'de başarılı öğrenciler yetiştirmiş deneyimli eğitmenler.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Hedef Okula Yerleşim',
      description: 'Öğrencilerimizin %92\'si ilk tercihlerine yerleşiyor.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Düzenli Deneme Sınavları',
      description: 'Her hafta LGS formatında deneme ve detaylı analiz.',
    },
  ];

  const services = [
    {
      title: 'Türkçe',
      description: 'Anlama, yorumlama ve sözel mantık becerileri',
      topics: ['Okuma anlama', 'Sözcük-deyim', 'Cümle-paragraf', 'Noktalama'],
    },
    {
      title: 'Matematik',
      description: 'Sayısal düşünme ve problem çözme',
      topics: ['Sayılar', 'Cebir', 'Geometri', 'İstatistik'],
    },
    {
      title: 'Fen Bilimleri',
      description: 'Bilimsel süreç ve araştırma becerileri',
      topics: ['Fizik', 'Kimya', 'Biyoloji', 'Yer bilim'],
    },
    {
      title: 'İngilizce',
      description: 'Yabancı dil becerilerini geliştirme',
      topics: ['Reading', 'Grammar', 'Vocabulary', 'Comprehension'],
    },
    {
      title: 'Sosyal Bilgiler',
      description: 'Tarih, coğrafya ve vatandaşlık bilgisi',
      topics: ['Tarih', 'Coğrafya', 'Vatandaşlık', 'İnkılap'],
    },
  ];

  const curriculum = [
    { subject: 'Türkçe', questions: 20, time: '40 dakika' },
    { subject: 'Matematik', questions: 20, time: '40 dakika' },
    { subject: 'Fen Bilimleri', questions: 20, time: '40 dakika' },
    { subject: 'İngilizce', questions: 10, time: '20 dakika' },
    { subject: 'Din Kültürü', questions: 10, time: '20 dakika' },
    { subject: 'T.C. İnkılap Tarihi', questions: 10, time: '20 dakika' },
  ];

  const packages = [
    {
      name: 'LGS Temel',
      price: '2.500₺',
      features: [
        'Haftada 4 saat ders',
        '2 ders seçimi',
        'Aylık deneme sınavı',
        'Online materyal',
        'WhatsApp destek',
      ],
    },
    {
      name: 'LGS Standart',
      price: '4.500₺',
      features: [
        'Haftada 8 saat ders',
        'Tüm dersler dahil',
        'Haftalık deneme sınavı',
        'Basılı + Online materyal',
        '7/24 WhatsApp destek',
        'Performans analizi',
      ],
      popular: true,
    },
    {
      name: 'LGS Premium',
      price: '7.000₺',
      features: [
        'Haftada 12 saat ders',
        'Tüm dersler + danışmanlık',
        'Günlük soru çözüm desteği',
        'Tüm materyaller',
        'Özel danışman',
        'Psikolojik destek',
        'Veli görüşmeleri',
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/30 to-cyan-950/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
              🎓 LGS Hazırlık Programı
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                LGS\'de Başarı
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Bizimle Kesin
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              8. sınıf öğrencileri için özel hazırlanmış LGS programı ile hedef lisenize ulaşın.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Ücretsiz Deneme Dersi Al
            </button>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">500+</div>
                <div className="text-slate-400 text-sm">LGS Öğrencisi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">92%</div>
                <div className="text-slate-400 text-sm">Yerleşim Oranı</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">480+</div>
                <div className="text-slate-400 text-sm">Ortalama Net</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">15+</div>
                <div className="text-slate-400 text-sm">Uzman Öğretmen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Neden MatÖzel LGS?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              LGS\'de başarılı olmanız için ihtiyacınız olan her şey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dersler */}
      <section id="hizmetler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">LGS Dersleri</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Her ders için özel hazırlanmış içerikler ve çözüm stratejileri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all"
              >
                <h3 className="text-2xl mb-2 text-cyan-400">{service.title}</h3>
                <p className="text-slate-400 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-cyan-400" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müfredat */}
      <section id="mufredat" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">LGS Sınav Yapısı</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Toplam 90 soru, 180 dakika
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-b border-slate-700">
                <div className="text-cyan-400">Ders</div>
                <div className="text-cyan-400 text-center">Soru Sayısı</div>
                <div className="text-cyan-400 text-right">Süre</div>
              </div>
              {curriculum.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 p-4 border-b border-slate-800 last:border-0 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="text-white">{item.subject}</div>
                  <div className="text-slate-300 text-center">{item.questions}</div>
                  <div className="text-slate-300 text-right">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Paketler */}
      <section id="paketler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">LGS Paketleri</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              LGS\'ye özel hazırlanmış eğitim paketlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border-cyan-500 scale-105'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-sm">
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
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50'
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
