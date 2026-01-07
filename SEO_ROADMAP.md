# MatÖzel - AI Destekli & Yerel SEO Geliştirme Yol Haritası

Bu belge, MatÖzel projesini "AI Destekli Kişiselleştirilmiş Özel Ders Platformu" olarak yeniden konumlandırmak ve Türkiye genelinde yerel aramalarda (Local SEO) öne çıkmak için izlenecek adımları içerir.

## 1. Marka Konumlandırma & AI Vurgusu (Ana Sayfa ve Genel)

**Hedef:** Ziyaretçilere ilk saniyede "Yapay Zeka Destekli Eğitim" vizyonunu aktarmak.

- [ ] **Hero Bölümü Güncellemesi:** "Özel Ders" yerine "Yapay Zeka Destekli Kişiselleştirilmiş Öğrenme Deneyimi" vurgusu.
- [ ] **"Nasıl Çalışır?" Bölümü:**
  - AI'nın öğrencinin seviyesini nasıl analiz ettiği.
  - Eksik konuları nasıl tespit edip kişiye özel program oluşturduğu.
  - 7/24 AI Asistan desteği vurgusu.
- [ ] **Görsel Revizyonu:** Teknoloji ve eğitimi birleştiren modern, fütüristik (Meteors efekti ile uyumlu) ikonlar ve görseller.

## 2. Yerel SEO (Local SEO) Altyapısı

**Hedef:** "Kadıköy Matematik Özel Ders", "Ankara Fizik Özel Ders" gibi aramalarda listelenmek.

### URL Yapısı

Dinamik bir yapı kurarak binlerce kombinasyonu tek bir şablon üzerinden yöneteceğiz:

- `/{ders}-ozel-ders/{lokasyon}`
- Örnek: `/matematik-ozel-ders/istanbul` veya `/fizik-ozel-ders/kadikoy`

### Teknik Uygulama Adımları

- [ ] **Veri Yapısı:**
  - `lessons`: Matematik, Fizik, Kimya...
  - `locations`: İstanbul, Ankara, İzmir, Kadıköy, Beşiktaş, Çankaya...
- [ ] **Dinamik Rota Oluşturma:** `app/[lesson]/[location]/page.tsx` yapısının kurulması.
- [ ] **Dinamik Metadata (SEO Başlıkları):**
  - Title: "{Lokasyon} {Ders} Özel Ders - AI Destekli Birebir Eğitim | MatÖzel"
  - Description: "{Lokasyon} bölgesinde {ders} özel ders mi arıyorsunuz? Yapay zeka destekli analiz ve uzman öğretmenlerle {lokasyon} için en iyi {ders} eğitimi."

## 3. İçerik Stratejisi

**Hedef:** Her sayfanın özgün ve değerli görünmesini sağlamak (Duplicate content cezasından kaçınmak).

- [ ] **Şablon İçerik Üretimi:**
  - Her lokasyon ve ders için özelleşmiş metin şablonları.
  - Örn: "{Lokasyon} öğrencilerimiz için geliştirdiğimiz..."
- [ ] **FAQ (Sıkça Sorulan Sorular):** Lokasyona özel sorular (Örn: "{Lokasyon} bölgesinde yüz yüze ders var mı?").
- [ ] **Schema Markup (Yapısal Veri):** Google'ın işletmeyi ve hizmeti yerel olarak tanıması için `LocalBusiness` ve `Service` şemalarının eklenmesi.

## 4. Site Haritası (Sitemap) ve İndeksleme

**Hedef:** Google'ın bu binlerce sayfayı hızlıca keşfetmesi.

- [ ] **Sitemap.xml:** Tüm ders x lokasyon kombinasyonlarının otomatik olarak sitemap'e eklenmesi.
- [ ] **Internal Linking (İç Linkleme):** Footer veya özel bir "Hizmet Bölgelerimiz" alanında popüler lokasyonlara link verilmesi.

---

**Onayınızla birlikte 1. maddeden (AI Vurgusu ve Ana Sayfa) başlayarak geliştirmelere geçilecektir.**
