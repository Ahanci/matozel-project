import { Target, BookOpen, Users, Award, Check, Clock } from 'lucide-react';

export function TYTPage() {
  const whyUs = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'TYT\'ye Özel Strateji',
      description: 'YKS formatına uygun, temel yeterlilik odaklı eğitim programı.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Deneyimli Kadro',
      description: 'YKS\'de yüzlerce öğrenci yetiştirmiş uzman öğretmenler.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Yüksek Net Garantisi',
      description: 'Programımızı tamamlayan öğrencilerin ortalama 85+ net.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Haftalık Deneme',
      description: 'Gerçek TYT formatında haftalık denemeler ve detaylı analiz.',
    },
  ];

  const services = [
    {
      title: 'Türkçe',
      description: 'Dil bilgisi ve anlama becerileri',
      topics: ['Sözcük türleri', 'Cümle bilgisi', 'Anlam bilgisi', 'Paragraf'],
    },
    {
      title: 'Matematik',
      description: 'Temel matematik ve sayısal mantık',
      topics: ['Temel matematik', 'Geometri', 'Fonksiyonlar', 'Olasılık'],
    },
    {
      title: 'Fizik',
      description: 'Temel fizik kavramları',
      topics: ['Hareket', 'Kuvvet', 'Enerji', 'Elektrik'],
    },
    {
      title: 'Kimya',
      description: 'Temel kimya prensipleri',
      topics: ['Atom yapısı', 'Kimyasal bağlar', 'Madde', 'Asit-baz'],
    },
    {
      title: 'Biyoloji',
      description: 'Yaşam bilimleri temelleri',
      topics: ['Hücre', 'Sistemler', 'Kalıtım', 'Ekosistem'],
    },
    {
      title: 'Tarih',
      description: 'Tarih bilinci ve analizi',
      topics: ['Osmanlı', 'İnkılap', 'Türk tarihi', 'Dünya tarihi'],
    },
    {
      title: 'Coğrafya',
      description: 'Beşeri ve fiziki coğrafya',
      topics: ['Türkiye coğrafyası', 'Beşeri coğrafya', 'Harita', 'İklim'],
    },
  ];

  const curriculum = [
    { subject: 'Türkçe', questions: 40, time: '75 dakika' },
    { subject: 'Matematik', questions: 40, time: '75 dakika' },
    { subject: 'Sosyal Bilimler', questions: 20, time: '45 dakika' },
    { subject: 'Fen Bilimleri', questions: 20, time: '45 dakika' },
  ];

  const packages = [
    {
      name: 'TYT Temel',
      price: '3.000₺',
      features: [
        'Haftada 6 saat ders',
        '3 ders seçimi',
        'Aylık deneme sınavı',
        'Online materyal',
        'WhatsApp destek',
      ],
    },
    {
      name: 'TYT Standart',
      price: '5.500₺',
      features: [
        'Haftada 10 saat ders',
        'Tüm dersler dahil',
        'Haftalık deneme sınavı',
        'Basılı + Online materyal',
        '7/24 destek',
        'Performans analizi',
      ],
      popular: true,
    },
    {
      name: 'TYT Premium',
      price: '8.500₺',
      features: [
        'Haftada 15 saat ders',
        'Tüm dersler + AYT desteği',
        'Günlük soru çözümü',
        'Tüm materyaller',
        'Özel danışman',
        'Motivasyon koçluğu',
        'Üniversite tercih danışmanlığı',
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/30 to-blue-950/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
              🎯 TYT Hazırlık Programı
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
                TYT\'de Fark Yarat
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Üniversite Hayalin Gerçek Olsun
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              YKS\'nin ilk adımı TYT\'de başarı için uzman kadromuzla yanınızdayız.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Ücretsiz Deneme Dersi Al
            </button>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">1500+</div>
                <div className="text-slate-400 text-sm">TYT Öğrencisi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">85+</div>
                <div className="text-slate-400 text-sm">Ortalama Net</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">450+</div>
                <div className="text-slate-400 text-sm">Ortalama Puan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">25+</div>
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
            <h2 className="text-3xl md:text-5xl mb-4">Neden MatÖzel TYT?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              TYT\'de başarılı olmanız için gereken tüm destek
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
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
            <h2 className="text-3xl md:text-5xl mb-4">TYT Dersleri</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tüm TYT derslerinde uzman kadro ile çalışın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-2xl hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-2xl mb-2 text-purple-400">{service.title}</h3>
                <p className="text-slate-400 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-purple-400" />
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
            <h2 className="text-3xl md:text-5xl mb-4">TYT Sınav Yapısı</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Toplam 120 soru, 165 dakika (2 saat 45 dakika)
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-slate-700">
                <div className="text-purple-400">Alan</div>
                <div className="text-purple-400 text-center">Soru Sayısı</div>
                <div className="text-purple-400 text-right">Süre</div>
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
            <h2 className="text-3xl md:text-5xl mb-4">TYT Paketleri</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              TYT başarınız için özel hazırlanmış paketler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500 scale-105'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm">
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
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50'
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
