// Vito, o mascote interativo da Vitre
(function () {
  var uid = 0;
  var EYES = {
    normal: '<rect x="-52" y="-22" width="26" height="40" rx="13" fill="#22d3ee" filter="url(#vg{i})"/><rect x="26" y="-22" width="26" height="40" rx="13" fill="#22d3ee" filter="url(#vg{i})"/><circle cx="-44" cy="-12" r="5" fill="#fff"/><circle cx="34" cy="-12" r="5" fill="#fff"/>',
    happy: '<path d="M-56 4 Q-39 -24 -22 4" stroke="#22d3ee" stroke-width="10" fill="none" stroke-linecap="round" filter="url(#vg{i})"/><path d="M22 4 Q39 -24 56 4" stroke="#22d3ee" stroke-width="10" fill="none" stroke-linecap="round" filter="url(#vg{i})"/>',
    think: '<rect x="-46" y="-30" width="24" height="34" rx="12" fill="#22d3ee" filter="url(#vg{i})"/><rect x="30" y="-30" width="24" height="34" rx="12" fill="#22d3ee" filter="url(#vg{i})"/><circle cx="-38" cy="-24" r="5" fill="#fff"/><circle cx="38" cy="-24" r="5" fill="#fff"/>',
    star: '<path d="M-39 -26 l7 15 16 2 -12 11 3 16 -14 -8 -14 8 3 -16 -12 -11 16 -2z" fill="#facc15" filter="url(#vg{i})"/><path d="M39 -26 l7 15 16 2 -12 11 3 16 -14 -8 -14 8 3 -16 -12 -11 16 -2z" fill="#facc15" filter="url(#vg{i})"/>',
    heart: '<path d="M-39 18 C-62 0 -62 -24 -48 -26 C-42 -27 -39 -22 -39 -18 C-39 -22 -36 -27 -30 -26 C-16 -24 -16 0 -39 18Z" fill="#ff4fa3" filter="url(#vg{i})"/><path d="M39 18 C16 0 16 -24 30 -26 C36 -27 39 -22 39 -18 C39 -22 42 -27 48 -26 C62 -24 62 0 39 18Z" fill="#ff4fa3" filter="url(#vg{i})"/>',
    wink: '<path d="M-56 0 Q-39 -24 -22 0" stroke="#22d3ee" stroke-width="10" fill="none" stroke-linecap="round" filter="url(#vg{i})"/><rect x="26" y="-22" width="26" height="40" rx="13" fill="#22d3ee" filter="url(#vg{i})"/><circle cx="34" cy="-12" r="5" fill="#fff"/>',
    cool: '<path d="M-84 -22 H84" stroke="#1f2937" stroke-width="8"/><rect x="-80" y="-26" width="68" height="44" rx="16" fill="#0f172a" stroke="url(#vs{i})" stroke-width="5"/><rect x="12" y="-26" width="68" height="44" rx="16" fill="#0f172a" stroke="url(#vs{i})" stroke-width="5"/><path d="M-70 -16 l18 0" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".7"/><path d="M22 -16 l18 0" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".7"/>',
    dizzy: '<path d="M-52 -14 l22 22 M-30 -14 l-22 22" stroke="#22d3ee" stroke-width="9" stroke-linecap="round" filter="url(#vg{i})"/><path d="M30 -14 l22 22 M52 -14 l-22 22" stroke="#22d3ee" stroke-width="9" stroke-linecap="round" filter="url(#vg{i})"/>'
  };
  var MOUTH = {
    smile: '<path d="M-24 36 Q0 58 24 36" stroke="#e8f1ff" stroke-width="8" fill="none" stroke-linecap="round"/>',
    open: '<path d="M-26 32 Q0 74 26 32 Z" fill="#e246ef"/><path d="M-14 50 Q0 60 14 50" stroke="#ffb4f5" stroke-width="5" fill="none" stroke-linecap="round"/>',
    hmm: '<path d="M-14 44 L18 38" stroke="#e8f1ff" stroke-width="8" stroke-linecap="round"/>',
    o: '<ellipse cx="0" cy="44" rx="13" ry="16" fill="#e246ef"/>'
  };
  var ARM_UP_L = '<g class="v-arm-l" transform="translate(-170,-70) rotate(-20)"><rect x="-16" y="-40" width="32" height="64" rx="16" fill="url(#va{i})"/><circle cx="0" cy="-48" r="22" fill="url(#va{i})"/></g>';
  var ARM_UP_R = '<g class="v-arm-r" transform="translate(170,-70) rotate(20)"><rect x="-16" y="-40" width="32" height="64" rx="16" fill="url(#va{i})"/><circle cx="0" cy="-48" r="22" fill="url(#va{i})"/></g>';
  var ARMS = {
    down: '<circle cx="-168" cy="40" r="26" fill="url(#va{i})"/><circle cx="168" cy="40" r="26" fill="url(#va{i})"/>',
    wave: '<circle cx="-168" cy="40" r="26" fill="url(#va{i})"/>' + ARM_UP_R,
    up: ARM_UP_L + ARM_UP_R,
    chin: '<circle cx="-168" cy="40" r="26" fill="url(#va{i})"/><circle cx="70" cy="118" r="24" fill="url(#va{i})"/>',
    thumb: '<circle cx="-168" cy="40" r="26" fill="url(#va{i})"/><g transform="translate(172,-10)"><circle r="28" fill="url(#va{i})"/><rect x="-9" y="-62" width="18" height="40" rx="9" fill="url(#va{i})"/></g>'
  };
  var EXTRA = {
    none: '',
    question: '<g transform="translate(170,-230)"><circle r="44" fill="#0b1020" stroke="#22d3ee" stroke-width="5"/><text y="20" text-anchor="middle" font-family="Orbitron, sans-serif" font-weight="900" font-size="56" fill="#22d3ee">?</text><circle cx="-46" cy="54" r="10" fill="#0b1020" stroke="#22d3ee" stroke-width="4"/></g>',
    confetti: '<g class="v-confetti"><rect x="-220" y="-250" width="16" height="8" rx="3" fill="#22d3ee"/><rect x="200" y="-270" width="16" height="8" rx="3" fill="#e246ef"/><rect x="-235" y="-90" width="14" height="7" rx="3" fill="#facc15"/><rect x="215" y="-120" width="14" height="7" rx="3" fill="#8b5cf6"/><circle cx="-150" cy="-280" r="7" fill="#facc15"/><circle cx="140" cy="-300" r="6" fill="#22d3ee"/></g>',
    hearts: '<g class="v-hearts" fill="#ff4fa3"><path d="M-180 -200 c-14 -12 -14 -28 -4 -30 c5 -1 8 3 8 6 c0 -3 3 -7 8 -6 c10 2 10 18 -12 30z"/><path d="M190 -240 c-14 -12 -14 -28 -4 -30 c5 -1 8 3 8 6 c0 -3 3 -7 8 -6 c10 2 10 18 -12 30z"/><path d="M220 -100 c-10 -9 -10 -20 -3 -22 c4 -1 6 2 6 4 c0 -2 2 -5 6 -4 c7 2 7 13 -9 22z"/></g>'
  };
  var POSES = {
    tranquilo: { e: 'normal', m: 'smile', a: 'down', x: 'none' },
    ola: { e: 'happy', m: 'open', a: 'wave', x: 'none' },
    pensando: { e: 'think', m: 'hmm', a: 'chin', x: 'question' },
    comemorando: { e: 'star', m: 'open', a: 'up', x: 'confetti' },
    apaixonado: { e: 'heart', m: 'smile', a: 'down', x: 'hearts' },
    joinha: { e: 'wink', m: 'smile', a: 'thumb', x: 'none' },
    oculos: { e: 'cool', m: 'smile', a: 'down', x: 'none' },
    tonto: { e: 'dizzy', m: 'o', a: 'up', x: 'none' },
    surpreso: { e: 'normal', m: 'o', a: 'up', x: 'none' }
  };

  function svg(i) {
    return '<svg viewBox="-260 -320 520 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<defs>' +
      '<linearGradient id="vs' + i + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset=".6" stop-color="#8b5cf6"/><stop offset="1" stop-color="#e246ef"/></linearGradient>' +
      '<linearGradient id="vgl' + i + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee" stop-opacity=".28"/><stop offset="1" stop-color="#8b5cf6" stop-opacity=".32"/></linearGradient>' +
      '<linearGradient id="va' + i + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient>' +
      '<radialGradient id="vo' + i + '"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="#e246ef"/><stop offset="1" stop-color="#e246ef" stop-opacity="0"/></radialGradient>' +
      '<filter id="vg' + i + '" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
      '<filter id="vb' + i + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22"/></filter>' +
      '<clipPath id="vc' + i + '"><rect x="-140" y="-130" width="280" height="250" rx="62"/></clipPath>' +
      '</defs>' +
      '<ellipse cx="0" cy="240" rx="80" ry="9" fill="#000" opacity=".45"/>' +
      '<g class="v-body">' +
      '<line x1="0" y1="-130" x2="0" y2="-205" stroke="#a78bfa" stroke-width="8" stroke-linecap="round"/>' +
      '<circle class="v-orb" cx="0" cy="-214" r="34" fill="url(#vo' + i + ')"/><circle cx="0" cy="-214" r="13" fill="#fff"/>' +
      '<rect x="-140" y="-130" width="280" height="250" rx="62" fill="#8b5cf6" opacity=".45" filter="url(#vb' + i + ')"/>' +
      '<rect x="-140" y="-130" width="280" height="250" rx="62" fill="#0b1020"/>' +
      '<rect x="-140" y="-130" width="280" height="250" rx="62" fill="url(#vgl' + i + ')"/>' +
      '<g clip-path="url(#vc' + i + ')"><polygon points="-140,-130 -40,-130 -140,-30" fill="#fff" opacity=".12"/></g>' +
      '<rect x="-140" y="-130" width="280" height="250" rx="62" fill="none" stroke="url(#vs' + i + ')" stroke-width="10"/>' +
      '<rect x="-104" y="-92" width="208" height="170" rx="40" fill="#05070d" stroke="rgba(148,197,255,.18)" stroke-width="3"/>' +
      '<g class="v-face" transform="translate(0,-8)"><g class="v-eyes"></g><g class="v-mouth"></g>' +
      '<ellipse cx="-70" cy="34" rx="16" ry="9" fill="#e246ef" opacity=".45"/><ellipse cx="70" cy="34" rx="16" ry="9" fill="#e246ef" opacity=".45"/></g>' +
      '<g transform="translate(0,100)"><circle r="17" fill="url(#vs' + i + ')"/><polygon points="-8,-8 -3,-8 0,2 3,-8 8,-8 2,9 -2,9" fill="#fff"/></g>' +
      '<g class="v-arms"></g>' +
      '</g><g class="v-extra"></g></svg>';
  }

  function Vito(el, pose) {
    this.el = el;
    this.i = ++uid;
    el.innerHTML = svg(this.i) + (el.innerHTML || '');
    this.svg = el.querySelector('svg');
    this.face = el.querySelector('.v-face');
    this.pose = null;
    this.setPose(pose || 'tranquilo');
    var self = this;
    // pisca de vez em quando
    (function blink() {
      setTimeout(function () {
        if (self.pose === 'tranquilo' || self.pose === 'surpreso') {
          self.el.classList.add('v-blink');
          setTimeout(function () { self.el.classList.remove('v-blink'); }, 160);
        }
        blink();
      }, 2500 + Math.random() * 3500);
    })();
  }
  Vito.prototype.setPose = function (name) {
    var p = POSES[name] || POSES.tranquilo, i = this.i;
    function r(s) { return s.replace(/\{i\}/g, i); }
    this.el.querySelector('.v-eyes').innerHTML = r(EYES[p.e]);
    this.el.querySelector('.v-mouth').innerHTML = r(MOUTH[p.m]);
    this.el.querySelector('.v-arms').innerHTML = r(ARMS[p.a]);
    this.el.querySelector('.v-extra').innerHTML = r(EXTRA[p.x]);
    this.el.setAttribute('data-pose', name);
    this.pose = name;
  };
  Vito.prototype.look = function (cx, cy) {
    var b = this.svg.getBoundingClientRect();
    var dx = cx - (b.left + b.width / 2), dy = cy - (b.top + b.height * 0.42);
    var d = Math.sqrt(dx * dx + dy * dy) || 1, k = Math.min(1, d / 400);
    this.face.style.transform = 'translate(' + (dx / d * 14 * k).toFixed(1) + 'px,' + (-8 + dy / d * 10 * k).toFixed(1) + 'px)';
  };
  Vito.prototype.bounce = function () {
    var el = this.el;
    el.classList.remove('v-jump'); void el.offsetWidth; el.classList.add('v-jump');
  };
  window.VitoMascote = Vito;

  // ===== Montagem no site =====
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var heroEl = document.getElementById('vitoHero');
  var sayEl = document.getElementById('vitoSay');
  var hero = heroEl ? new Vito(heroEl, 'ola') : null;
  var sayTimer;
  function say(el, html, ms) {
    if (!el) return;
    el.innerHTML = html;
    el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
    clearTimeout(el._t);
    if (ms) el._t = setTimeout(function () { el.classList.remove('show'); }, ms);
  }
  if (hero) {
    say(sayEl, 'Oi! Eu sou o <b>Vito</b> 👋<br>Bora colocar o seu negócio na vitrine?');
    sayTimer = setTimeout(function () { hero.setPose('tranquilo'); }, 3500);
    var falas = [
      ['joinha', 'Clica em <b>"Quero meu site"</b> que a gente conversa! 😉'],
      ['oculos', 'Eu trabalho <b>24h por dia</b>. Igual a um bom site 😎'],
      ['apaixonado', 'Já viu o nosso <b>portfólio</b>? Eu amo! 😍'],
      ['comemorando', 'Sites a partir de <b>R$ 300</b>! 🎉'],
      ['pensando', 'Seu cliente te acha no Google? 🤔'],
      ['surpreso', 'Opa! Você me pegou 😳'],
      ['ola', 'Oi de novo! 👋']
    ];
    var n = 0, clicks = 0, clickReset;
    function tap() {
      clicks++; clearTimeout(clickReset);
      clickReset = setTimeout(function () { clicks = 0; }, 1500);
      hero.bounce();
      if (clicks >= 5) {
        hero.setPose('tonto');
        say(sayEl, 'Calma! Tô ficando <b>tontinho</b>! 😵‍💫', 3500);
        clicks = 0;
      } else {
        var f = falas[n++ % falas.length];
        hero.setPose(f[0]);
        say(sayEl, f[1], 4500);
      }
      clearTimeout(sayTimer);
      sayTimer = setTimeout(function () { hero.setPose('tranquilo'); }, 4500);
    }
    heroEl.addEventListener('click', tap);
    heroEl.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tap(); } });
  }

  // ===== Vito acompanhante (canto da tela) =====
  var mini = document.getElementById('vitoMini');
  var miniV = mini ? new Vito(mini.querySelector('.vm-bot'), 'tranquilo') : null;
  var miniSay = mini ? mini.querySelector('.vm-say') : null;
  var menu = mini ? mini.querySelector('.vm-menu') : null;
  if (mini) {
    var heroSec = document.querySelector('.hero');
    if ('IntersectionObserver' in window && heroSec) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          mini.classList.toggle('on', !e.isIntersecting);
          document.body.classList.toggle('vito-on', !e.isIntersecting);
          if (e.isIntersecting) { menu.classList.remove('open'); miniSay.classList.remove('show'); }
        });
      }, { threshold: 0.05 }).observe(heroSec);
    } else { mini.classList.add('on'); }

    var reacts = [
      ['#pense', 'pensando', 'Pensa comigo nessas 3 perguntas 🤔'],
      ['#beneficios', 'joinha', 'Site bom trabalha <b>por você</b>! 💪'],
      ['#portfolio', 'apaixonado', 'Olha que lindos! <b>Toca para abrir</b> 😍'],
      ['#planos', 'oculos', 'A partir de <b>R$ 300</b>. Cabe no bolso 😎'],
      ['#como-funciona', 'tranquilo', 'Você vê a <b>prévia</b> antes de pagar 😉'],
      ['#duvidas', 'pensando', 'Ficou com dúvida? <b>Me toca</b> 👇'],
      ['.cta-sec', 'comemorando', 'Bora colocar seu negócio na vitrine? 🚀']
    ];
    if ('IntersectionObserver' in window) {
      var seen = {};
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          var r = e.target._vr;
          setTimeout(function () {
            if (!r || seen[r[0]] || !mini.classList.contains('on') || menu.classList.contains('open')) return;
            seen[r[0]] = 1;
            miniV.setPose(r[1]); miniV.bounce();
            say(miniSay, r[2], 4200);
            clearTimeout(miniV._t);
            miniV._t = setTimeout(function () { miniV.setPose('tranquilo'); }, 4200);
          }, 250);
        });
      }, { threshold: 0.35 });
      reacts.forEach(function (r) { var el = document.querySelector(r[0]); if (el) { el._vr = r; io.observe(el); } });
    }

    mini.querySelector('.vm-bot').addEventListener('click', function () {
      var open = !menu.classList.contains('open');
      menu.classList.toggle('open', open);
      miniSay.classList.remove('show');
      miniV.setPose(open ? 'ola' : 'tranquilo'); miniV.bounce();
    });
    mini.querySelector('.vm-close').addEventListener('click', function () {
      menu.classList.remove('open'); miniV.setPose('tranquilo');
    });
    menu.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); miniV.setPose('joinha'); setTimeout(function () { miniV.setPose('tranquilo'); }, 2500); });
    });
    var fun = menu.querySelector('.vm-fun');
    if (fun) fun.addEventListener('click', function () {
      menu.classList.remove('open');
      miniV.setPose('comemorando'); miniV.bounce();
      say(miniSay, 'Uhuul! Obrigado pela visita! 💜', 3500);
      setTimeout(function () { miniV.setPose('tranquilo'); }, 3500);
    });
  }

  // ===== Olhos seguem o mouse / o dedo =====
  if (!reduce) {
    var raf = 0, px = 0, py = 0;
    function onMove(x, y) {
      px = x; py = y;
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        if (hero) hero.look(px, py);
        if (miniV && mini.classList.contains('on')) miniV.look(px, py);
      });
    }
    window.addEventListener('mousemove', function (e) { onMove(e.clientX, e.clientY); }, { passive: true });
    window.addEventListener('touchstart', function (e) { var t = e.touches[0]; if (t) onMove(t.clientX, t.clientY); }, { passive: true });
  }
})();
