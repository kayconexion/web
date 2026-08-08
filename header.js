document.addEventListener('DOMContentLoaded',()=>{
  const headerHTML = `
<header class="header-blue" id="mainHeader">
  <div class="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-3 gap-3">
    <a href="index.html" class="flex items-center gap-3 shrink-0">
      <img src="wp-content/uploads/logo.png" alt="Kay Conexion" style="height:46px;filter: brightness(0) invert(1) drop-shadow(0 2px 8px rgba(255,255,255,.2));">
    </a>
    <nav class="hidden lg:flex items-center gap-6 text-white text-[13px] font-semibold shrink-0">
      <a href="cursos.html" class="hover:text-[#FFC53A] transition">Cursos</a>
      <a href="mentores-ia.html" class="hover:text-[#FFC53A] transition">Mentores IA</a>
      <div class="dropdown">
        <button class="hover:text-[#FFC53A] flex items-center gap-1">Libros ▾</button>
        <div class="dropdown-menu">
          <a href="amame-7-veces.html">📚 Ámame 7 veces</a>
          <a href="yana-los-7-codigos-del-cambio.html">📖 Los 7 códigos del cambio</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="hover:text-[#FFC53A] flex items-center gap-1">Nosotros ▾</button>
        <div class="dropdown-menu">
          <a href="nosotros.html">Acerca de</a>
          <a href="#">Novedades</a>
          <a href="testimonios.html">Testimonios</a>
          <a href="#">Galería</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="hover:text-[#FFC53A] flex items-center gap-1">Terapias ▾</button>
        <div class="dropdown-menu">
          <a href="#">🧠 BIO NEURO CIENCIA</a>
          <a href="#">💬 COACHING</a>
          <a href="#">🌀 HIPNOSIS ERICKSONIANA</a>
          <a href="#">🔮 NEO CHAMANISMO</a>
          <a href="#">✨ METAFÍSICA</a>
          <a href="#">🎯 PNL</a>
          <div class="border-t my-1"></div><a href="#">Programas</a><a href="#">Membresía</a>
        </div>
      </div>
    </nav>
    <!-- DERECHA: REDES + IDIOMA + BOTONES EN UNA SOLA FILA -->
    <div class="flex items-center gap-2 shrink-0" style="flex-wrap:nowrap;">
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
      <a href="https://sso.hotmart.com/signup" class="hidden md:flex bg-white text-[#20365b] text-[11px] font-bold rounded-full px-3 py-[5px] hover:bg-[#FFC53A] transition shrink-0 items-center justify-center">Crear cuenta</a>
      <!-- GTRANSLATE PREMIUM -->
      <div class="hidden md:block gtranslate_wrapper shrink-0" style="display:inline-block;"></div>
      <!-- HAMBURGUESA MOBILE - NUEVO -->
      <button id="kayHamburger" class="lg:hidden w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] hover:border-[#FFC53A] transition-all shrink-0 ml-1" aria-label="Menú">
        <svg id="iconHamburger" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
        <svg id="iconClose" class="hidden" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  </div>
</header>

<!-- MOBILE MENU OVERLAY - NUEVO -->
<div id="kayMobileMenu" class="fixed inset-0 z-[9998] lg:hidden hidden">
  <div id="kayMobileBackdrop" class="absolute inset-0 bg-[#101218]/70 backdrop-blur-sm"></div>
  <div id="kayMobileDrawer" class="absolute top-0 right-0 h-full w-[88%] max-w-[360px] bg-[#20365b] shadow-[-20px_0_60px_rgba(0,0,0,0.4)] overflow-y-auto translate-x-full transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)]">
    <div class="p-6">
      <div class="flex items-center justify-between mb-8">
        <img src="wp-content/uploads/logo.png" alt="Kay" style="height:36px;filter: brightness(0) invert(1);">
        <button id="kayMobileClose" class="w-9 h-9 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white hover:bg-white hover:text-[#20365b] transition"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      
      <nav class="space-y-1">
        <a href="cursos.html" class="flex items-center justify-between py-3.5 px-4 rounded-[12px] bg-[#FFC53A]/10 border border-[#FFC53A]/20 text-[#FFC53A] font-bold text-[14px]"><span>📚 Cursos</span><span class="text-[11px] opacity-60">32</span></a>
        <a href="mentores-ia.html" class="flex items-center py-3.5 px-4 rounded-[12px] text-white font-semibold text-[14px] hover:bg-white/5 transition">Mentores IA</a>
        
        <!-- Libros Accordion -->
        <div class="mobile-accordion border-b border-white/5">
          <button class="mobile-acc-btn w-full flex items-center justify-between py-3.5 px-4 rounded-[12px] text-white font-semibold text-[14px] hover:bg-white/5 transition">
            <span>📖 Libros</span>
            <svg class="acc-arrow w-4 h-4 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="mobile-acc-content hidden pl-4 pb-2 space-y-1">
            <a href="amame-7-veces.html" class="block py-2.5 px-4 rounded-[10px] bg-white/5 text-white/90 text-[13px] font-medium hover:bg-white/10">📚 Ámame 7 veces</a>
            <a href="yana-los-7-codigos-del-cambio.html" class="block py-2.5 px-4 rounded-[10px] bg-white/5 text-white/90 text-[13px] font-medium hover:bg-white/10">📖 Los 7 códigos del cambio</a>
          </div>
        </div>

        <!-- Nosotros Accordion -->
        <div class="mobile-accordion border-b border-white/5">
          <button class="mobile-acc-btn w-full flex items-center justify-between py-3.5 px-4 rounded-[12px] text-white font-semibold text-[14px] hover:bg-white/5 transition">
            <span>Nosotros</span>
            <svg class="acc-arrow w-4 h-4 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="mobile-acc-content hidden pl-4 pb-2 space-y-1">
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">Acerca de</a>
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">Novedades</a>
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">Testimonios</a>
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">Galería</a>
          </div>
        </div>

        <!-- Terapias Accordion -->
        <div class="mobile-accordion border-b border-white/5">
          <button class="mobile-acc-btn w-full flex items-center justify-between py-3.5 px-4 rounded-[12px] text-white font-semibold text-[14px] hover:bg-white/5 transition">
            <span>Terapias</span>
            <svg class="acc-arrow w-4 h-4 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="mobile-acc-content hidden pl-4 pb-2 space-y-1">
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">🧠 BIO NEURO CIENCIA</a>
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">💬 COACHING</a>
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">🌀 HIPNOSIS ERICKSONIANA</a>
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">🔮 NEO CHAMANISMO</a>
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">✨ METAFÍSICA</a>
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">🎯 PNL</a>
            <div class="h-[1px] bg-white/10 my-2 mx-4"></div>
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">Programas</a>
            <a href="#" class="block py-2 px-4 text-white/70 text-[13px]">Membresía</a>
          </div>
        </div>
      </nav>

      <div class="mt-8 space-y-3">
        <div class="flex gap-2">
          <a href="https://sso.hotmart.com/login" class="flex-1 text-center py-3 rounded-full border border-white/15 text-white text-[13px] font-semibold hover:bg-white/10 transition">Acceso</a>
          <a href="https://sso.hotmart.com/signup" class="flex-1 text-center py-3 rounded-full bg-[#FFC53A] text-[#20365b] text-[13px] font-bold hover:bg-white transition">Crear cuenta</a>
        </div>
        <div class="flex items-center gap-2 pt-4 border-t border-white/10">
          <a href="https://www.facebook.com/KayConexion" target="_blank" class="w-10 h-10 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] transition"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z"/></svg></a>
          <a href="https://www.youtube.com/@kayconexion" target="_blank" class="w-10 h-10 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] transition"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 12.2c0-1.5-.1-2.9-.3-4.2-.2-1.1-.8-2-1.8-2.6-1-.6-2.1-.9-3.4-1.1-1.7-.2-3.7-.3-6-.3s-4.3.1-6 .3c-1.3.2-2.4.5-3.4 1.1-1 .6-1.6 1.5-1.8 2.6-.2 1.3-.3 2.7-.3 4.2s.1 2.9.3 4.2c.2 1.1.8 2 1.8 2.6 1 .6 2.1.9 3.4 1.1 1.7.2 3.7.3 6 .3s4.3-.1 6-.3c1.3-.2 2.4-.5 3.4-1.1 1-.6 1.6-1.5 1.8-2.6.2-1.3.3-2.7.3-4.2zM10 15.5v-7l6 3.5-6 3.5z"/></svg></a>
          <a href="https://www.instagram.com/kayconexion_" target="_blank" class="w-10 h-10 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white hover:bg-[#FFC53A] hover:text-[#20365b] transition">          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5a3.5 3.5 0 01-1.3-.9 3.5 3.5 0 01-.9-1.3c-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .4a2 2 0 00-.7.4 2 2 0 00-.5.5c-.1.2-.3.7-.4 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1 .2 1.5.4 1.9.1.2.3.4.5.6.2.2.4.4.6.5.4.2.9.3 1.9.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.2 1.9-.4.2-.1.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1-.2-1.5-.4-1.9a2 2 0 00-.5-.6 2 2 0 00-.6-.5c-.4-.2-.9-.3-1.9-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a5.9 5.9 0 110 11.8 5.9 5.9 0 010-11.8zm0 1.8a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2zm6-1.9a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/></svg></a>
          <a href="https://wa.me/41764421370" target="_blank" class="w-10 h-10 rounded-full bg-[#FFC53A] grid place-items-center text-[#20365b] hover:scale-105 transition"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0012.04 2C6.53 2 2.04 6.5 2.04 12.01c0 1.76.46 3.48 1.33 5L2 22l5.16-1.35a9.8 9.8 0 004.88 1.31h.01c5.5 0 10-4.5 10-10.01a9.75 9.75 0 00-2.9-6.94l-.14-.1zM12.05 19.9h-.01a8 8 0 01-4.08-1.11l-.29-.17-3.06.8.82-2.98-.19-.31a8 8 0 01-1.23-4.12c0-4.41 3.6-8.01 8.03-8.01 2.14 0 4.15.84 5.66 2.36a7.97 7.97 0 012.35 5.65c0 4.42-3.6 8.02-8.04 8.02zm4.4-6c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/></svg></a>
          </div>
      </div>
    </div>
  </div>
</div>

  <style>
  *{font-family:'Karla',sans-serif} h1,h2,h3{font-family:'Rubik',sans-serif}
  .header-blue{position:fixed;top:0;left:0;right:0;z-index:9999;background:#20365b;border-bottom:1px solid rgba(255,255,255,.08);transition:all .3s}
  .header-blue.scrolled{box-shadow:0 12px 30px rgba(0,0,0,.25);background:rgba(32,54,91,.98);backdrop-filter:blur(12px)}
  body{padding-top:72px}
  .dropdown{position:relative}
  .dropdown-menu{position:absolute;top:100%;left:0;min-width:230px;background:white;border-radius:14px;box-shadow:0 20px 50px rgba(0,0,0,.18);padding:8px 0;opacity:0;visibility:hidden;transform:translateY(10px);transition:all .25s;z-index:50}
  .dropdown:hover .dropdown-menu{opacity:1;visibility:visible;transform:translateY(0)}
  .dropdown-menu a{display:block;padding:11px 18px;font-size:13px;color:#20365b;font-weight:600}
  .dropdown-menu a:hover{background:#F3F5F5;color:#4175FC}
  .lang-select{appearance:none;background:rgba(255,255,255,.12);color:white;font-size:11px;font-weight:800;border:1px solid rgba(255,255,255,.2);border-radius:9999px;padding:7px 28px 7px 16px;cursor:pointer}
  .lang-select option{background:white;color:#20365b;font-weight:600;padding:8px}
  @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .marquee-track{animation:marquee 45s linear infinite;display:flex;gap:14px;width:max-content}
  .marquee-track:hover{animation-play-state:paused}
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
  .float-anim{animation:float 4s ease-in-out infinite}
  @keyframes pulse-glow{0%,100%{box-shadow:0 0 0 0 rgba(255,197,58,.4)}50%{box-shadow:0 0 0 12px rgba(255,197,58,0)}}
  .pulse-btn{animation:pulse-glow 2.5s infinite}
</style>
`;

  const root = document.getElementById('header-root');
  if(root) root.innerHTML = headerHTML;

  window.addEventListener('scroll',()=>{
    const h=document.getElementById('mainHeader');
    if(h) h.classList.toggle('scrolled', window.scrollY>10);
  });

  // HAMBURGUESA LOGIC - NUEVO
  const hamburger = document.getElementById('kayHamburger');
  const mobileMenu = document.getElementById('kayMobileMenu');
  const mobileDrawer = document.getElementById('kayMobileDrawer');
  const mobileBackdrop = document.getElementById('kayMobileBackdrop');
  const mobileClose = document.getElementById('kayMobileClose');
  const iconHamburger = document.getElementById('iconHamburger');
  const iconClose = document.getElementById('iconClose');

  function openMobile(){
    if(!mobileMenu) return;
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow='hidden';
    requestAnimationFrame(()=>{
      mobileDrawer.classList.remove('translate-x-full');
      mobileDrawer.classList.add('translate-x-0');
    });
    iconHamburger.classList.add('hidden');
    iconClose.classList.remove('hidden');
  }
  function closeMobile(){
    if(!mobileMenu) return;
    mobileDrawer.classList.add('translate-x-full');
    mobileDrawer.classList.remove('translate-x-0');
    setTimeout(()=>{
      mobileMenu.classList.add('hidden');
      document.body.style.overflow='';
    },300);
    iconHamburger.classList.remove('hidden');
    iconClose.classList.add('hidden');
  }

  if(hamburger){
    hamburger.addEventListener('click',()=>{
      if(mobileMenu.classList.contains('hidden')) openMobile();
      else closeMobile();
    });
  }
  if(mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobile);
  if(mobileClose) mobileClose.addEventListener('click', closeMobile);

  // Accordion mobile
  document.querySelectorAll('.mobile-acc-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const content = btn.nextElementSibling;
      const arrow = btn.querySelector('.acc-arrow');
      const isOpen = !content.classList.contains('hidden');
      // close others
      document.querySelectorAll('.mobile-acc-content').forEach(c=>{ if(c!==content) c.classList.add('hidden'); });
      document.querySelectorAll('.acc-arrow').forEach(a=>{ if(a!==arrow) a.style.transform='rotate(0deg)'; });
      if(isOpen){
        content.classList.add('hidden');
        arrow.style.transform='rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        arrow.style.transform='rotate(180deg)';
      }
    });
  });

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
    /* FIX LAYOUT - TODO EN UNA FILA, NO ENCIMA */
    #mainHeader .flex.items-center.gap-2 { flex-wrap: nowrap !important; }
    
    /* PREMIUM LANGUAGE SELECTOR - MEJORADO */
    .gtranslate_wrapper { 
      //width: 72px !important; 
      min-width: 72px !important; 
      //max-width: 72px !important; 
      display: inline-flex !important; 
      align-items: center !important;
      position: relative !important;
      vertical-align: middle !important;
      flex-shrink: 0 !important;
    }
    .gtranslate_wrapper .gt_switcher {
      background: linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 100%) !important;
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border: 1px solid rgba(255,255,255,0.18) !important;
      border-radius: 9999px !important;
      padding: 4px 8px !important;
      width: 72px !important;
      min-width: 72px !important;
      max-width: 72px !important;
      height: 32px !important;
      position: relative !important;
      top: 0 !important;
      left: 0 !important;
      transform: none !important;
      margin: 0 !important;
      display: flex !important;
      align-items: center !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 12px rgba(0,0,0,0.12) !important;
      transition: all 0.25s cubic-bezier(.16,1,.3,1) !important;
      cursor: pointer !important;
    }
    .gtranslate_wrapper .gt_switcher:hover {
      background: linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 100%) !important;
      border-color: rgba(255,255,255,0.28) !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.20), 0 6px 20px rgba(0,0,0,0.18) !important;
      transform: translateY(-1px) !important;
    }
    .gtranslate_wrapper .gt_switcher:active {
      transform: translateY(0px) scale(0.97) !important;
    }
    .gtranslate_wrapper .gt_switcher .gt_selected {
      display: flex !important;
      align-items: center !important;
      width: 100% !important;
      gap: 5px !important;
    }
    .gtranslate_wrapper .gt_switcher .gt_selected:before {
      content: "🌐" !important;
      font-size: 11px !important;
      line-height: 1 !important;
      opacity: 0.9 !important;
    }
    .gtranslate_wrapper .gt_switcher .gt_selected a {
      color: white !important;
      font-weight: 800 !important;
      font-size: 10.5px !important;
      letter-spacing: 0.3px !important;
      display: flex !important;
      align-items: center !important;
      gap: 4px !important;
      width: auto !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      text-transform: uppercase !important;
    }
    .gtranslate_wrapper .gt_switcher .gt_selected a img { 
      width: 16px !important; 
      height: 11px !important; 
      flex-shrink:0 !important; 
      border-radius: 2px !important;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2) !important;
    }
    /* Dropdown premium */
    .gtranslate_wrapper .gt_option {
      background: white !important;
      border-radius: 16px !important;
      box-shadow: 0 20px 50px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.04) !important;
      min-width: 150px !important;
      right: 0 !important;
      left: auto !important;
      top: 40px !important;
      position: absolute !important;
      z-index: 99999 !important;
      padding: 6px !important;
      border: 1px solid rgba(0,0,0,0.06) !important;
      overflow: hidden !important;
    }
    .gtranslate_wrapper .gt_option a { 
      color: #20365b !important; 
      font-size: 13px !important; 
      font-weight: 600 !important; 
      padding: 10px 12px !important;
      border-radius: 10px !important;
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
      transition: all 0.15s !important;
    }
    .gtranslate_wrapper .gt_option a:hover { 
      background: #F6F7F8 !important; 
      color: #101218 !important;
      transform: translateX(2px) !important;
    }
    .gtranslate_wrapper .gt_option a img {
      border-radius: 2px !important;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1) !important;
    }
    /* Mobile menu animation */
    #kayMobileDrawer { will-change: transform; }
  `;
  document.head.appendChild(style);

  function shorten(){
    const sel=document.querySelector('.gt_selected a');
    if(sel){
      const map={'Spanish':'ES','Español':'ES','English':'EN','French':'FR','Français':'FR','German':'DE','Deutsch':'DE','Italian':'IT','Italiano':'IT','Portuguese':'PT','Português':'PT','Russian':'RU','Русский':'RU'};
      let t=sel.textContent.trim();
      for(let k in map){ if(t.includes(k)){ sel.childNodes.forEach(n=>{ if(n.nodeType===3) n.textContent=' '+map[k]; }); } }
    }
  }
  const iv=setInterval(shorten,400);
  setTimeout(()=>clearInterval(iv),8000);

  document.addEventListener('click', function(e){
    const link = e.target.closest('.gt_option a');
    if(!link) return;
    const lang = link.getAttribute('data-gt-lang') || '';
    if(lang === 'es' || link.textContent.trim().toLowerCase().includes('español')){
      e.preventDefault();
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + location.hostname;
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + location.hostname;
      location.href = location.pathname + location.search;
    }
  });
});
