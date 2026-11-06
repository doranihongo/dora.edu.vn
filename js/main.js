/* DORA Education Corporate Website */
(function(){
    function init(){
      var els = document.querySelectorAll('[data-reveal]');
      if(!('IntersectionObserver' in window)){ els.forEach(function(el){ el.style.opacity='1'; el.style.transform='none'; el.classList.add('is-visible'); }); return; }
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            var el = entry.target;
            var delay = el.getAttribute('data-reveal-delay') || '0';
            el.style.transition = 'opacity .8s cubic-bezier(.2,.7,.3,1) ' + delay + 's, transform .8s cubic-bezier(.2,.7,.3,1) ' + delay + 's';
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.classList.add('is-visible');
            io.unobserve(el);
          }
        });
      }, {threshold:0.12});
      els.forEach(function(el){ io.observe(el); });
    }
    if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', init); } else { init(); }
    setTimeout(init, 300);
  })();
  (function(){
    function animateNumber(el){
      var text = el.textContent.trim();
      var match = text.match(/^([\d.,]+)(.*)$/);
      if(!match) return;
      var target = parseFloat(match[1].replace(/,/g,''));
      var suffix = match[2];
      var duration = 1400;
      var start = null;
      function step(ts){
        if(!start) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var val = target * eased;
        var display = (suffix.indexOf('%') !== -1) ? Math.round(val) : Math.round(val);
        el.textContent = display + suffix;
        if(p < 1) requestAnimationFrame(step);
        else el.textContent = match[1] + suffix;
      }
      requestAnimationFrame(step);
    }
    function initStats(){
      var els = document.querySelectorAll('[data-count]');
      if(!('IntersectionObserver' in window)){ return; }
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            animateNumber(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, {threshold:0.4});
      els.forEach(function(el){ io.observe(el); });
    }
    if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', initStats); } else { initStats(); }
    setTimeout(initStats, 300);
  })();

/* buttons that scroll to a section (were inline onclick handlers) */
(function(){
  document.addEventListener('click', function(e){
    var btn = e.target.closest('[data-scroll-to]');
    if(!btn) return;
    var target = document.getElementById(btn.getAttribute('data-scroll-to'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
})();

/* mobile / tablet navigation menu */
(function(){
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.site-header__toggle');
  if(!header || !toggle) return;
  function setOpen(open){
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  }
  toggle.addEventListener('click', function(){ setOpen(!header.classList.contains('is-open')); });
  header.querySelectorAll('.site-nav a, [data-scroll-to]').forEach(function(el){
    el.addEventListener('click', function(){ setOpen(false); });
  });
  document.addEventListener('click', function(e){ if(!header.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') setOpen(false); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', function(){ setOpen(false); });
})();

/* the fixed header sits under the sticky banner: expose the banner height so the
   mobile / tablet header can centre its content in the part that stays visible */
(function(){
  var banner = document.querySelector('.site-banner');
  if(!banner) return;
  function sync(){ document.documentElement.style.setProperty('--banner-h', banner.offsetHeight + 'px'); }
  sync();
  window.addEventListener('resize', sync);
  window.addEventListener('load', sync);
  if(window.ResizeObserver) new ResizeObserver(sync).observe(banner);
})();

/* leadership slogans: 2s after the team grid scrolls into view the first slogan (Nhi) appears,
   then Đạt, Hoa and Nhung follow one after another, a new one every 5s (the previous one fades
   out just before the next fades in). One pass per visit; hover still shows a slogan on its own. */
(function(){
  var START_DELAY = 2000;  // wait after the grid comes into view before the first slogan
  var INTERVAL    = 5000;  // time from one slogan appearing to the next one appearing
  var GAP         = 300;   // the previous slogan is hidden this long before the next appears
  var LOOP        = false; // true: start again from the first person after the last one

  var grid = document.querySelector('.team-grid');
  if(!grid || !('IntersectionObserver' in window)) return;
  var quotes = grid.querySelectorAll('.team-quote');
  if(!quotes.length) return;

  var timers = [];
  function later(fn, ms){ timers.push(setTimeout(fn, ms)); }
  function stop(){
    timers.forEach(clearTimeout); timers = [];
    for(var i = 0; i < quotes.length; i++) quotes[i].classList.remove('is-active');
  }
  function step(i){
    quotes[i].classList.add('is-active');
    later(function(){ quotes[i].classList.remove('is-active'); }, INTERVAL - GAP);
    if(i + 1 < quotes.length) later(function(){ step(i + 1); }, INTERVAL);
    else if(LOOP) later(function(){ step(0); }, INTERVAL);
  }
  function start(){ stop(); later(function(){ step(0); }, START_DELAY); }

  new IntersectionObserver(function(entries){
    entries.forEach(function(entry){ if(entry.isIntersecting) start(); else stop(); });
  }, {threshold: 0.35}).observe(grid);
})();
