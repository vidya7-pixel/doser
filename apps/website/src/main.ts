import "./style.css";
import addMedicationScreen from "./assets/Add Medications-portrait.png";
import insightsScreen from "./assets/Health Insights-portrait.png";
import homeScreen from "./assets/Home-portrait.png";
import brandIcon from "./assets/icon.png";
import medicationScreen from "./assets/Medications-portrait.png";
import profilesScreen from "./assets/Profiles-portrait.png";
import securityScreen from "./assets/Security-portrait.png";
import themesScreen from "./assets/Themes-portrait.png";

const featureCards = [
  {
    icon: "01",
    title: "Dose tracking that stays current",
    description:
      "Log taken, skipped, pending, and missed medicines with simple daily schedules that keep patients oriented.",
  },
  {
    icon: "02",
    title: "Reliable medication reminders",
    description:
      "Create reusable medication profiles, refill timelines, and reminder windows for every dose in the day.",
  },
  {
    icon: "03",
    title: "Health insights in plain language",
    description:
      "Turn adherence history into weekly, monthly, and yearly trends that make progress easier to understand.",
  },
];

const appScreens = [
  {
    label: "Daily dashboard",
    image: homeScreen,
    alt: "Doser home dashboard showing today's dose progress and upcoming medication schedule.",
  },
  {
    label: "Medication log",
    image: medicationScreen,
    alt: "Doser medication log showing saved medicines, stock projection, and refill reminder details.",
  },
  {
    label: "Health insights",
    image: insightsScreen,
    alt: "Doser health insights showing adherence trends and dose ratio analytics.",
  },
  {
    label: "Add medication",
    image: addMedicationScreen,
    alt: "Doser add medication wizard for configuring medicine, dosage, schedule, and stock.",
  },
  {
    label: "Care profiles",
    image: profilesScreen,
    alt: "Doser profiles screen for managing medication plans across care profiles.",
  },
  {
    label: "Privacy controls",
    image: securityScreen,
    alt: "Doser security screen showing privacy and protection settings.",
  },
  {
    label: "Comfort themes",
    image: themesScreen,
    alt: "Doser themes screen showing appearance options for personalized comfort.",
  },
];

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<header class="site-header" aria-label="Doser website header">
  <a class="brand" href="#top" aria-label="Doser home">
    <span class="brand-mark" aria-hidden="true">
      <img src="${brandIcon}" alt="" />
    </span>
    <span>Doser</span>
  </a>
  <nav class="site-nav" aria-label="Primary navigation">
    <a href="#features">Features</a>
    <a href="#insights">Insights</a>
    <a href="#security">Security</a>
  </nav>
  <a class="header-cta" href="#download">Get notified</a>
</header>

<main id="top">
  <section class="hero-section" aria-labelledby="hero-title">
    <div class="hero-copy">
      <span class="eyebrow">Medication adherence made simple</span>
      <h1 id="hero-title">Stay on track with every dose, reminder, and refill.</h1>
      <p class="hero-description">
        Doser helps people manage medicines with confidence through dosage tracking,
        smart reminders, refill awareness, and clear health insights — all wrapped in a calm,
        professional healthcare experience.
      </p>
      <div class="hero-actions" aria-label="Doser calls to action">
        <a class="button button-primary" href="#download">Join the waitlist</a>
        <a class="button button-secondary" href="#product-tour">View the app</a>
      </div>
      <dl class="hero-stats" aria-label="Doser product highlights">
        <div>
          <dt>3x</dt>
          <dd>Daily dose schedules</dd>
        </div>
        <div>
          <dt>24/7</dt>
          <dd>Medication awareness</dd>
        </div>
        <div>
          <dt>100%</dt>
          <dd>Patient-first design</dd>
        </div>
      </dl>
    </div>

    <div class="hero-visual" aria-label="Doser app preview">
      <div class="orb orb-one" aria-hidden="true"></div>
      <div class="orb orb-two" aria-hidden="true"></div>
      <div class="phone-showcase phone-showcase-back" aria-hidden="true">
        <img src="${insightsScreen}" alt="" />
      </div>
      <div class="phone-showcase phone-showcase-front">
        <img src="${homeScreen}" alt="Doser mobile app dashboard with dose progress and upcoming schedule." />
      </div>
      <article class="floating-card floating-card-top" aria-label="Today's progress">
        <span class="card-dot" aria-hidden="true"></span>
        <div>
          <strong>1/3 doses logged</strong>
          <span>Two reminders remaining today</span>
        </div>
      </article>
      <article class="floating-card floating-card-bottom" aria-label="Medication reminder">
        <span class="reminder-icon" aria-hidden="true">+</span>
        <div>
          <strong>Ibuprofen at 9:00 PM</strong>
          <span>Refill reminder active</span>
        </div>
      </article>
    </div>
  </section>

  <section id="features" class="section section-soft" aria-labelledby="features-title">
    <div class="section-heading">
      <span class="eyebrow">Designed for everyday care</span>
      <h2 id="features-title">A calmer way to manage medication routines.</h2>
      <p>
        From first setup to daily adherence, Doser brings the details patients need into one
        focused, easy-to-read place.
      </p>
    </div>
    <div class="feature-grid">
      ${featureCards
        .map(
          (feature) => `
            <article class="feature-card">
              <span class="feature-index">${feature.icon}</span>
              <h3>${feature.title}</h3>
              <p>${feature.description}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  </section>

  <section id="product-tour" class="section product-tour" aria-labelledby="tour-title">
    <div class="section-heading section-heading-narrow">
      <span class="eyebrow">App experience</span>
      <h2 id="tour-title">Built around the moments that matter most.</h2>
      <p>
        Explore the real Doser screens for schedules, medication setup, adherence analytics,
        profiles, security, and personalized themes.
      </p>
    </div>
    <div class="screen-gallery" aria-label="Doser application screenshots">
      ${appScreens
        .map(
          (screen) => `
            <figure class="screen-card">
              <img src="${screen.image}" alt="${screen.alt}" loading="lazy" />
              <figcaption>${screen.label}</figcaption>
            </figure>
          `,
        )
        .join("")}
    </div>
  </section>

  <section id="insights" class="section insights-section" aria-labelledby="insights-title">
    <div class="insights-copy">
      <span class="eyebrow">Health insights</span>
      <h2 id="insights-title">Understand adherence trends without the spreadsheet.</h2>
      <p>
        Doser converts routine dose activity into simple adherence views, helping patients and
        caregivers spot patterns before they become missed-care moments.
      </p>
      <ul class="check-list">
        <li>Weekly, monthly, and yearly adherence summaries</li>
        <li>Dose ratio breakdowns for taken, missed, skipped, and pending medication</li>
        <li>Clear progress cards that support better conversations with care teams</li>
      </ul>
    </div>
    <div class="insights-preview">
      <img src="${insightsScreen}" alt="Doser health insights screen with adherence trends." loading="lazy" />
    </div>
  </section>

  <section id="security" class="section care-section" aria-labelledby="care-title">
    <div class="care-card">
      <img src="${profilesScreen}" alt="Doser care profiles screen." loading="lazy" />
      <div>
        <span class="eyebrow">Care profiles</span>
        <h2 id="care-title">Organized support for individual medication plans.</h2>
        <p>
          Keep routines separated by profile, personalize settings, and protect sensitive health
          details with security controls designed for trust.
        </p>
      </div>
    </div>
    <div class="care-card care-card-accent">
      <img src="${securityScreen}" alt="Doser security settings screen." loading="lazy" />
      <div>
        <span class="eyebrow">Private by design</span>
        <h3>Professional, secure, and reassuring.</h3>
        <p>
          Doser presents healthcare data in a polished interface with practical privacy controls
          and calm visual themes for daily use.
        </p>
      </div>
    </div>
  </section>

  <section id="download" class="download-section" aria-labelledby="download-title">
    <div>
      <span class="eyebrow">Coming soon</span>
      <h2 id="download-title">Bring more confidence to medication routines with Doser.</h2>
      <p>
        A clean, modern healthcare companion for tracking medicines, reminders, refills, and insights.
      </p>
    </div>
  </section>
</main>

<footer class="site-footer">
  <a class="brand" href="#top" aria-label="Doser home">
    <span class="brand-mark" aria-hidden="true">
      <img src="${brandIcon}" alt="" />
    </span>
    <span>Doser</span>
  </a>
  <p>Medication tracking, reminders, and health insights for everyday care.</p>
</footer>
`;
