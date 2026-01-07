import { Target, Users, BookOpen, Award, Clock, TrendingUp, Check, Star } from 'lucide-react';

export function HomePage() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Hedef Odaklı Eğitim',
      description: 'Her öğrencinin hedefine özel hazırlanmış müfredat ve çalışma programı.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Uzman Öğretmenler',
      description: 'Alanında deneyimli, üniversite mezunu öğretmenlerle birebir eğitim.',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Kapsamlı Müfredat',
      description: 'MEB müfredatına %100 uyumlu, güncel kaynak ve materyaller.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Başarı Garantili',
      description: 'Öğrencilerimizin %95\'i hedefledikleri okullara yerleşiyor.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Esnek Saatler',
      description: 'Size uygun gün ve saatlerde ders programı oluşturma imkanı.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Sürekli Takip',
      description: 'Düzenli deneme sınavları ve performans raporları ile gelişim takibi.',
    },
  ];

  const services = [
    {
      title: 'Birebir Özel Ders',
      description: 'Öğrenciye özel hazırlanmış programla birebir canlı ders',
      features: ['Kişisel müfredat', 'Esnek saatler', 'Online/Yüz yüze seçeneği'],
    },
    {
      title: 'Grup Dersleri',
      description: 'Küçük grup halinde etkileşimli dersler',
      features: ['4-6 kişilik gruplar', 'Uygun fiyat', 'Sosyal öğrenme'],
    },
    {
      title: 'Deneme Sınavları',
      description: 'Gerçek sınav formatında düzenli denemeler',
      features: ['Haftalık denemeler', 'Detaylı analiz', 'Performans takibi'],
    },
  ];

  const packages = [
    {
      name: 'Temel Paket',
      price: '2.500₺',
      period: '/ay',
      features: [
        'Haftada 2 saat ders',
        '1 ders seçimi',
        'Aylık deneme sınavı',
        'WhatsApp destek',
        'Online materyal',
      ],
      popular: false,
    },
    {
      name: 'Standart Paket',
      price: '4.500₺',
      period: '/ay',
      features: [
        'Haftada 4 saat ders',
        '2 ders seçimi',
        'Haftalık deneme sınavı',
        '7/24 WhatsApp destek',
        'Online + Basılı materyal',
        'Performans analizi',
      ],
      popular: true,
    },
    {
      name: 'Premium Paket',
      price: '7.500₺',
      period: '/ay',
      features: [
        'Haftada 8 saat ders',
        'Sınırsız ders seçimi',
        'Günlük deneme sınavı',
        '7/24 Özel danışman',
        'Tüm materyaller dahil',
        'Veli görüşmeleri',
        'Psikolojik destek',
      ],
      popular: false,
    },
  ];

  const curriculum = [
    {
      title: 'LGS Müfredatı',
      subjects: ['Türkçe', 'Matematik', 'Fen Bilimleri', 'İngilizce', 'Sosyal Bilgiler'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'TYT Müfredatı',
      subjects: ['Türkçe', 'Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Tarih', 'Coğrafya'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AYT Müfredatı',
      subjects: ['Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Edebiyat', 'Tarih', 'Coğrafya'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
              🎯 Türkiye\'nin En İyi Özel Ders Platformu
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Hayalinizdeki Okula Giden Yol
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              LGS, TYT ve AYT\'ye hazırlanan öğrenciler için uzman öğretmenlerle birebir özel dersler. 
              Hedeflerinize ulaşmanız için yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Ücretsiz Deneme Dersi
              </button>
              <button className="px-8 py-4 border border-slate-700 rounded-full hover:border-slate-600 hover:bg-slate-800/50 transition-all">
                Paketleri İncele
              </button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">10K+</div>
                <div className="text-slate-400 text-sm">Mutlu Öğrenci</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">95%</div>
                <div className="text-slate-400 text-sm">Başarı Oranı</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">50+</div>
                <div className="text-slate-400 text-sm">Uzman Öğretmen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section id="neden-biz" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Neden MatÖzel?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Öğrencilerimizin başarısı için en iyi eğitim deneyimini sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section id="hizmetler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Hizmetlerimiz</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              İhtiyacınıza göre özelleştirilmiş eğitim çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-2xl hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-2xl mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müfredat Section */}
      <section id="mufredat" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Müfredatımız</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              MEB müfredatına uygun, kapsamlı ve güncel eğitim içerikleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:scale-105 transition-transform"
              >
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} rounded-lg mb-4`}>
                  <h3 className="text-xl text-white">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paketler Section */}
      <section id="paketler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Eğitim Paketleri</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              İhtiyacınıza en uygun paketi seçin ve başarıya giden yolculuğunuza başlayın
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
                  <span className="text-slate-400">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl mb-4">Hazır mısınız?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz deneme dersinizi alın ve farkı kendiniz deneyimleyin
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:shadow-2xl transition-all">
            Ücretsiz Deneme Dersi Al
          </button>
        </div>
      </section>
    </div>
  );
}
