# 🎓 AI + SEO Odaklı Özel Ders Platformu – Full Proje Başlangıç Paketi

> **Hedef:** Matematik & Fizik ağırlıklı, tüm dersleri kapsayan, **AI önerilebilirliği + SEO uyumu yüksek**, lokasyon bazlı ölçeklenebilir, ileride mobil uygulamaya dönüşebilecek profesyonel bir özel ders ve eğitim platformu kurmak.

---

## 1️⃣ Projenin Ana Vizyonu

Bu proje;

- **İlkokul – Ortaokul – Lise** seviyelerinde
- **LGS – TYT – AYT** sınavlarına hazırlıkta
- **Matematik & Fizik merkezli**, ancak tüm dersleri kapsayan
- **Sınav koçluğu** ve **programlama / kodlama eğitimi** gibi katma değerli hizmetler sunan
- **SEO üzerinden organik öğrenci talebi toplayan**
- **AI (ChatGPT, Gemini vb.) sistemler tarafından önerilebilir**

bir eğitim platformu olarak tasarlanmıştır.

İlk fazda tanıtım + lead toplama, ilerleyen fazlarda **login, ödeme, mobil uygulama** hedeflenmektedir.

---

## 2️⃣ Hedef Kitle

- İlkokul (2–4. sınıf) öğrencileri ve velileri
- Ortaokul (5–8. sınıf) öğrencileri ve velileri
- LGS öğrencileri
- TYT / AYT öğrencileri
- Matematik ve fizikte zorlanan öğrenciler
- Akademik planlama ve motivasyon desteği arayan öğrenciler
- Çocukları için **kodlama / programlama** eğitimi isteyen veliler

---

## 3️⃣ Hizmet Kapsamı ve Önceliklendirme

### 🔵 Ana Trafik Motoru (ÖNCELİKLİ)

- Matematik Özel Ders (İlkokul, Ortaokul, LGS, TYT, AYT)
- Fizik Özel Ders (TYT, AYT)

### 🟢 Destekleyici Akademik Dersler

- Türkçe / Edebiyat
- Fen Bilimleri
- Kimya / Biyoloji
- Tarih / Coğrafya
- İngilizce

### 🟣 Katma Değerli Hizmetler

- 🎯 **Sınav Koçluğu** (LGS, TYT, AYT)
- 💻 **Programlama & Kodlama Dersleri**
  - İlkokul / Ortaokul / Lise seviyeleri
  - Temel algoritma, Scratch, Python, Web temelleri

---

## 4️⃣ SEO + AI Odaklı URL & Sayfa Mimarisi (FINAL)

### 🔗 Ana Prensipler

- Tek dinamik sayfa mimarisi
- Semantik, okunabilir, AI dostu URL’ler
- Thin content üretiminden kaçınma

---

### 📚 Akademik Ders Sayfaları

```
/ozel-ders/[lesson]/[location]/[exam]
```

Örnekler:

- /ozel-ders/matematik/kadikoy/tyt
- /ozel-ders/fizik/nilufer/ayt

---

### 🎯 Sınav Koçluğu Sayfaları

```
/sinav-koclugu/[exam]/[location]
```

Örnekler:

- /sinav-koclugu/lgs/kadikoy
- /sinav-koclugu/tyt/cankaya

> Koçluk hizmeti **sınav bazlıdır**, ders bazlı değildir.

---

### 💻 Programlama & Kodlama Dersleri

```
/kodlama-dersi/[level]/[location]
```

Level değerleri:

- ilkokul
- ortaokul
- lise

Örnekler:

- /kodlama-dersi/ortaokul/besiktas
- /kodlama-dersi/lise/nilufer

---

## 5️⃣ Lokasyon Stratejisi (Kontrollü İlçe Bazlı)

❗ Tüm Türkiye ile başlanmaz.

### İlk Aşama Lokasyonlar (Whitelist)

- Kadıköy (İstanbul)
- Beşiktaş (İstanbul)
- Şişli (İstanbul)
- Çankaya (Ankara)
- Nilüfer (Bursa)

Lokasyonlar JSON üzerinden yönetilir ve **sadece yüksek hacimli ilçeler** açılır.

---

## 6️⃣ JSON Tabanlı Veri Yapısı

### locations.json

```json
{
  "kadikoy": { "name": "Kadıköy", "city": "İstanbul", "priority": 1 },
  "nilufer": { "name": "Nilüfer", "city": "Bursa", "priority": 1 }
}
```

### lessons.json

```json
{
  "matematik": { "exams": ["lgs", "tyt", "ayt"] },
  "fizik": { "exams": ["tyt", "ayt"] }
}
```

---

## 7️⃣ Sayfa İçerik Şablonları

### 📘 Akademik Ders Sayfası

1. SEO Hero (Ders + Lokasyon + Sınav)
2. Kimler için uygun?
3. Müfredat & konu dağılımı
4. Ders işleyiş modeli
5. Öğrenci profili (AI-friendly)
6. İşler Yayınevi kaynak vurgusu
7. FAQ (Schema.org)
8. CTA – Ders Talep Et
9. Uzun SEO içeriği (800–1200 kelime)

---

### 🎯 Sınav Koçluğu Sayfası

- Koçluk nedir?
- Haftalık / aylık planlama
- Öğrenci takip sistemi
- Hedef belirleme
- Veli bilgilendirme modeli
- FAQ + CTA

---

### 💻 Kodlama Dersi Sayfası

- Yaş & seviye uygunluğu
- Öğretilen teknolojiler
- Kazanımlar
- Proje bazlı öğrenme
- Online / birebir seçenekleri

---

## 8️⃣ Blog & İçerik Ekosistemi

- Sanity.io CMS
- n8n + AI ile otomatik blog üretimi
- Blog → ders & koçluk sayfalarına internal link

Blog yazıları otomatik olarak:

- Ders
- Sınav
- Genel

olarak etiketlenir.

---

## 9️⃣ Render & Performans Stratejisi

- **SSG:** Ders, koçluk ve kodlama landing sayfaları
- **ISR:** Blog yazıları ve güncellenen SEO içerikleri

```ts
export const revalidate = 86400;
```

❌ Runtime SSR kullanılmaz (AI + SEO + Vercel Free plan nedeniyle).

---

## 🔟 Teknoloji Stack

- Next.js (App Router)
- TypeScript
- Sanity.io
- n8n (AI otomasyon)
- Vercel (Free plan uyumlu)

---

## 1️⃣1️⃣ İçerik & Kaynak Güveni

📚 **İşler Yayınevi ile iş birliği**

- Soru bankaları
- Deneme sınavları
- Ders kaynakları

Bu bilgi; ders sayfaları, koçluk sayfaları ve FAQ bölümlerinde **trust signal** olarak kullanılır.

---

## 1️⃣2️⃣ Roadmap

### Faz 1

- SEO + AI uyumlu site
- Lead toplama

### Faz 2

- Login / Öğrenci paneli
- Ders & koçluk talep sistemi

### Faz 3

- Mobil uygulama
- Video dersler
- Bildirim sistemi

---

## 1️⃣3️⃣ Başarı Kriterleri (KPI)

- 3 ayda index & long-tail trafik
- 6 ayda organik öğrenci talepleri
- AI cevaplarında görünürlük

---

## ✅ Sonuç

Bu doküman;

- Yazılımcı
- SEO uzmanı
- AI içerik üreticisi
- İş ortakları

=> Ayrıca biz kaynak da temin ediyoruz bunu da ekleyelim, kaynak temin ettiğimiz yani sayfaya
için **tek referans mimari belgedir**.

Tüm kararlar **bilinçli, ölçeklenebilir ve AI-first** olarak alınmıştır.
