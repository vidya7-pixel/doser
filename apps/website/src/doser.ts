import "./style.css";
import addMedicationScreen from "./assets/Add Medications-portrait.png";
import insightsScreen from "./assets/Health Insights-portrait.png";
import homeScreen from "./assets/Home-portrait.png";
import brandIcon from "./assets/icon.png";
import medicationScreen from "./assets/Medications-portrait.png";
import profilesScreen from "./assets/Profiles-portrait.png";
import securityScreen from "./assets/Security-portrait.png";
import themesScreen from "./assets/Themes-portrait.png";

const icons = {
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  back: '<path d="M19 12H5m6-6-6 6 6 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 11h18m-14 5 2 2 4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  chart: '<path d="M4 3v17h17M8 15l4-4 4 2 5-7"/>',
};

function icon(name: keyof typeof icons) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
}

const features = [
  {
    icon: "calendar" as const,
    title: "Every dose, accounted for.",
    description: "Keep taken, skipped, and upcoming doses in one clear daily view.",
  },
  {
    icon: "bell" as const,
    title: "Stay ahead of your routine.",
    description: "Manage medication reminders and know when it’s time to refill.",
  },
  {
    icon: "chart" as const,
    title: "See the bigger picture.",
    description: "Understand your adherence with weekly, monthly, and yearly insights.",
  },
];

const appScreens = [
  {
    label: "Daily overview",
    image: homeScreen,
    alt: "Doser daily dashboard and medication schedule.",
  },
  { label: "Medication log", image: medicationScreen, alt: "Saved medicines and refill details." },
  { label: "Health insights", image: insightsScreen, alt: "Adherence trends and dose analytics." },
  { label: "Add medication", image: addMedicationScreen, alt: "Medication and dosage setup." },
  { label: "Care profiles", image: profilesScreen, alt: "Individual medication care profiles." },
  { label: "Privacy controls", image: securityScreen, alt: "Doser privacy and security settings." },
  { label: "Your theme", image: themesScreen, alt: "Doser appearance and theme options." },
];

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="#top" aria-label="Doser home">
      <span class="brand-mark"><img src="${brandIcon}" alt="" width="40" height="40" /></span>
      <span>Doser<span class="brand-byline">by AdvanceFlux</span></span>
    </a>
    <nav class="site-nav" aria-label="Primary navigation">
      <a href="#features">Features</a>
      <a href="#product-tour">App tour</a>
      <a href="#security">Privacy</a>
    </nav>
    <a class="header-contact" href="#connect">Get in touch ${icon("arrow")}</a>
  </div>
</header>

<main id="top">
  <section class="hero-section" aria-labelledby="hero-title">
    <div class="hero-copy">
      <span class="eyebrow"><span class="status-dot"></span>Your daily medication companion</span>
      <h1 id="hero-title">Stay on track.<br /><span>Feel more<br class="desktop-break" /> in control.</span></h1>
      <p class="hero-description">Track doses, manage reminders, and understand your progress. A little clarity for your everyday care.</p>
      <a class="button button-primary" href="#product-tour">Explore the app ${icon("arrow")}</a>
      <div class="hero-details" aria-label="Doser features">
        <span>${icon("check")} Dose tracking</span>
        <span>${icon("check")} Refill reminders</span>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-backdrop" aria-hidden="true"></div>
      <img class="hero-phone hero-phone-back" src="${medicationScreen}" alt="" aria-hidden="true" width="1118" height="2361" />
      <img class="hero-phone hero-phone-front" src="${homeScreen}" alt="Doser dashboard with daily dose progress and upcoming medications." width="1118" height="2361" fetchpriority="high" />
    </div>
  </section>

  <section id="features" class="feature-section" aria-label="Doser features">
    ${features
      .map(
        (feature) => `
      <article class="feature">
        <span class="feature-icon">${icon(feature.icon)}</span>
        <h2>${feature.title}</h2>
        <p>${feature.description}</p>
      </article>
    `,
      )
      .join("")}
  </section>

  <section id="product-tour" class="section product-tour" aria-labelledby="tour-title">
    <div class="section-heading">
      <div>
        <span class="eyebrow">Inside Doser</span>
        <h2 id="tour-title">Every detail. In its place.</h2>
      </div>
      <div class="gallery-controls" aria-label="App tour navigation">
        <button class="gallery-button" type="button" data-gallery-direction="-1" aria-label="Previous app screens" aria-controls="screen-gallery" disabled>${icon("back")}</button>
        <button class="gallery-button" type="button" data-gallery-direction="1" aria-label="Next app screens" aria-controls="screen-gallery">${icon("arrow")}</button>
      </div>
    </div>
    <div id="screen-gallery" class="screen-gallery" tabindex="0" role="region" aria-label="Doser application screenshots">
      ${appScreens
        .map(
          (screen, index) => `
        <figure class="screen-card">
          <div class="screen-stage"><img src="${screen.image}" alt="${screen.alt}" width="1118" height="2361" loading="lazy" /></div>
          <figcaption><span class="screen-number">0${index + 1}</span>${screen.label}</figcaption>
        </figure>
      `,
        )
        .join("")}
    </div>
  </section>

  <section id="insights" class="insights-section" aria-labelledby="insights-title">
    <div class="insights-copy">
      <span class="eyebrow">Health insights</span>
      <h2 id="insights-title">Your routine,<br />in perspective.</h2>
      <p>Turn daily dose activity into a clearer picture of your medication habits.</p>
      <ul class="check-list">
        <li>${icon("check")} Weekly, monthly, and yearly trends</li>
        <li>${icon("check")} Taken, missed, and skipped dose summaries</li>
      </ul>
    </div>
    <div class="insights-visual">
      <img src="${insightsScreen}" alt="Doser health insights with adherence trends and dose ratios." width="1118" height="2361" loading="lazy" />
    </div>
  </section>

  <section id="security" class="section care-section" aria-label="Care profiles and privacy">
    <article class="care-card">
      <div class="care-copy">
        <span class="eyebrow">Care profiles</span>
        <h2>Personal care.<br />Clearly organized.</h2>
        <p>Separate medication plans and settings for each profile.</p>
      </div>
      <img src="${profilesScreen}" alt="Doser care profile management." width="1118" height="2361" loading="lazy" />
    </article>
    <article class="care-card care-card-tinted">
      <div class="care-copy">
        <span class="eyebrow">Privacy controls</span>
        <h2>Your details.<br />Your control.</h2>
        <p>Manage protection and privacy settings in one place.</p>
      </div>
      <img src="${securityScreen}" alt="Doser security and privacy controls." width="1118" height="2361" loading="lazy" />
    </article>
  </section>

  <section id="connect" class="connect-section" aria-labelledby="connect-title">
    <div>
      <span class="eyebrow">Let’s connect</span>
      <h2 id="connect-title">Have something in mind?</h2>
    </div>
    <a class="contact-link" href="mailto:vidyarajeshmishra@gmail.com">
      <span>vidyarajeshmishra@gmail.com</span>${icon("arrow")}
    </a>
  </section>
</main>

<footer class="site-footer">
  <a class="footer-brand" href="#top">Doser</a>
  <a href="/" class="parent-brand">AdvanceFlux ${icon("arrow")}</a>
</footer>
`;

const gallery = document.querySelector<HTMLDivElement>("#screen-gallery")!;
const galleryButtons = document.querySelectorAll<HTMLButtonElement>("[data-gallery-direction]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateGalleryControls() {
  const maxScroll = gallery.scrollWidth - gallery.clientWidth;
  galleryButtons.forEach((button) => {
    button.disabled =
      Number(button.dataset.galleryDirection) < 0
        ? gallery.scrollLeft <= 1
        : gallery.scrollLeft >= maxScroll - 1;
  });
}

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = gallery.querySelector<HTMLElement>(".screen-card")!;
    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
    gallery.scrollBy({
      left: Number(button.dataset.galleryDirection) * (card.offsetWidth + gap),
      behavior: reducedMotion.matches ? "instant" : "smooth",
    });
  });
});

gallery.addEventListener("scroll", updateGalleryControls, { passive: true });
new ResizeObserver(updateGalleryControls).observe(gallery);
updateGalleryControls();
