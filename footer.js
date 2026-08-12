// footer.js replicable
document.addEventListener('DOMContentLoaded',()=>{
  const root=document.getElementById('footer-root');
  if(!root) return;
  root.innerHTML=`
  <footer class="bg-[#101218] text-white py-16 px-6">
    <div class="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm opacity-80">
      <div>
        <h5 class="font-bold mb-3 opacity-100">Programas</h5>
        <a href="cursos.html">Todos los cursos</a><br>
        Hazte miembro<br>
        Coach certificado</div>
      <div>
      <h5 class="font-bold mb-3 opacity-100">
      Sobre nosotros</h5>
      <a href="nosotros.html">Quienes somos</a><br>
      Trabaja con nosotros<br>
      Blog</div>
      <div><h5 class="font-bold mb-3 opacity-100">Eventos</h5>Afiliación<br>Eventos<br>Escuela Kay</div>
      <div><h5 class="font-bold mb-3 opacity-100">Redes sociales</h5>
      <a target="blank" href="https://youtube.com/@kayconexion">Youtube</a><br>
      <a target="blank" href="https://facebook.com/KayConexion">Facebook</a> <br>
      <a target="blank" href="https://instagram.com/kayconexion_">Instagram</a> </div>
      <div><h5 class="font-bold mb-3 opacity-100">Contáctenos</h5>kayconexion@gmail.com
      <br>+34 623 62 27 45 </div>
    </div>
    <div class="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-white/10">
      <div class="opacity-50 text-sm">© 2025 Kay Conexion, Org</div>
      <div class="opacity-50 text-[12px]">Términos · Privacidad · Cookies</div>
    </div>
  </footer>
  `;
});