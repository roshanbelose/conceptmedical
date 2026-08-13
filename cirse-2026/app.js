/* CIRSE 2026 Landing Page — Concept Medical
   Small, dependency-free enhancements: countdown to congress open + scroll reveals. */
(function () {
  "use strict";

  /* ---- Countdown to CIRSE 2026 opening: 5 September 2026, 09:00 CEST (UTC+2) ---- */
  var TARGET = Date.UTC(2026, 8, 5, 7, 0, 0); // 09:00 local (CEST) == 07:00 UTC
  var els = {
    days:  document.querySelector('[data-cd="days"]'),
    hours: document.querySelector('[data-cd="hours"]'),
    mins:  document.querySelector('[data-cd="mins"]'),
    secs:  document.querySelector('[data-cd="secs"]')
  };

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function tick() {
    if (!els.days) return;
    var diff = Math.max(0, TARGET - Date.now());
    var s = Math.floor(diff / 1000);
    var d = Math.floor(s / 86400); s -= d * 86400;
    var h = Math.floor(s / 3600);  s -= h * 3600;
    var m = Math.floor(s / 60);    s -= m * 60;
    els.days.textContent  = d;
    els.hours.textContent = pad(h);
    els.mins.textContent  = pad(m);
    els.secs.textContent  = pad(s);
  }

  if (els.days) {
    tick();
    setInterval(tick, 1000);
  }

  /* ---- Reveal on scroll ---- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    reveals.forEach(function (el, i) {
      // gentle stagger within a group
      el.style.transitionDelay = ((i % 4) * 70) + "ms";
      io.observe(el);
    });
  }

  /* ---- Header solidifies after scroll ---- */
  var header = document.querySelector(".cm-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 12) header.style.boxShadow = "var(--shadow-sm)";
      else header.style.boxShadow = "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
