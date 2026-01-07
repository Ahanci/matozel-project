import { Target, BookOpen, Users, Award, Check, Clock } from 'lucide-react';

export function AYTPage() {
  const whyUs = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Alan Odaklı Eğitim',
      description: 'Sayısal, sözel ve eşit ağırlık alanlarına özel program.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Alanında Uzman',
      description: 'Her derste konu uzmanı öğretmenlerle çalışma fırsatı.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Hedef Bölüm',
      description: 'İstediğiniz bölüme yerleşme odaklı strateji.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'AYT Denemeler',
      description: 'Alan bazlı haftalık deneme sınavları ve analiz.',
    },
  ];

  const services = [
    {
      title: 'Sayısal',
      description: 'Matematik ve fen bilimleri ağırlıklı',
      topics: ['İleri matematik', 'Fizik', 'Kimya', 'Biyoloji'],
    },
    {
      title: 'Sözel',
      description: 'Edebiyat ve sosyal bilimler ağırlıklı',
      topics: ['Edebiyat', 'Tarih-1', 'Coğrafya-1', 'Din kültürü', 'Felsefe'],
    },
    {
      title: 'Eşit Ağırlık',
      description: 'Dengeli alan çalışması',
      topics: ['Matematik', 'Edebiyat', 'Tarih', 'Coğrafya'],
    },
  ];

  const curriculum = [
    { field: 'Matematik', questions: 40, time: '60 dakika' },
    { field: 'Fizik', questions: 14, time: '45 dakika' },
    { field: 'Kimya', questions: 13, time: '45 dakika' },
    { field: 'Biyoloji', questions: 13, time: '45 dakika' },
    { field: 'Edebiyat', questions: 24, time: '70 dakika' },
    { field: 'Tarih-1', questions: 10, time: '35 dakika' },
    { field: 'Coğrafya-1', questions: 6, time: '35 dakika' },
    { field: 'Tarih-2', questions: 11, time: '35 dakika' },
    { field: 'Coğrafya-2', questions: 11, time: '35 dakika' },
    { field: 'Felsefe', questions: 12, time: '35 dakika' },
    { field: 'Din Kültürü', questions: 6, time: '35 dakika' },
  ];

  const packages = [
    {
      name: 'AYT Temel',
      price: '3.500₺',
      features: [
        'Haftada 6 saat ders',
        '1 alan seçimi',
        'Aylık deneme sınavı',
        'Online materyal',
        'WhatsApp destek',
      ],
    },
    {
      name: 'AYT Standart',
      price: '6.500₺',
      features: [
        'Haftada 12 saat ders',
        'Alan dersleri + TYT',
        'Haftalık deneme sınavı',
        'Basılı + Online materyal',
        '7/24 destek',
        'Performans analizi',
        'Hedef bölüm danışmanlığı',
      ],
      popular: true,
    },
    {
      name: 'AYT Premium',
      price: '10.000₺',
      features: [
        'Haftada 20 saat ders',
        'Tüm dersler + danışmanlık',
        'Günlük soru çözümü',
        'Tüm materyaller',
        'Özel danışman',
        'Motivasyon koçluğu',
        'Üniversite tercih danışmanlığı',
        'Sınav psikolojisi desteği',
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-pink-950/30 to-orange-950/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm mb-6">
              🚀 AYT Hazırlık Programı
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white via-orange-100 to-pink-100 bg-clip-text text-transparent">
                Hayalindeki Bölüm
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Bir Adım Uzağında
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              AYT\'de başarı için alan odaklı eğitim programımızla hedef bölümünüze ulaşın.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all">
              Ücretsiz Deneme Dersi Al
            </button>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">2000+</div>
                <div className="text-slate-400 text-sm">AYT Öğrencisi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">90%</div>
                <div className="text-slate-400 text-sm">Hedef Yerleşim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">65+</div>
                <div className="text-slate-400 text-sm">Ortalama Net</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">30+</div>
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
            <h2 className="text-3xl md:text-5xl mb-4">Neden MatÖzel AYT?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              AYT\'de başarılı olmanız için özelleştirilmiş eğitim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-orange-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alanlar */}
      <section id="hizmetler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">AYT Alanları</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Hedef alanınıza göre özelleştirilmiş eğitim programları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-2xl hover:border-orange-500/50 transition-all"
              >
                <h3 className="text-2xl mb-2 text-orange-400">{service.title}</h3>
                <p className="text-slate-400 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-orange-400" />
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
            <h2 className="text-3xl md:text-5xl mb-4">AYT Sınav Yapısı</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Alan bazlı soru dağılımı ve süreleri
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-orange-600/20 to-pink-600/20 border-b border-slate-700">
                <div className="text-orange-400">Ders</div>
                <div className="text-orange-400 text-center">Soru Sayısı</div>
                <div className="text-orange-400 text-right">Süre</div>
              </div>
              {curriculum.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 p-4 border-b border-slate-800 last:border-0 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="text-white">{item.field}</div>
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
            <h2 className="text-3xl md:text-5xl mb-4">AYT Paketleri</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              AYT başarınız için alan odaklı paketler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-orange-600/20 to-pink-600/20 border-orange-500 scale-105'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full text-sm">
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
                      <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-orange-600 to-pink-600 hover:shadow-lg hover:shadow-orange-500/50'
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
