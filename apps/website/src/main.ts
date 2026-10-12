import "./home.css";
import advanceFluxArtwork from "./assets/ADVANCE FLUX.svg";
import doserIcon from "./assets/icon.png";
import doserScreen from "./assets/Home-portrait.png";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="home-page">
    <section class="home-hero" aria-label="AdvanceFlux">
      <img class="home-artwork" src="${advanceFluxArtwork}" alt="AdvanceFlux" />
      <a class="products-jump" href="#products">
        Products <span aria-hidden="true">↓</span>
      </a>
    </section>

    <section id="products" class="products-section" aria-labelledby="products-title">
      <h1 id="products-title">Products</h1>
      <div class="products-grid">
        <a class="product-card" href="/products/doser">
          <div class="product-copy">
            <img class="product-icon" src="${doserIcon}" alt="" width="48" height="48" />
            <h2>Doser</h2>
            <p>Medication tracking, reminders, and health insights.</p>
            <span class="product-action">
              Explore Doser
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </span>
          </div>
          <div class="product-preview" aria-hidden="true">
            <img src="${doserScreen}" alt="" width="1118" height="2361" loading="lazy" />
          </div>
        </a>
      </div>
    </section>
  </main>
`;
