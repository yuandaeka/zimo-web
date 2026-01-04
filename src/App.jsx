import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ScanLine, Users, Award, Star, Heart, Zap, ShieldCheck, Gamepad2, ArrowRight, Globe, MessageCircle, Mail, Phone, MapPin, Trophy, Download } from 'lucide-react';

// --- KONFIGURASI LINK DOWNLOAD ---
// GANTI LINK INI DENGAN LINK GOOGLE DRIVE APLIKASI ANDA YANG ASLI
const DOWNLOAD_LINK = "https://drive.google.com/drive/folders/1xMF60xhMf0wj8YwFb3Vzhjhtz7QaEqkD?usp=drive_link"; 

// --- KAMUS BAHASA (DICTIONARY) ---
const TRANSLATIONS = {
  id: {
    nav: { home: "Beranda", about: "Tentang", features: "Fitur", quest: "Misi", market: "Pasar", play: "Mainkan!" },
    hero: {
      badge: "#1 Aplikasi Kesehatan Gamifikasi",
      title_1: "Cegah Malnutrisi",
      title_2: "Sambil Seru-seruan!",
      desc: "Aplikasi kesehatan berstandar internasional dengan AI Gemini. Yuk dukung SDGs Zero Hunger bareng Zimo!",
      btn_start: "Download App",
      btn_demo: "Lihat Demo"
    },
    about: {
      badge: "Latar Belakang",
      title: "Misi Penyelamatan Generasi Emas",
      desc_1: "Indonesia sedang menghadapi Triple Burden of Malnutrition. Remaja kita terancam Anemia, Stunting, dan Obesitas sekaligus.",
      desc_2: "Zimo hadir sebagai solusi digital yang menyenangkan. Kami percaya edukasi gizi tidak harus membosankan seperti kuliah.",
      card_anemia: "Cegah Anemia",
      card_stunting: "Lawan Stunting",
      stat_title: "Data Fakta 2025",
      stat_anemia: "Anemia Remaja",
      stat_malnutrition: "Kurang Gizi",
      quote: "Zimo membantu menurunkan angka ini dengan Gamifikasi!"
    },
    awards: {
      badge: "Prestasi Internasional",
      title: "Hall of Fame"
    },
    features: {
      badge: "Teknologi",
      title: "Fitur Unggulan",
      f1_title: "Konsul Gizi",
      f1_desc: "Chat dokter gizi tanpa takut dihakimi. Curhat soal diet jadi lebih santai.",
      f2_title: "AI Food Scan",
      f2_desc: "Foto makananmu! AI Gemini langsung menghitung kalori & proteinnya.",
      f3_title: "Smartwatch Sync",
      f3_desc: "Integrasi data langkah & detak jantung real-time dari jam tanganmu."
    },
    quest: {
      badge: "Gamifikasi",
      title: "Selesaikan Misi Harian!",
      desc: "Setiap tindakan sehatmu dihargai. Kumpulkan XP dan Coin untuk membuka item langka di market!",
      q1: "Makan Sayur Siang Ini",
      q2: "Minum 8 Gelas Air",
      q3: "Jogging 15 Menit",
      box_title: "Peti Misterius",
      box_desc: "Selesaikan 3 misi lagi untuk buka!",
      btn_progress: "Lihat Progress"
    },
    market: {
      badge: "Zimo Store",
      title: "Market Sehat & Avatar",
      desc: "Tukar koin hasil keringatmu dengan barang keren!",
      btn_all: "Lihat Semua"
    },
    community: {
      title: "Gabung Komunitas!",
      desc: "Kamu ngga sendiri! Ada 13.000+ Sobat Sehat yang siap dukung dietmu di Telegram.",
      btn_join: "Gabung Telegram"
    },
    footer: {
      desc: "Membangun generasi emas yang bebas anemia dan stunting melalui teknologi yang asik.",
      contact: "Kontak",
      menu: "Menu"
    }
  },
  en: {
    nav: { home: "Home", about: "About", features: "Features", quest: "Quests", market: "Market", play: "Play Now!" },
    hero: {
      badge: "#1 Gamified Health App",
      title_1: "Prevent Malnutrition",
      title_2: "While Having Fun!",
      desc: "International standard health app powered by Gemini AI. Let's support SDGs Zero Hunger with Zimo!",
      btn_start: "Download App",
      btn_demo: "Watch Demo"
    },
    about: {
      badge: "Background",
      title: "Saving The Golden Generation",
      desc_1: "The world is facing the Triple Burden of Malnutrition. Our youth are threatened by Anemia, Stunting, and Obesity.",
      desc_2: "Zimo comes as a fun digital solution. We believe nutrition education shouldn't be boring like a lecture.",
      card_anemia: "Prevent Anemia",
      card_stunting: "Fight Stunting",
      stat_title: "2025 Key Facts",
      stat_anemia: "Youth Anemia",
      stat_malnutrition: "Malnutrition",
      quote: "Zimo helps reduce these numbers through Gamification!"
    },
    awards: {
      badge: "International Achievement",
      title: "Hall of Fame"
    },
    features: {
      badge: "Technology",
      title: "Key Features",
      f1_title: "Nutrition Consult",
      f1_desc: "Chat with nutritionists without judgment. Discuss your diet comfortably.",
      f2_title: "AI Food Scan",
      f2_desc: "Snap your food! Gemini AI instantly calculates calories & protein.",
      f3_title: "Smartwatch Sync",
      f3_desc: "Real-time integration of steps & heart rate data from your watch."
    },
    quest: {
      badge: "Gamifikasi",
      title: "Complete Daily Quests!",
      desc: "Every healthy action is rewarded. Collect XP and Coins to unlock rare items in the market!",
      q1: "Eat Vegetables Today",
      q2: "Drink 8 Glasses of Water",
      q3: "Jogging for 15 Mins",
      box_title: "Mystery Chest",
      box_desc: "Complete 3 more quests to unlock!",
      btn_progress: "View Progress"
    },
    market: {
      badge: "Zimo Store",
      title: "Healthy Market & Avatar",
      desc: "Exchange your hard-earned coins for cool items!",
      btn_all: "View All"
    },
    community: {
      title: "Join the Community!",
      desc: "You are not alone! There are 13,000+ Healthy Buddies ready to support your diet on Telegram.",
      btn_join: "Join Telegram"
    },
    footer: {
      desc: "Building a golden generation free from anemia and stunting through fun technology.",
      contact: "Contact",
      menu: "Menu"
    }
  }
};

// --- DATA GAMBAR ---
const NEWS_DATA = [
  { title: "Zimo Menang Startup Nasional", media: "DetikHealth", date: "Jan 2026", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80" },
  { title: "Inovasi AI Gizi Remaja", media: "Kompas Tekno", date: "Des 2025", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80" },
  { title: "Aplikasi Karya Anak Bangsa", media: "TechInAsia", date: "Nov 2025", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80" },
];

const AWARDS_DATA = [
  { title: "Gold Medal UIID 2024", category: "Health Innovation", img: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=400&q=80" },
  { title: "Juara 1 Startup Kemenpora", category: "Youth Entrepreneur", img: "https://images.unsplash.com/photo-1569424888066-8889980a37c9?w=400&q=80" },
  { title: "Best AI Implementation", category: "Google DevFest", img: "https://images.unsplash.com/photo-1496469888073-80de7e952517?w=400&q=80" },
];

// --- KOMPONEN HELPER (HUD) ---
const GameHUD = () => (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 w-full max-w-lg bg-white/60 backdrop-blur-md p-3 rounded-2xl border-[3px] border-zimo-dark shadow-comic relative z-20">
    <div className="absolute -top-3 -right-3 bg-zimo-yellow border-2 border-zimo-dark rounded-full p-1 shadow-sm animate-bounce">
       <Heart size={16} className="text-zimo-red fill-zimo-red"/>
    </div>
    {/* HP Bar */}
    <div className="flex-1 flex items-center gap-2">
      <div className="w-10 h-10 bg-zimo-red rounded-xl border-2 border-zimo-dark flex items-center justify-center text-white shadow-sm">
        <Heart size={20} fill="white" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-[10px] font-bold mb-1 ml-1 text-zimo-dark"><span>HP</span><span>100/100</span></div>
        <div className="h-4 bg-white rounded-full border-2 border-zimo-dark overflow-hidden relative">
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5 }} className="h-full bg-zimo-red absolute top-0 left-0" />
        </div>
      </div>
    </div>
    {/* Energy Bar */}
    <div className="flex-1 flex items-center gap-2">
      <div className="w-10 h-10 bg-zimo-yellow rounded-xl border-2 border-zimo-dark flex items-center justify-center text-zimo-dark shadow-sm">
        <Zap size={20} fill="#14532D" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-[10px] font-bold mb-1 ml-1 text-zimo-dark"><span>Energy</span><span>Full</span></div>
        <div className="h-4 bg-white rounded-full border-2 border-zimo-dark overflow-hidden relative">
            <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1.5, delay: 0.2 }} className="h-full bg-zimo-yellow absolute top-0 left-0" />
        </div>
      </div>
    </div>
  </div>
);

// --- KOMPONEN: KARAKTER ZIMO (VIDEO VERSION) ---
// Ini yang sudah diganti ke VIDEO
const ZimoCharacter = ({ lang }) => {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Speech Bubble */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -top-16 -right-10 bg-white border-[3px] border-zimo-dark px-5 py-3 rounded-2xl rounded-bl-none shadow-comic z-30"
      >
        <p className="font-display text-zimo-dark font-bold text-sm flex items-center gap-1">
          {lang === 'id' ? "Ayo main!" : "Let's Play!"} <Heart size={14} className="text-red-500 fill-red-500"/>
        </p>
      </motion.div>

      {/* Floating Elements (Brokoli, Apel, Love) */}
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -left-10 text-4xl drop-shadow-md z-10">🥦</motion.div>
      <motion.div animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-10 -right-12 text-4xl drop-shadow-md z-10">🍎</motion.div>
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [-10, 10, -10] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-1/2 -left-20 text-3xl z-10">💖</motion.div>

      {/* CONTAINER VIDEO (Gaya Desain Zimo) */}
      <motion.div 
        animate={{ y: [0, -15, 0] }} // Animasi Melayang Halus
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative w-64 h-64 z-20"
      >
        {/* Bingkai Video */}
        <div className="w-full h-full rounded-[40%] overflow-hidden border-[5px] border-zimo-dark shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1)] bg-[#A5F3FC] relative">
           {/* VIDEO ELEMENT */}
           <video 
             autoPlay 
             loop 
             muted 
             playsInline 
             className="w-full h-full object-cover transform scale-110" 
           >
              {/* Pastikan file zimo-video.mp4 ada di folder PUBLIC */}
              <source src="/zimo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
           </video>
           
           {/* Efek Kilau */}
           <div className="absolute top-4 right-8 w-12 h-6 bg-white opacity-30 rounded-full rotate-[-20deg] pointer-events-none"></div>
        </div>

        {/* Bayangan Bawah */}
        <div className="absolute -bottom-8 left-10 right-10 h-4 bg-zimo-dark/20 rounded-[100%] blur-sm"></div>
      </motion.div>
    </div>
  );
};

const SectionTitle = ({ subtitle, title, align = "center" }) => (
  <div className={`text-${align} mb-12`}>
    <motion.span 
      whileHover={{ scale: 1.05 }}
      className="bg-white px-5 py-2 rounded-full border-[3px] border-zimo-dark font-bold text-sm shadow-[4px_4px_0px_0px_#14532D] mb-5 inline-flex items-center gap-2 text-zimo-main uppercase tracking-wider cursor-default"
    >
      <Heart size={14} className="fill-zimo-main animate-pulse"/> {subtitle}
    </motion.span>
    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-zimo-dark mt-2 leading-tight drop-shadow-sm">
      {title}
    </h2>
  </div>
);

// --- MAIN APP COMPONENT ---
function App() {
  const [lang, setLang] = useState('id'); // STATE UNTUK BAHASA (Default: ID)
  const t = TRANSLATIONS[lang]; // Shortcut untuk ambil teks sesuai bahasa

  const toggleLang = () => {
    setLang(prev => prev === 'id' ? 'en' : 'id');
  };

  // FUNGSI UNTUK DOWNLOAD
  const handleDownload = () => {
    window.open(DOWNLOAD_LINK, '_blank');
  };

  return (
    <div className="font-sans text-zimo-dark bg-zimo-light min-h-screen selection:bg-zimo-primary selection:text-zimo-dark overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 top-4 px-4">
        <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md border-[3px] border-zimo-dark rounded-full px-6 py-3 flex justify-between items-center shadow-comic">
          
          {/* BAGIAN LOGO (SUDAH DIGANTI GAMBAR) */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative group cursor-pointer">
               {/* Pastikan file zimo-logo.png ada di folder PUBLIC */}
               <img 
                 src="/zimo-logo.png" 
                 alt="Zimo Logo" 
                 className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition duration-300"
               />
               <div className="absolute inset-0 bg-yellow-300 rounded-full -z-10 scale-0 group-hover:scale-75 transition duration-300"></div>
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">Zimo<span className="text-zimo-main">.id</span></span>
          </div>

          <div className="hidden lg:flex gap-8 font-bold text-sm items-center">
            <a href="#beranda" className="hover:text-zimo-main hover:scale-105 transition flex items-center gap-1">{t.nav.home}</a>
            <a href="#about" className="hover:text-zimo-main hover:scale-105 transition flex items-center gap-1">{t.nav.about}</a>
            <a href="#fitur" className="hover:text-zimo-main hover:scale-105 transition">{t.nav.features}</a>
            <a href="#misi" className="hover:text-zimo-main hover:scale-105 transition">{t.nav.quest}</a>
            <a href="#market" className="hover:text-zimo-main hover:scale-105 transition">{t.nav.market}</a>
          </div>
          
          <div className="flex items-center gap-3">
             {/* LANGUAGE TOGGLE BUTTON */}
             <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-zimo-dark rounded-full font-bold hover:bg-gray-100 transition shadow-sm"
             >
                <Globe size={18} />
                <span>{lang === 'id' ? 'ID' : 'EN'}</span>
             </button>

             {/* TOMBOL MAIN/DOWNLOAD DI NAVBAR */}
             <button 
                onClick={handleDownload}
                className="bg-zimo-yellow text-zimo-dark px-6 py-2 rounded-full font-bold border-[3px] border-zimo-dark hover:bg-yellow-300 transition shadow-[2px_2px_0px_0px_#14532D] active:translate-y-[2px] active:shadow-none hidden sm:flex items-center gap-2 group"
             >
                <Gamepad2 size={18}/> {t.nav.play}
             </button>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section id="beranda" className="pt-40 pb-20 px-6 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#22C55E_2px,transparent_2px)] [background-size:32px_32px] opacity-10"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1">
            <GameHUD />
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-zimo-yellow/30 border-2 border-zimo-dark px-4 py-1 rounded-xl mb-4 shadow-sm rotate-[-2deg]">
                 <span className="font-bold text-sm text-zimo-dark flex items-center gap-2">
                   <Star size={16} className="fill-zimo-yellow text-zimo-dark"/> {t.hero.badge}
                 </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold mt-2 leading-tight mb-6 drop-shadow-sm">
                {t.hero.title_1} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zimo-main to-green-600" style={{ WebkitTextStroke: '1.5px #14532D' }}>{t.hero.title_2}</span>
              </h1>
              <p className="text-lg font-medium text-gray-600 mb-8 max-w-md leading-relaxed">
                {t.hero.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                
                {/* TOMBOL DOWNLOAD UTAMA */}
                <button 
                  onClick={handleDownload}
                  className="bg-zimo-primary text-zimo-dark px-8 py-4 rounded-2xl font-display font-bold text-xl border-[3px] border-zimo-dark shadow-comic hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#14532D] transition-all flex items-center gap-3 group"
                >
                  <Download /> {t.hero.btn_start} <Heart size={20} className="fill-zimo-dark group-hover:fill-red-500 transition-colors"/>
                </button>
                
                <button className="bg-white text-zimo-dark px-8 py-4 rounded-2xl font-display font-bold text-xl border-[3px] border-zimo-dark shadow-comic hover:bg-gray-50 transition-all">
                  {t.hero.btn_demo}
                </button>
              </div>
            </motion.div>
          </div>
          <div className="order-1 md:order-2 flex justify-center relative">
             <ZimoCharacter lang={lang} />
          </div>
        </div>
      </section>

      {/* WAVE SEPARATOR */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#86EFAC"></path></svg>
      </div>

      {/* 2. ABOUT & PROBLEM */}
      <section id="about" className="py-24 px-6 bg-zimo-primary relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
               <SectionTitle subtitle={t.about.badge} title={t.about.title} align="left"/>
               <p className="text-lg text-zimo-dark font-medium mb-6 leading-relaxed bg-white/50 p-6 rounded-3xl border-2 border-zimo-dark/20">
                 {t.about.desc_1}
               </p>
               <p className="text-lg text-zimo-dark mb-8">
                 {t.about.desc_2}
               </p>
               <div className="flex gap-4">
                  <div className="bg-white p-4 rounded-2xl border-2 border-zimo-dark shadow-sm flex items-center gap-3">
                     <div className="bg-red-100 p-2 rounded-lg border border-zimo-dark"><Heart className="text-red-500 fill-red-500"/></div>
                     <span className="font-bold">{t.about.card_anemia}</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border-2 border-zimo-dark shadow-sm flex items-center gap-3">
                     <div className="bg-orange-100 p-2 rounded-lg border border-zimo-dark"><Zap className="text-orange-500 fill-orange-500"/></div>
                     <span className="font-bold">{t.about.card_stunting}</span>
                  </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-[3rem] border-[4px] border-zimo-dark shadow-comic relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-bl-full z-0"></div>
               <h3 className="text-2xl font-display font-bold mb-6 text-zimo-dark relative z-10">{t.about.stat_title}</h3>
               <div className="space-y-6 relative z-10">
                  <div>
                    <div className="flex justify-between mb-2 font-bold"><span>{t.about.stat_anemia}</span><span className="text-red-500">30.7%</span></div>
                    <div className="h-4 bg-gray-100 rounded-full border-2 border-zimo-dark overflow-hidden">
                       <motion.div whileInView={{ width: "30.7%" }} transition={{ duration: 2 }} className="h-full bg-red-400"/>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 font-bold"><span>{t.about.stat_malnutrition}</span><span className="text-orange-500">23.2%</span></div>
                    <div className="h-4 bg-gray-100 rounded-full border-2 border-zimo-dark overflow-hidden">
                       <motion.div whileInView={{ width: "23.2%" }} transition={{ duration: 2 }} className="h-full bg-orange-400"/>
                    </div>
                  </div>
               </div>
               <div className="mt-8 bg-blue-50 p-4 rounded-xl border-2 border-blue-200 text-center text-sm font-bold text-blue-800">
                  "{t.about.quote}"
               </div>
            </div>
        </div>
      </section>

      {/* WAVE SEPARATOR (Inverted) */}
      <div className="w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#86EFAC"></path></svg>
      </div>

       {/* FITUR GRID (TRANSLATED) */}
       <section id="fitur" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle={t.features.badge} title={t.features.title} />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon: Users, title: t.features.f1_title, desc: t.features.f1_desc, color: "green"},
              {icon: ScanLine, title: t.features.f2_title, desc: t.features.f2_desc, color: "blue"},
              {icon: Zap, title: t.features.f3_title, desc: t.features.f3_desc, color: "yellow"}
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border-[3px] border-zimo-dark shadow-comic hover:-translate-y-2 transition-all group">
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl border-2 border-zimo-dark flex items-center justify-center mb-6`}>
                   <feature.icon size={32} className="text-zimo-dark"/>
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AWARDS */}
      <section className="py-20 px-6 bg-blue-50">
         <div className="max-w-6xl mx-auto">
            <SectionTitle subtitle={t.awards.badge} title={t.awards.title} />
            <div className="grid md:grid-cols-3 gap-8">
               {AWARDS_DATA.map((award, i) => (
                  <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-[2rem] border-[3px] border-zimo-dark overflow-hidden shadow-comic group">
                     <div className="h-48 overflow-hidden relative border-b-[3px] border-zimo-dark">
                        <img src={award.img} alt={award.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                        <div className="absolute top-3 right-3 bg-yellow-400 border-2 border-zimo-dark p-2 rounded-full shadow-sm"><Trophy size={20} className="text-white fill-white"/></div>
                     </div>
                     <div className="p-6 text-center">
                        <h3 className="font-display font-bold text-xl mb-1">{award.title}</h3>
                        <p className="text-gray-500 font-bold text-sm bg-gray-100 inline-block px-3 py-1 rounded-full">{award.category}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. MISI HARIAN */}
      <section id="misi" className="py-24 px-6 bg-yellow-50 relative overflow-hidden">
         <div className="max-w-5xl mx-auto bg-white rounded-[3rem] border-[4px] border-zimo-dark shadow-comic p-8 md:p-16 relative z-10">
            <div className="absolute -top-5 -left-5 text-6xl animate-bounce">💖</div>
            <div className="absolute -bottom-5 -right-5 text-6xl animate-bounce delay-700">🎁</div>
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="flex-1">
                  <SectionTitle subtitle={t.quest.badge} title={t.quest.title} align="left"/>
                  <p className="text-gray-600 mb-8 font-medium">{t.quest.desc}</p>
                  <div className="space-y-4">
                     {[
                        { title: t.quest.q1, xp: "+150 XP", done: true },
                        { title: t.quest.q2, xp: "+80 XP", done: false },
                        { title: t.quest.q3, xp: "+200 XP", done: false },
                     ].map((q, i) => (
                        <div key={i} className="flex items-center justify-between bg-white border-2 border-zimo-dark p-4 rounded-2xl shadow-sm hover:bg-green-50 transition cursor-pointer">
                           <div className="flex items-center gap-4">
                              <div className={`w-8 h-8 rounded-xl border-2 border-zimo-dark flex items-center justify-center transition ${q.done ? 'bg-zimo-main' : 'bg-gray-100'}`}>
                                 {q.done && <ShieldCheck className="text-white"/>}
                              </div>
                              <span className={`font-bold text-lg ${q.done ? 'line-through text-gray-400' : 'text-zimo-dark'}`}>{q.title}</span>
                           </div>
                           <span className="font-display font-bold text-sm bg-zimo-yellow px-3 py-1 rounded-lg border border-zimo-dark shadow-[2px_2px_0px_0px_#14532D]">{q.xp}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="w-full md:w-1/3 bg-blue-50 border-[3px] border-zimo-dark border-dashed rounded-[2.5rem] p-8 text-center flex flex-col items-center justify-center">
                  <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-8xl mb-4">📦</motion.div>
                  <h4 className="font-display font-bold text-xl mb-2">{t.quest.box_title}</h4>
                  <p className="text-sm text-gray-500 mb-6">{t.quest.box_desc}</p>
                  <button className="w-full bg-zimo-dark text-white font-bold py-3 rounded-xl shadow-comic hover:bg-green-800 transition">{t.quest.btn_progress}</button>
               </div>
            </div>
         </div>
      </section>

      {/* 5. MARKETPLACE */}
      <section id="market" className="py-24 px-6 bg-zimo-light">
         <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <SectionTitle subtitle={t.market.badge} title={t.market.title} align="left"/>
                  <p className="text-gray-500 font-medium">{t.market.desc}</p>
               </div>
               <button className="hidden md:flex items-center gap-2 font-bold text-zimo-main hover:underline text-lg">
                  {t.market.btn_all} <ArrowRight size={24}/>
               </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
               {[
                  { name: "Salad Buah", price: "Rp 15.000", type: "Food", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
                  { name: "Topi Petani", price: "200 Coins", type: "Avatar", img: "https://images.unsplash.com/photo-1572307480813-5b0aa7017967?w=400" },
                  { name: "Jus Kale", price: "Rp 20.000", type: "Food", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
                  { name: "Baju Zimo", price: "500 Coins", type: "Avatar", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400" },
               ].map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="bg-white rounded-3xl border-[3px] border-zimo-dark overflow-hidden shadow-comic group flex flex-col">
                     <div className="h-48 overflow-hidden relative border-b-2 border-zimo-dark bg-gray-100">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500"/>
                        <span className="absolute top-2 left-2 bg-white/90 px-3 py-1 rounded-lg border border-zimo-dark text-xs font-bold uppercase">{item.type}</span>
                        <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full border border-zimo-dark hover:bg-pink-100 transition"><Heart size={16} className="text-pink-500"/></button>
                     </div>
                     <div className="p-5 flex flex-col flex-1 justify-between">
                        <div><h4 className="font-bold text-lg leading-tight mb-2">{item.name}</h4></div>
                        <div className="flex justify-between items-center mt-2">
                           <span className="font-display font-bold text-zimo-dark bg-zimo-yellow/30 px-3 py-1 rounded-lg border border-zimo-dark/10">{item.price}</span>
                           <button className="bg-zimo-main text-white p-2 rounded-lg border-2 border-zimo-dark hover:bg-green-600 transition shadow-sm"><ShoppingBag size={20}/></button>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. KOMUNITAS */}
      <section className="py-24 px-6 bg-zimo-dark text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="w-24 h-24 bg-blue-500 rounded-3xl border-4 border-white mx-auto flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(59,130,246,0.6)]">
               <MessageCircle size={48} className="text-white"/>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6">{t.community.title}</h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">{t.community.desc}</p>
            <button className="bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl border-[4px] border-white shadow-[8px_8px_0px_0px_#ffffff] hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 mx-auto group">
               <Globe size={24}/> {t.community.btn_join} <Heart className="fill-white hidden group-hover:block animate-ping" size={16}/>
            </button>
         </div>
      </section>

      {/* 7. BERITA */}
      <section className="py-20 px-6 bg-white border-t-[6px] border-zimo-primary">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
               <h3 className="font-display font-bold text-2xl text-gray-400 uppercase tracking-widest mb-2">Press & Media</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {NEWS_DATA.map((news, i) => (
                  <a key={i} href="#" className="group block">
                     <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 group-hover:border-zimo-dark transition-all">
                        <div className="h-48 overflow-hidden">
                           <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale group-hover:grayscale-0"/>
                        </div>
                        <div className="p-4 bg-gray-50 group-hover:bg-white transition">
                           <div className="flex justify-between text-xs font-bold text-gray-400 mb-2 uppercase">
                              <span>{news.media}</span>
                              <span>{news.date}</span>
                           </div>
                           <h4 className="font-bold text-lg leading-tight group-hover:text-zimo-main transition">{news.title}</h4>
                        </div>
                     </div>
                  </a>
               ))}
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zimo-dark text-white pt-20 pb-10 px-6 mt-12">
         <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 bg-zimo-primary rounded-2xl border-[3px] border-white flex items-center justify-center font-display font-bold text-2xl text-zimo-dark">Z</div>
                 <span className="text-3xl font-display font-bold">Zimo Project</span>
               </div>
               <p className="text-green-200/80 mb-6 max-w-sm text-lg leading-relaxed">{t.footer.desc}</p>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border-2 border-transparent hover:border-white hover:bg-zimo-primary hover:text-zimo-dark cursor-pointer transition"><Globe size={24}/></div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border-2 border-transparent hover:border-white hover:bg-zimo-primary hover:text-zimo-dark cursor-pointer transition"><Mail size={24}/></div>
               </div>
            </div>
            <div>
               <h4 className="font-bold text-xl mb-6 text-zimo-primary">{t.footer.contact}</h4>
               <ul className="space-y-4 text-green-100">
                  <li className="flex items-center gap-3"><Mail size={20}/> hello@zimo.id</li>
                  <li className="flex items-center gap-3"><Phone size={20}/> +62 812-3456-7890</li>
                  <li className="flex items-start gap-3"><MapPin size={20} className="mt-1"/> UMS, Surakarta, Indonesia</li>
               </ul>
            </div>
            <div>
               <h4 className="font-bold text-xl mb-6 text-zimo-primary">{t.footer.menu}</h4>
               <ul className="space-y-3 font-medium text-green-100">
                  <li><a href="#about" className="hover:text-white hover:underline decoration-zimo-primary underline-offset-4">{t.nav.about}</a></li>
                  <li><a href="#fitur" className="hover:text-white hover:underline decoration-zimo-primary underline-offset-4">{t.nav.features}</a></li>
                  <li><a href="#komunitas" className="hover:text-white hover:underline decoration-zimo-primary underline-offset-4">{t.nav.community}</a></li>
               </ul>
            </div>
         </div>
         <div className="border-t border-green-800 pt-8 text-center text-green-400 text-sm font-medium">
            &copy; 2026 Zimo Project. All rights reserved. Made with 💖 by Your Trusted Assistant.
         </div>
      </footer>
    </div>
  );
}

export default App;