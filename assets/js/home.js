/* Interactivity for the editorial homepage — vanilla, no deps */
(function () {
  "use strict";

  // --- sticky nav shadow ---
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // --- scroll reveal ---
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // --- animated number count-up for hero stats ---
  var counted = false;
  function animateStats() {
    if (counted) return;
    counted = true;
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var prefix = el.getAttribute("data-prefix") || "";
      var decimals = (String(target).split(".")[1] || "").length;
      var start = null, dur = 1100;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var val = (target * eased).toFixed(decimals);
        el.textContent = prefix + val + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  var statsEl = document.querySelector(".highlights");
  if (statsEl && "IntersectionObserver" in window) {
    var sObs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { animateStats(); sObs.disconnect(); }
    }, { threshold: 0.25 });
    sObs.observe(statsEl);
  } else {
    animateStats();
  }

  // --- scrollspy: highlight the section currently in view (left rail) ---
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll(".scrollspy a"));
  if (spyLinks.length) {
    var spies = spyLinks
      .map(function (a) {
        var sec = document.getElementById(a.getAttribute("href").slice(1));
        return sec ? { a: a, sec: sec } : null;
      })
      .filter(Boolean);

    var onSpy = function () {
      var pos = window.scrollY + window.innerHeight * 0.32;
      var current = spies.length ? spies[0] : null;
      spies.forEach(function (s) {
        if (s.sec.offsetTop <= pos) current = s;
      });
      // near the very bottom, force-select the last section
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = spies[spies.length - 1];
      }
      spyLinks.forEach(function (a) { a.classList.remove("active"); });
      if (current) current.a.classList.add("active");
    };
    onSpy();
    window.addEventListener("scroll", onSpy, { passive: true });
    window.addEventListener("resize", onSpy, { passive: true });
  }

  // --- publications tabs ---
  var tabs = document.querySelectorAll(".pubtab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.setAttribute("aria-selected", "false"); });
      tab.setAttribute("aria-selected", "true");
      var target = tab.getAttribute("data-target");
      document.querySelectorAll(".publist").forEach(function (list) {
        list.hidden = list.id !== target;
      });
    });
  });

  // --- news expand/collapse ---
  var newsToggle = document.querySelector(".news-toggle");
  if (newsToggle) {
    newsToggle.addEventListener("click", function () {
      var list = document.querySelector(".news");
      var expanded = list.classList.toggle("expanded");
      newsToggle.textContent = expanded ? "Show less" : "Show older news";
    });
  }
})();
