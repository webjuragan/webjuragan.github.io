/* Web Juragan – bahasa otomatis (ID / EN)
   Urutan penentuan bahasa:
   1. ?lang=en / ?lang=id di URL
   2. Pilihan manual pengunjung (tombol ID | EN), hanya selama tab terbuka
   3. Negara pengunjung (bukan Indonesia -> Inggris)
   4. Jika negara gagal dideteksi: tetap bahasa Indonesia
*/
(function () {
  "use strict";

  var EN = {
    /* judul halaman */
    "Web Juragan – Jasa Bikin Website untuk Usaha": "Web Juragan – Website Design Service for Your Business",
    "Fitur Lengkap – Web Juragan": "Full Features – Web Juragan",
    "Paket Promo – Web Juragan": "Promo Package – Web Juragan",
    "Cara Pemesanan – Web Juragan": "How to Order – Web Juragan",
    "Hubungi Kami – Web Juragan": "Contact Us – Web Juragan",
    "Semua Contoh Website – Web Juragan": "All Website Examples – Web Juragan",

    /* atribut aria-label */
    "Pilih warna tampilan": "Choose color theme",
    "Warna navy emas": "Navy gold theme",
    "Warna hijau": "Green theme",
    "Warna biru": "Blue theme",
    "Warna pink": "Pink theme",
    "Isi halaman": "Page contents",

    /* umum */
    "← Kembali ke Web Juragan": "← Back to Web Juragan",
    "Chat WhatsApp": "Chat on WhatsApp",
    "Mau website untuk usahamu?": "Want a website for your business?",
    "Chat dulu aja, kita bahas bareng.": "Just chat with us first and we'll talk it through.",

    /* index – hero */
    "“Kami percaya bahwa setiap pelaku usaha kecil berhak untuk tampil profesional dan bersaing di era digital tanpa harus terbebani biaya mahal. Karena itulah Web Juragan hadir membantu menyederhanakan proses digitalisasi bisnis Anda melalui website profesional yang praktis”":
      "“We believe every small business deserves to look professional and compete in the digital era without being weighed down by high costs. That's why Web Juragan is here to simplify your business digital journey with a practical, professional website”",
    "Jasa bikin website untuk usaha anda. Rapi, enak dibuka di HP, dan pesanan masuk lewat WhatsApp.":
      "Website design service for your business. Clean, great on mobile, and orders come in through WhatsApp.",
    "Lihat contoh": "See examples",
    "Daftar isi": "Contents",
    "Contoh website": "Website examples",
    "Fitur lengkap": "Full features",
    "Paket promo": "Promo package",
    "Cara pemesanan": "How to order",
    "Hubungi kami": "Contact us",

    /* contoh */
    "Ketuk salah satu untuk melihat hasilnya. Semua bisa disesuaikan dengan usahamu.":
      "Tap any one to see the result. Everything can be tailored to your business.",
    "Semua contoh website": "All website examples",
    "Lihat contoh →": "See example →",
    "Lihat contoh website lainnya →": "See more website examples →",
    "Kafe": "Café", "Toko kue": "Bakery", "Bengkel motor": "Motorcycle repair",
    "Toko bunga": "Flower shop", "Rumah makan": "Restaurant", "Studio foto": "Photo studio",
    "Gym dan yoga": "Gym & yoga", "Kos-kosan": "Boarding house", "Katering": "Catering",
    "Fotografer wedding": "Wedding photographer", "Servis AC": "AC service",
    "Jasa pindahan": "Moving service", "Toko bangunan": "Building supplies",
    "Percetakan": "Printing", "Toko kelontong": "Grocery store", "Cuci mobil": "Car wash",
    "Toko hijab": "Hijab shop", "Toko ponsel dan servis HP": "Phone shop & repair",
    "Kursus mengemudi": "Driving course", "Kedai bakso": "Meatball stall",
    "Desain interior": "Interior design", "Jasa kebersihan": "Cleaning service",
    "Rental kendaraan": "Vehicle rental", "Klinik gigi": "Dental clinic", "Butik": "Boutique",
    "Perhiasan": "Jewelry", "Make up artist (MUA)": "Makeup artist (MUA)", "Apotek": "Pharmacy",
    "Web pribadi": "Personal website",

    /* fitur */
    "Fitur lengkap dan modern": "Complete and modern features",
    "Semua yang kamu butuhkan dalam satu website.": "Everything you need in one website.",
    "Desain Responsif": "Responsive Design",
    "Profil Bisnis": "Business Profile",
    "Profesional": "Professional",
    "Katalog Produk": "Product Catalog",
    "& Harga": "& Prices",
    "Integrasi": "Built-in",
    "Informasi Lokasi": "Location Info",
    "& Jam Operasional": "& Opening Hours",
    "Lengkap": "Complete",
    "Optimasi": "Optimization",
    "SEO Dasar": "Basic SEO",
    "Revisi": "Revisions",
    "2 Kali": "2 Rounds",

    /* harga */
    "Harga Pembuatan Website": "Website Development Price",
    "Rp1.800.000": "$450",
    "Rp650.000": "$150",
    "64% OFF": "67% OFF",
    "Promo berlaku hingga 31 Desember 2026.": "Promo valid until December 31, 2026.",
    "Dapatkan website bisnis profesional dengan harga spesial!": "Get a professional business website at a special price!",
    "Ambil promo via WhatsApp": "Claim promo via WhatsApp",

    /* cara */
    "Mudah, cepat, dan praktis!": "Easy, fast, and practical!",
    "1. Hubungi Kami": "1. Contact Us",
    "Chat via WhatsApp untuk konsultasi.": "Chat via WhatsApp for a consultation.",
    "2. Proses Desain": "2. Design Process",
    "Kami buat website sesuai kebutuhanmu.": "We build the website to fit your needs.",
    "3. Website Siap!": "3. Website Ready!",
    "Mulai gunakan website-mu.": "Start using your website.",

    /* kenapa pilih kami */
    "Kenapa pilih kami?": "Why choose us?",
    "Karena kami berkomitmen memberikan yang terbaik.": "Because we're committed to giving you our best.",
    "Desain Profesional": "Professional Design",
    "Pengerjaan Cepat": "Fast Turnaround",
    "Dukungan Support": "Dedicated Support",
    "Harga Terjangkau": "Affordable Pricing",

    /* nama toko contoh */
    "Apotek Sehat Sentosa": "Healthy Haven Pharmacy",
    "Pangkas Rapi": "Neat Cuts",
    "Sigap Motor": "Swift Motor",
    "Butik Rania": "Rania Boutique",
    "Kilap Auto": "Shine Auto",
    "Ruang Rapi": "Tidy Space",
    "Kuat Fit": "Strong Fit",
    "Rumah Singgah": "Stopover House",
    "Rumah Kinclong": "Sparkling Home",
    "Dapur Hangat": "Warm Kitchen",
    "Bakso Mantap": "Mighty Meatballs",
    "Senyum Sehat": "Healthy Smile",
    "Kopi Senja": "Sunset Coffee",
    "Kos Nyaman": "Cozy Stay",
    "Aman Jalan": "Safe Drive",
    "Bersih Wangi": "Clean & Fresh",
    "Cetak Cepat": "Quick Print",
    "Cahaya Emas": "Golden Glow",
    "Pindah Mudah": "Easy Move",
    "Jalan Terus": "Keep Rolling",
    "Cantik Kita": "Our Beauty",
    "Dingin Jaya": "Cool Breeze",
    "Glow Kulit": "Skin Glow",
    "Lensa Kita": "Our Lens",
    "Bangun Jaya": "Prime Build",
    "Bunga Kita": "Our Blooms",
    "Hijab Anggun": "Elegant Hijab",
    "Toko Berkah": "Blessed Mart",
    "Manis Rasa": "Sweet Taste",
    "Sinyal Prima": "Prime Signal",
    "Warung Bu Sari": "Sari's Eatery",
    "Momen Abadi": "Eternal Moments"
  };

  /* kalimat awal chat WhatsApp (teks sebelum di-encode) */
  var WA = {
    "Halo Web Juragan": "Hello Web Juragan",
    "Halo Web Juragan, saya mau tanya soal bikin website": "Hello Web Juragan, I'd like to ask about getting a website built",
    "Halo Web Juragan, saya mau bikin website": "Hello Web Juragan, I'd like to get a website built",
    "Halo Web Juragan, saya mau ambil promo website Rp650.000": "Hello Web Juragan, I'd like to claim the $150 website promo"
  };

  /* elemen dengan HTML campur (ditandai data-i18n-html="kunci") */
  var EN_HTML = {
    h1: 'Build a Website <br class="brhp">for Your <em>Business</em>'
  };

  var ATTRS = ["aria-label", "alt", "title"];
  var textNodes = [], attrItems = [], htmlItems = [], waItems = [], demoLinks = [];
  var MAIN = { index: 1, fitur: 1, harga: 1, cara: 1, hubungi: 1, contoh: 1 };
  var ALT = document.documentElement.getAttribute("data-alt"); /* halaman contoh punya pasangan ID/EN */
  var origTitle = document.title, current = "id", ready = false;

  function collect() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        if (p === "SCRIPT" || p === "STYLE" || p === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = w.nextNode())) {
      var t = n.nodeValue.trim();
      if (Object.prototype.hasOwnProperty.call(EN, t)) textNodes.push({ n: n, id: n.nodeValue, key: t });
    }
    var all = document.body.querySelectorAll("*");
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      for (var j = 0; j < ATTRS.length; j++) {
        var v = el.getAttribute(ATTRS[j]);
        if (v && Object.prototype.hasOwnProperty.call(EN, v)) attrItems.push({ el: el, a: ATTRS[j], id: v });
      }
      var k = el.getAttribute("data-i18n-html");
      if (k && EN_HTML[k]) htmlItems.push({ el: el, id: el.innerHTML, key: k });
      if (el.tagName === "A") {
        var h = el.getAttribute("href") || "";
        var dm = /^([a-z0-9-]+)\.html$/.exec(h);
        if (dm && !MAIN[dm[1]]) demoLinks.push({ el: el, id: h, en: dm[1] + ".en.html" });
        var m = /^(https:\/\/wa\.me\/\d+\?text=)([^&#]*)(.*)$/.exec(h);
        if (m) {
          var dec; try { dec = decodeURIComponent(m[2]); } catch (e) { dec = null; }
          if (dec && Object.prototype.hasOwnProperty.call(WA, dec)) {
            waItems.push({ el: el, id: h, en: m[1] + encodeURIComponent(WA[dec]) + m[3] });
          }
        }
      }
    }
  }

  function apply(lang) {
    if (!ready) { collect(); ready = true; }
    var en = lang === "en", i, it;
    for (i = 0; i < textNodes.length; i++) {
      it = textNodes[i];
      if (en) {
        var lead = it.id.match(/^\s*/)[0], trail = it.id.match(/\s*$/)[0];
        it.n.nodeValue = lead + EN[it.key] + trail;
      } else it.n.nodeValue = it.id;
    }
    for (i = 0; i < attrItems.length; i++) {
      it = attrItems[i];
      it.el.setAttribute(it.a, en ? EN[it.id] : it.id);
    }
    for (i = 0; i < htmlItems.length; i++) {
      it = htmlItems[i];
      it.el.innerHTML = en ? EN_HTML[it.key] : it.id;
    }
    for (i = 0; i < waItems.length; i++) {
      it = waItems[i];
      it.el.setAttribute("href", en ? it.en : it.id);
    }
    for (i = 0; i < demoLinks.length; i++) {
      it = demoLinks[i];
      it.el.setAttribute("href", en ? it.en : it.id);
    }
    document.title = en && Object.prototype.hasOwnProperty.call(EN, origTitle) ? EN[origTitle] : origTitle;
    document.documentElement.setAttribute("lang", en ? "en" : "id");
    current = lang;
    paintSwitch();
  }

  /* ---------- tombol ID | EN ---------- */
  var swEl;
  function buildSwitch() {
    var css = document.createElement("style");
    css.textContent =
      ".lang{display:inline-flex;vertical-align:middle;border:1px solid var(--line);border-radius:999px;overflow:hidden;background:var(--card)}" +
      ".lang button{all:unset;box-sizing:border-box;cursor:pointer;padding:4px 10px;font:700 12px/1 'DM Sans',system-ui,sans-serif;color:var(--muted)}" +
      ".lang button[aria-pressed=true]{background:var(--ac,#E7A524);color:var(--acink,#16302A)}" +
      ".lang button:focus-visible{outline:3px solid var(--ac);outline-offset:-3px}";
    document.head.appendChild(css);

    swEl = document.createElement("div");
    swEl.className = "lang";
    swEl.setAttribute("role", "group");
    swEl.setAttribute("aria-label", "Language / Bahasa");
    ["id", "en"].forEach(function (l) {
      var b = document.createElement("button");
      b.type = "button"; b.setAttribute("data-l", l); b.textContent = l.toUpperCase();
      b.addEventListener("click", function () { save(l); if (ALT) { if (l !== current) go(); } else apply(l); });
      swEl.appendChild(b);
    });

    /* tombol bahasa: di footer, sebaris di samping tulisan "WhatsApp" (tidak menambah tinggi footer) */
    var wa = document.querySelector("footer a[href*='wa.me']");
    if (wa && wa.parentNode) {
      swEl.style.marginLeft = "6px";
      wa.parentNode.appendChild(swEl);
    } else document.body.appendChild(swEl);
  }
  function paintSwitch() {
    if (!swEl) return;
    var bs = swEl.querySelectorAll("button");
    for (var i = 0; i < bs.length; i++)
      bs[i].setAttribute("aria-pressed", bs[i].getAttribute("data-l") === current ? "true" : "false");
  }

  /* ---------- penyimpanan & deteksi ---------- */
  function load(k, s) { try { return (s ? sessionStorage : localStorage).getItem(k); } catch (e) { return null; } }
  function put(k, v, s) { try { (s ? sessionStorage : localStorage).setItem(k, v); } catch (e) {} }
  function save(l) { put("wj-lang", l, true); } /* sessionStorage: hilang saat tab ditutup */

  var GEO = [
    ["https://get.geojs.io/v1/ip/country.json", function (j) { return j && j.country; }],
    ["https://api.country.is/", function (j) { return j && j.country; }]
  ];
  function detectCountry(done) {
    var cached = load("wj-cc", true);
    if (cached) return done(cached);
    var finished = false, i = 0;
    function end(cc) { if (finished) return; finished = true; if (cc) put("wj-cc", cc, true); done(cc); }
    function next() {
      if (i >= GEO.length) return end(null);
      var g = GEO[i++], t = setTimeout(next, 2500), over = false;
      function fail() { if (over) return; over = true; clearTimeout(t); next(); }
      try {
        fetch(g[0], { cache: "no-store" })
          .then(function (r) { return r.json(); })
          .then(function (j) {
            if (over) return;
            var c = g[1](j);
            if (c && /^[A-Za-z]{2}$/.test(c)) { over = true; clearTimeout(t); end(String(c).toUpperCase()); }
            else fail();
          })
          .catch(fail);
      } catch (e) { fail(); }
    }
    next();
  }

  function go() { location.replace(ALT + location.search + location.hash); }

  function init() {
    if (ALT) current = document.documentElement.getAttribute("lang") === "en" ? "en" : "id";
    /* tombol ID | EN hanya tampil di halaman Fitur Lengkap (ditandai data-lang-switch di <html>) */
    if (document.documentElement.hasAttribute("data-lang-switch")) { buildSwitch(); paintSwitch(); }
    if (ALT) apply = function (l) { if (l !== current) go(); }; /* mode halaman berpasangan: pindah ke halaman pasangannya */

    var q = /[?&]lang=(id|en)\b/i.exec(location.search);
    if (q) { var f = q[1].toLowerCase(); save(f); return apply(f); }

    var saved = load("wj-lang", true);
    if (saved === "id" || saved === "en") return apply(saved);

    detectCountry(function (cc) {
      if (load("wj-lang", true) === "id" || load("wj-lang", true) === "en") return; /* pengunjung sudah memilih sendiri */
      var lang = cc && cc !== "ID" ? "en" : "id"; /* negara tidak terdeteksi -> tetap Indonesia */
      if (lang !== current) apply(lang);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
