/* ============================================================
   Ítalo iPhone — comportamentos da página
   Para trocar o número do WhatsApp, edite a linha abaixo.
   ============================================================ */

var WHATSAPP_NUMBER = "5579999999999";
var WHATSAPP_MESSAGE = "Oi! Quero escolher meu próximo iPhone.";

/* Avaliações de clientes (edite livremente) */
var testimonials = [
  {
    quote:
      "Atendimento muito acima da média. Tiraram todas as dúvidas, me ajudaram a escolher e entregaram tudo certinho.",
    name: "Mariana Santos",
    detail: "Cliente verificada · Aracaju",
  },
  {
    quote:
      "Já é o terceiro iPhone da família com eles. Negociação transparente, aparelho impecável e suporte de verdade.",
    name: "Rafael Oliveira",
    detail: "Cliente verificado · Maceió",
  },
  {
    quote:
      "Comprei pelo WhatsApp e me senti segura do início ao fim. Atendimento rápido, humano e sem enrolação.",
    name: "Camila Andrade",
    detail: "Cliente verificada · Salvador",
  },
];

/* ---------- Links do WhatsApp ---------- */
function applyWhatsappLinks() {
  var url =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);
  var links = document.querySelectorAll("[data-whatsapp]");
  for (var i = 0; i < links.length; i++) {
    links[i].setAttribute("href", url);
  }
}

/* ---------- Menu do celular ---------- */
function setupMobileMenu() {
  var button = document.getElementById("menuButton");
  var nav = document.getElementById("mobileNav");
  if (!button || !nav) return;

  function toggle(open) {
    nav.hidden = !open;
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    button.classList.toggle("is-open", open);
  }

  button.addEventListener("click", function () {
    toggle(nav.hidden);
  });

  var links = nav.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      toggle(false);
    });
  }
}

/* ---------- Filtros dos aparelhos ---------- */
function setupFilters() {
  var tabs = document.querySelectorAll(".filter-tab");
  var cards = document.querySelectorAll("#productGrid .product-card");

  function activate(tab) {
    var value = tab.getAttribute("data-filter");

    for (var i = 0; i < tabs.length; i++) {
      var isActive = tabs[i] === tab;
      tabs[i].classList.toggle("is-active", isActive);
      tabs[i].setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    for (var j = 0; j < cards.length; j++) {
      var match = value === "Todos" || cards[j].getAttribute("data-category") === value;
      cards[j].style.display = match ? "" : "none";
    }
  }

  for (var k = 0; k < tabs.length; k++) {
    tabs[k].addEventListener("click", function (event) {
      activate(event.currentTarget);
    });
  }
}

/* ---------- Carrossel de avaliações ---------- */
function setupTestimonials() {
  var quote = document.getElementById("testimonialQuote");
  var name = document.getElementById("testimonialName");
  var detail = document.getElementById("testimonialDetail");
  var prev = document.getElementById("prevTestimonial");
  var next = document.getElementById("nextTestimonial");
  if (!quote || !name || !detail) return;

  var current = 0;
  var timer = null;

  function render() {
    var item = testimonials[current];
    quote.textContent = "“" + item.quote + "”";
    name.textContent = item.name;
    detail.textContent = item.detail;
  }

  function go(step) {
    current = (current + step + testimonials.length) % testimonials.length;
    render();
  }

  function restartTimer() {
    if (timer) window.clearInterval(timer);
    timer = window.setInterval(function () {
      go(1);
    }, 7000);
  }

  if (prev)
    prev.addEventListener("click", function () {
      go(-1);
      restartTimer();
    });
  if (next)
    next.addEventListener("click", function () {
      go(1);
      restartTimer();
    });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") go(-1);
    if (event.key === "ArrowRight") go(1);
  });

  render();
  restartTimer();
}

/* ---------- Início ---------- */
document.addEventListener("DOMContentLoaded", function () {
  applyWhatsappLinks();
  setupMobileMenu();
  setupFilters();
  setupTestimonials();
});
