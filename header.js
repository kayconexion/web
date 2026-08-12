document.addEventListener('DOMContentLoaded',()=>{
  const root=document.getElementById('header-root');
  if(!root) return;
  const headerHTML = `
<header class="header-black" id="mainHeader" style="position:fixed;top:0;left:0;right:0;z-index:100;background:#000000;border-bottom:1px solid rgba(255,255,255,0.08);">
  <div class="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-3 gap-3">
    <a href="index.html" class="flex items-center gap-3 shrink-0">
      <img src="https://kay-conexion.com/wp-content/uploads/2025/03/KAY-LOGO-FINAL-CVS_05-e1759693247935-300x171.jpg" alt="Kay Conexion" style="height:46px;">
    </a>
    <nav class="hidden lg:flex items-center gap-6 text-white text-[13px] font-semibold shrink-0">
      <a href="index.html" class="hover:text-[#FFC53A] transition">Inicio</a>
      <a href="cursos.html" class="hover:text-[#FFC53A] transition">Cursos</a>
      <a href="mentores-ia.html" class="hover:text-[#FFC53A] transition">Mentores IA</a>
      <div class="dropdown relative" data-dropdown="libros">
        <button class="dropdown-toggle hover:text-[#FFC53A] flex items-center gap-1" data-target="libros">Libros <span class="arrow transition-transform">▾</span></button>
        <div id="dropdown-libros" class="dropdown-menu absolute top-full left-0 mt-2 bg-white rounded-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-2 min-w-[220px] hidden z-50">
          <a href="amame-7-veces.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">📚 Ámame 7 veces</a>
          <a href="yana-los-7-codigos-del-cambio.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">📖 Los 7 códigos del cambio</a>
        </div>
      </div>
      <div class="dropdown relative" data-dropdown="nosotros">
        <button class="dropdown-toggle hover:text-[#FFC53A] flex items-center gap-1" data-target="nosotros">Nosotros <span class="arrow transition-transform">▾</span></button>
        <div id="dropdown-nosotros" class="dropdown-menu absolute top-full left-0 mt-2 bg-white rounded-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-2 min-w-[180px] hidden z-50">
          <a href="nosotros.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">Acerca de</a>
          <a href="#" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">Novedades</a>
          <a href="testimonios.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">Testimonios</a>
          <a href="galeria.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">Galería</a>
        </div>
      </div>
      <div class="dropdown relative" data-dropdown="terapias">
        <button class="dropdown-toggle hover:text-[#FFC53A] flex items-center gap-1" data-target="terapias">Terapias <span class="arrow transition-transform">▾</span></button>
        <div id="dropdown-terapias" class="dropdown-menu absolute top-full left-0 mt-2 bg-white rounded-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-2 min-w-[220px] hidden z-50">
          <a href="bio-neuro-ciencia.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">🧠 BIO NEURO CIENCIA</a>
          <a href="coaching.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">💬 COACHING</a>
          <a href="hipnosis-ericksoniana.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">🌀 HIPNOSIS ERICKSONIANA</a>
          <a href="neo-chamanismo.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">🔮 NEO CHAMANISMO</a>
          <a href="metafisica.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">✨ METAFÍSICA</a>
          <a href="pnl.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">🎯 PNL</a>
          <a href="terapias.html" class="block px-3 py-2 rounded-[8px] hover:bg-black/5 text-[#101218] text-[13px]">VER + TERAPIAS</a>
        </div>
      </div>
    </nav>
     <!-- DERECHA: REDES + IDIOMA + BOTONES EN UNA SOLA FILA -->
    <div class="flex items-center gap-2 shrink-0 relative" style="flex-wrap:nowrap;">
      <!-- REDES CON ICONOS SVG CORRECTOS -->
      <div class="hidden md:flex items-center gap-1.5 shrink-0">
        <a href="https://www.facebook.com/KayConexion" target="_blank" class="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] transition" title="Facebook">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z"/></svg>
        </a>
        <a href="https://www.youtube.com/@kayconexion" target="_blank" class="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] transition" title="YouTube">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 12.2c0-1.5-.1-2.9-.3-4.2-.2-1.1-.8-2-1.8-2.6-1-.6-2.1-.9-3.4-1.1-1.7-.2-3.7-.3-6-.3s-4.3.1-6 .3c-1.3.2-2.4.5-3.4 1.1-1 .6-1.6 1.5-1.8 2.6-.2 1.3-.3 2.7-.3 4.2s.1 2.9.3 4.2c.2 1.1.8 2 1.8 2.6 1 .6 2.1.9 3.4 1.1 1.7.2 3.7.3 6 .3s4.3-.1 6-.3c1.3-.2 2.4-.5 3.4-1.1 1-.6 1.6-1.5 1.8-2.6.2-1.3.3-2.7.3-4.2zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
        </a>
        <a href="https://www.instagram.com/kayconexion_" target="_blank" class="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] transition" title="Instagram">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5a3.5 3.5 0 01-1.3-.9 3.5 3.5 0 01-.9-1.3c-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .4a2 2 0 00-.7.4 2 2 0 00-.5.5c-.1.2-.3.7-.4 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1 .2 1.5.4 1.9.1.2.3.4.5.6.2.2.4.4.6.5.4.2.9.3 1.9.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.2 1.9-.4.2-.1.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1-.2-1.5-.4-1.9a2 2 0 00-.5-.6 2 2 0 00-.6-.5c-.4-.2-.9-.3-1.9-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a5.9 5.9 0 110 11.8 5.9 5.9 0 010-11.8zm0 1.8a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2zm6-1.9a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/></svg>
        </a>
        <a href="https://wa.me/34623622745" target="_blank" class="w-8 h-8 rounded-full bg-[#FFC53A] flex items-center justify-center text-[#20365b] hover:scale-110 transition" title="WhatsApp">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0012.04 2C6.53 2 2.04 6.5 2.04 12.01c0 1.76.46 3.48 1.33 5L2 22l5.16-1.35a9.8 9.8 0 004.88 1.31h.01c5.5 0 10-4.5 10-10.01a9.75 9.75 0 00-2.9-6.94l-.14-.1zM12.05 19.9h-.01a8 8 0 01-4.08-1.11l-.29-.17-3.06.8.82-2.98-.19-.31a8 8 0 01-1.23-4.12c0-4.41 3.6-8.01 8.03-8.01 2.14 0 4.15.84 5.66 2.36a7.97 7.97 0 012.35 5.65c0 4.42-3.6 8.02-8.04 8.02zm4.4-6c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/></svg>
        </a>
      </div>
      
       <!-- BOTONES ACCESO DESKTOP -->
      <a href="https://sso.hotmart.com/login" class="hidden md:flex text-white text-[11px] font-semibold border border-white/20 rounded-full px-3 py-[5px] hover:border-[#FFC53A] hover:text-[#FFC53A] transition shrink-0 items-center justify-center">Acceso</a>
      <a href="https://sso.hotmart.com/signup" class="hidden md:flex bg-white text-[#20365b] text-[11px] font-bold rounded-full px-3 py-[5px] hover:bg-[#FFC53A] transition shrink-0 items-center justify-center">
      Crear cuenta</a>

      <!-- BOTON IDIOMA CON ICONO GLOBO - AL CLIC MUESTRA GTRANSLATE -->
      <div class="relative shrink-0">
        <button id="langToggleBtn" class="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] hover:border-[#FFC53A] transition-all shrink-0" title="Idioma / Language">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </button>
        <!-- GTRANSLATE OCULTO - SE MUESTRA AL CLICAR EL BOTON -->
        <div id="langDropdown" class="hidden absolute top-full right-0 mt-3 bg-white rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-black/5 p-2 z-[9999] min-w-[160px]">
          <div class="flex items-center gap-2 px-3 py-2 mb-1 border-b border-black/5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#101218" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span class="text-[11px] font-bold tracking-widest text-[#101218]">IDIOMA</span>
          </div>
          <div class="gtranslate_wrapper"></div>
        </div>
      </div>

      <!-- HAMBURGUESA MOBILE -->
      <button id="kayHamburger" class="lg:hidden w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] hover:border-[#FFC53A] transition-all shrink-0 ml-1" aria-label="Menú">
        <svg id="iconHamburger" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
        <svg id="iconClose" class="hidden" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  </div>
</header>

<!-- MOBILE DRAWER -->
<div id="kayMobileDrawer" class="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl translate-x-full transition-transform duration-300 lg:hidden">
  <div class="pt-[80px] px-6 pb-6 h-full overflow-y-auto">
    <nav class="flex flex-col gap-1">
      <a href="index.html" class="text-white text-[18px] font-semibold py-3 border-b border-white/10">Inicio</a>
      <a href="cursos.html" class="text-white text-[18px] font-semibold py-3 border-b border-white/10">Cursos</a>
      <a href="mentores-ia.html" class="text-white text-[18px] font-semibold py-3 border-b border-white/10">Mentores IA</a>

      <div class="py-2 border-b border-white/10">
        <button class="mobile-dropdown-btn w-full flex items-center justify-between text-white text-[18px] font-semibold py-3">Libros <span>▾</span></button>
        <div class="mobile-dropdown-content hidden pl-4 mt-2 space-y-2">
          <a href="amame-7-veces.html" class="block text-white/70 py-2">📚 Ámame 7 veces</a>
          <a href="yana-los-7-codigos-del-cambio.html" class="block text-white/70 py-2">📖 Los 7 códigos del cambio</a>
        </div>
      </div>
      
      <div class="py-2 border-b border-white/10">
        <button class="mobile-dropdown-btn w-full flex items-center justify-between text-white text-[18px] font-semibold py-3">
          Nosotros <span>▾</span>
        </button>
        <div class="mobile-dropdown-content hidden pl-4 mt-2 space-y-2">
          <a href="nosotros.html" class="block text-white/70 py-2">Acerca de</a>
          <a href="testimonios.html" class="block text-white/70 py-2">Testimonios</a>
          <a href="galeria.html" class="block text-white/70 py-2">Galería</a>
        </div>
      </div>

      <a href="https://sso.hotmart.com/login" class="text-white text-[18px] font-semibold py-3 border-b border-white/10">Acceso</a>

      <a href="https://sso.hotmart.com/signup" class="text-white text-[18px] font-semibold py-3 border-white/10">Crear cuenta</a>

      <div class="flex items-center gap-2 pt-4 border-t border-white/10">
          <a href="https://www.facebook.com/KayConexion" target="_blank" class="w-10 h-10 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] transition"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z"/></svg></a>
          <a href="https://www.youtube.com/@kayconexion" target="_blank" class="w-10 h-10 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] transition"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 12.2c0-1.5-.1-2.9-.3-4.2-.2-1.1-.8-2-1.8-2.6-1-.6-2.1-.9-3.4-1.1-1.7-.2-3.7-.3-6-.3s-4.3.1-6 .3c-1.3.2-2.4.5-3.4 1.1-1 .6-1.6 1.5-1.8 2.6-.2 1.3-.3 2.7-.3 4.2s.1 2.9.3 4.2c.2 1.1.8 2 1.8 2.6 1 .6 2.1.9 3.4 1.1 1.7.2 3.7.3 6 .3s4.3-.1 6-.3c1.3-.2 2.4-.5 3.4-1.1 1-.6 1.6-1.5 1.8-2.6.2-1.3.3-2.7.3-4.2zM10 15.5v-7l6 3.5-6 3.5z"/></svg></a>
          <a href="https://www.instagram.com/kayconexion_" target="_blank" class="w-10 h-10 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] transition"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5a3.5 3.5 0 01-1.3-.9 3.5 3.5 0 01-.9-1.3c-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .4a2 2 0 00-.7.4 2 2 0 00-.5.5c-.1.2-.3.7-.4 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1 .2 1.5.4 1.9.1.2.3.4.5.6.2.2.4.4.6.5.4.2.9.3 1.9.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.2 1.9-.4.2-.1.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1-.2-1.5-.4-1.9a2 2 0 00-.5-.6 2 2 0 00-.6-.5c-.4-.2-.9-.3-1.9-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a5.9 5.9 0 110 11.8 5.9 5.9 0 010-11.8zm0 1.8a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2zm6-1.9a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/></svg></a>
          <a href="https://wa.me/41764421370" target="_blank" class="w-10 h-10 rounded-full bg-[#FFC53A] grid place-items-center text-[#20365b] hover:scale-105 transition"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0012.04 2C6.53 2 2.04 6.5 2.04 12.01c0 1.76.46 3.48 1.33 5L2 22l5.16-1.35a9.8 9.8 0 004.88 1.31h.01c5.5 0 10-4.5 10-10.01a9.75 9.75 0 00-2.9-6.94l-.14-.1zM12.05 19.9h-.01a8 8 0 01-4.08-1.11l-.29-.17-3.06.8.82-2.98-.19-.31a8 8 0 01-1.23-4.12c0-4.41 3.6-8.01 8.03-8.01 2.14 0 4.15.84 5.66 2.36a7.97 7.97 0 012.35 5.65c0 4.42-3.6 8.02-8.04 8.02zm4.4-6c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/></svg></a>
        </div>

    </nav>
  </div>
</div>
  `;
  root.innerHTML=headerHTML;

  const btn=document.getElementById('kayHamburger');
  const drawer=document.getElementById('kayMobileDrawer');
  const iconH=document.getElementById('iconHamburger');
  const iconC=document.getElementById('iconClose');
  if(btn && drawer){
    btn.addEventListener('click',()=>{
      const isOpen=!drawer.classList.contains('translate-x-full');
      if(isOpen){
        drawer.classList.add('translate-x-full');
        iconH.classList.remove('hidden');
        iconC.classList.add('hidden');
        document.body.style.overflow='';
      } else {
        drawer.classList.remove('translate-x-full');
        iconH.classList.add('hidden');
        iconC.classList.remove('hidden');
        document.body.style.overflow='hidden';
      }
    });
  }

  document.querySelectorAll('.mobile-dropdown-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      const content=b.nextElementSibling;
      const arrow=b.querySelector('span');
      const isOpen=!content.classList.contains('hidden');
      if(isOpen){
        content.classList.add('hidden');
        if(arrow) arrow.style.transform='rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        if(arrow) arrow.style.transform='rotate(180deg)';
      }
    });
  });

  // NUEVO: SUBMENUS EN CLIC (LIBROS, NOSOTROS, TERAPIAS) - NO HOVER
  const dropdowns = document.querySelectorAll('.dropdown');
  function closeAllDropdowns(exceptId){
    document.querySelectorAll('.dropdown-menu').forEach(menu=>{
      if(menu.id !== 'dropdown-'+exceptId){
        menu.classList.add('hidden');
      }
    });
    document.querySelectorAll('.dropdown .arrow').forEach(arrow=>{
      const parent = arrow.closest('.dropdown');
      if(parent && parent.dataset.dropdown !== exceptId){
        arrow.style.transform='rotate(0deg)';
      }
    });
  }

  document.querySelectorAll('.dropdown-toggle').forEach(toggle=>{
    toggle.addEventListener('click',(e)=>{
      e.stopPropagation();
      const target = toggle.dataset.target;
      const menu = document.getElementById('dropdown-'+target);
      const arrow = toggle.querySelector('.arrow');
      if(!menu) return;
      const isHidden = menu.classList.contains('hidden');
      closeAllDropdowns(isHidden ? target : null);
      if(isHidden){
        menu.classList.remove('hidden');
        if(arrow) arrow.style.transform='rotate(180deg)';
      } else {
        menu.classList.add('hidden');
        if(arrow) arrow.style.transform='rotate(0deg)';
      }
    });
  });

  // Cerrar dropdowns al hacer clic fuera
  document.addEventListener('click',(e)=>{
    if(!e.target.closest('.dropdown')){
      closeAllDropdowns(null);
    }
    if(!e.target.closest('#langToggleBtn') && !e.target.closest('#langDropdown')){
      const langDropdown = document.getElementById('langDropdown');
      if(langDropdown){
        langDropdown.classList.add('hidden');
        langDropdown.classList.remove('block');
      }
    }
  });

  // BOTON IDIOMA QUE MUESTRA GTRANSLATE
  const langBtn = document.getElementById('langToggleBtn');
  const langDropdown = document.getElementById('langDropdown');
  if(langBtn && langDropdown){
    langBtn.addEventListener('click',(e)=>{
      e.stopPropagation();
      const isHidden = langDropdown.classList.contains('hidden');
      if(isHidden){
        langDropdown.classList.remove('hidden');
        langDropdown.classList.add('block');
        closeAllDropdowns(null);
      } else {
        langDropdown.classList.add('hidden');
        langDropdown.classList.remove('block');
      }
    });
  }

  window.gtranslateSettings = {
    "default_language":"es",
    "languages":["es","en","fr","de","it","pt","ru"],
    "wrapper_selector":".gtranslate_wrapper",
    "flag_size":16,
    "alt_flags":{"en":"usa","pt":"brazil"}
  };

  const gtScript = document.createElement('script');
  gtScript.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
  gtScript.defer = true;
  document.head.appendChild(gtScript);

  const style = document.createElement('style');
  style.textContent = `
    body{padding-top:64px !important;}
    #mainHeader .flex.items-center.gap-2 { flex-wrap: nowrap !important; }
    /* FIX ELEGANTE NEGRO + MOBILE NO TAPA HAMBURGUESA */
    .gtranslate_wrapper { 
      width: 100% !important;
      display: block !important;
    }
    #kayHamburger{
      position: relative !important;
      z-index: 60 !important;
      flex-shrink: 0 !important;
    }
    #langToggleBtn{
      position: relative !important;
      z-index: 60 !important;
      flex-shrink: 0 !important;
    }
    #langDropdown{
      animation: fadeInLang 0.2s ease-out;
    }
    @keyframes fadeInLang{
      from{opacity:0;transform:translateY(-8px);}
      to{opacity:1;transform:translateY(0);}
    }
    .dropdown-menu{
      animation: fadeInLang 0.18s ease-out;
    }
    .gtranslate_wrapper .gt_switcher {
      background: #F6F7F8 !important;
      border: 1px solid rgba(0,0,0,0.08) !important;
      border-radius: 10px !important;
      padding: 6px 8px !important;
      width: 100% !important;
      box-shadow: none !important;
    }
    .gtranslate_wrapper .gt_switcher .gt_selected a {
      color: #101218 !important;
      font-weight: 700 !important;
      font-size: 12px !important;
      gap: 6px !important;
      text-transform: uppercase !important;
    }
    .gtranslate_wrapper .gt_switcher .gt_selected a img { 
      width: 16px !important; 
      height: 12px !important; 
      border-radius: 2px !important;
    }
    .gtranslate_wrapper .gt_option {
      background: white !important;
      border-radius: 12px !important;
      box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
      border: 1px solid rgba(0,0,0,0.06) !important;
      min-width: 100% !important;
      position: relative !important;
      top: 8px !important;
      z-index: 99999 !important;
      padding: 4px !important;
    }
    .gtranslate_wrapper .gt_option a { 
      color: #101218 !important; 
      font-size: 13px !important; 
      font-weight: 600 !important; 
      padding: 8px 10px !important;
      border-radius: 8px !important;
    }
    .gtranslate_wrapper .gt_option a:hover { 
      background: #F6F7F8 !important; 
    }
    @media (max-width: 1024px){
      #kayHamburger{
        width: 40px !important;
        height: 40px !important;
        min-width: 40px !important;
        display: flex !important;
        z-index: 70 !important;
      }
      #langToggleBtn{
        width: 36px !important;
        height: 36px !important;
        min-width: 36px !important;
      }
      #langDropdown{
        right: -10px !important;
        min-width: 160px !important;
      }
    }
    #kayMobileDrawer { will-change: transform; }
  `;
  document.head.appendChild(style);
});
