function readLang() {
  // AI_PENDING_REVIEW
  const value = new URLSearchParams(window.location.search).get("lang");
  if (value === "en") {
    return "en";
  }
  return "vi";
}

function applyLabels(safeLang) {
  // AI_PENDING_REVIEW
  const nodes = document.querySelectorAll("[data-label-vi]");
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];
    const label = node.getAttribute("data-label-" + safeLang);
    if (!label) {
      continue;
    }
    if (node.getAttribute("data-label-mode") === "aria") {
      node.setAttribute("aria-label", label);
    } else {
      node.textContent = label;
    }
  }
}

function applyLanguage(lang) {
  // AI_PENDING_REVIEW
  const safeLang = lang === "en" ? "en" : "vi";
  const blocks = document.querySelectorAll("[data-lang-block]");
  for (let i = 0; i < blocks.length; i += 1) {
    blocks[i].hidden = blocks[i].getAttribute("data-lang-block") !== safeLang;
  }
  document.documentElement.lang = safeLang;
  const title = document.body.getAttribute("data-title-" + safeLang);
  if (title) {
    document.title = title;
  }
  const description = document.body.getAttribute("data-desc-" + safeLang);
  const meta = document.querySelector('meta[name="description"]');
  if (description && meta) {
    meta.setAttribute("content", description);
  }
  const links = document.querySelectorAll("a[data-keep-lang]");
  for (let i = 0; i < links.length; i += 1) {
    const base = links[i].getAttribute("data-href");
    if (base) {
      links[i].setAttribute("href", base + "?lang=" + safeLang);
    }
  }
  const buttons = document.querySelectorAll("[data-set-lang]");
  for (let i = 0; i < buttons.length; i += 1) {
    const active = buttons[i].getAttribute("data-set-lang") === safeLang;
    buttons[i].setAttribute("aria-pressed", active ? "true" : "false");
  }
  applyLabels(safeLang);
}

function applyContact() {
  // AI_PENDING_REVIEW
  const config = window.SITE_CONFIG || {};
  const email = String(config.contactEmail || "").trim();
  const ready = email.length > 0 && email.indexOf("example.com") === -1;
  const emails = document.querySelectorAll("[data-contact-email]");
  for (let i = 0; i < emails.length; i += 1) {
    if (!ready) {
      continue;
    }
    emails[i].textContent = email;
    if (emails[i].tagName === "A") {
      emails[i].setAttribute("href", "mailto:" + email);
    }
  }
  const names = document.querySelectorAll("[data-developer-name]");
  for (let i = 0; i < names.length; i += 1) {
    if (config.developerName) {
      names[i].textContent = config.developerName;
    }
  }
  const warnings = document.querySelectorAll("[data-email-warning]");
  for (let i = 0; i < warnings.length; i += 1) {
    warnings[i].hidden = ready;
  }
}

function setLang(lang) {
  // AI_PENDING_REVIEW
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang === "en" ? "en" : "vi");
  window.history.replaceState({}, "", url);
  applyLanguage(lang);
}

function onLangClick(event) {
  // AI_PENDING_REVIEW
  setLang(event.currentTarget.getAttribute("data-set-lang"));
}

function initPolicySite() {
  // AI_PENDING_REVIEW
  applyLanguage(readLang());
  applyContact();
  const buttons = document.querySelectorAll("[data-set-lang]");
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", onLangClick);
  }
}

initPolicySite();
