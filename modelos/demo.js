// Script comum dos modelos de demonstração da Vitre
(function () {
  // WhatsApp da Vitre: quem clica nos modelos fala com a Vitre
  var WHATSAPP = "5561998432799";
  var nicho = document.body.dataset.nicho || "este";
  var msg = "Olá! Vi o modelo de " + nicho + " no portfólio da Vitre e quero um site assim.";
  document.querySelectorAll(".wa").forEach(function (a) {
    a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Botão flutuante de WhatsApp
  var f = document.createElement("a");
  f.className = "wa wa-float";
  f.setAttribute("aria-label", "Falar no WhatsApp");
  f.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
  f.target = "_blank";
  f.rel = "noopener";
  f.innerHTML = '<svg viewBox="0 0 32 32"><path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.5 6.2 1.5 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2 0-3.9-.5-5.5-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4C5.9 20 5.4 18 5.4 16 5.4 10.2 10.2 5.4 16 5.4S26.6 10.2 26.6 16 21.8 26.6 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.7 5.1.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.7-.4z"/></svg>';
  document.body.appendChild(f);

  // Menu do celular
  var t = document.querySelector(".burger"), n = document.querySelector("header nav");
  if (t && n) {
    t.addEventListener("click", function () { n.classList.toggle("open"); });
    n.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { n.classList.remove("open"); }); });
  }

  // Se uma foto não carregar, mostra um fundo no lugar
  function off(img) { img.alt = ""; img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; img.classList.add("img-off"); }
  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () { off(img); });
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src") && img.src.indexOf("data:") !== 0) off(img);
  });

  // Animação ao rolar
  var els = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("on"); }); }

  var y = document.getElementById("ano"); if (y) y.textContent = new Date().getFullYear();
})();
