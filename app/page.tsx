"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";

const images = {
  logo: "/img/logo.png",
  hero: "/img/hero.jpg",
  tradition: "/img/tradition.jpg",
  people: "/img/people.jpg",
  preparation: "/img/preparation.jpg",
  ceremony: "/img/ceremony.jpg",
  story: "/img/story.jpg",
  product: "/img/lemon.png",
  effervescent: "/img/ginger.png",
  fpa: "/img/fpa.png",
  enervite: "/img/enervite.jpg",
  member: "/img/fpagroup.jpg",
};

const navItems = [
  ["About kava", "#about"],
  ["Our products", "#products"],
  ["Our story", "#story"],
  ["Partners", "#partners"],
  ["Media", "#media"],
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Kava King home">
          <img src={images.logo} alt="Kava King" />
        </a>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="top" className="hero">
        <img
          className="hero-image"
          src={images.hero}
          alt="A traditional kava ceremony in Vanuatu"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">The original taste of Vanuatu</p>
          <h1>
            KAVA KING
            {/* <br />
            <em>Friends of the Village Chief in Vanuatu.</em> */}
          </h1>
          <p className="hero-copy">
          Kava Kava has played an important bonding role in the South Pacific island villages for thousands of years. Kava is valued for helping create good feelings between people
          </p>
          <a className="button button-light" href="#about">
            Discover kava <ArrowDown size={17} />
          </a>
        </div>
        <div className="hero-note">
          <span>01</span>
          <span className="note-line" />
          <span>Vanuatu, South Pacific</span>
        </div>
      </section>

      <section id="about" className="intro section-pad">
        <div className="section-kicker">
          <span>01</span>
          <span className="gold-rule" />
        </div>
        <div className="intro-grid">
          <div>
            <p className="eyebrow">A shared ritual</p>
            <h2>
              What is <em>kava?</em>
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              Kava is an ancient and traditional drink from the South Pacific.
              Extracted from the roots and rhizomes of the kava plant, it has
              been part of island life for more than 3,000 years.
            </p>
            <p>
              The active ingredients, known as kavalactones, calm the mind and
              ease the body. More than a drink, kava is a way of bringing people
              together.
            </p>
            <a className="text-link" href="#tradition">
              Explore its origins <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="image-pair">
          <img
            src={images.people}
            alt="Vanuatu villagers holding Kava King products"
          />
          <img
            src={images.preparation}
            alt="Traditional kava being prepared in a bowl"
          />
        </div>
      </section>

      <section id="tradition" className="tradition section-pad">
        <div className="tradition-image">
          <img
            src={images.tradition}
            alt="Kava being prepared in a traditional wooden bowl"
          />
        </div>
        <div className="tradition-copy">
          <p className="eyebrow">The traditional way</p>
          <h2>
            A drink that
            <br />
            <em>brings us together.</em>
          </h2>
          <p>
            Kava drinking is often casual, but it also plays an important role
            in village ceremonies: welcoming, naming, initiation, healing,
            marriages and funerals.
          </p>
          <p>
            For generations, roots are prepared and shared from one large
            communal bowl. You clap once before you drink and three times after
            — a ritual of respect, friendship and belonging.
          </p>
          <div className="quote">
            “Once everyone has shared the communal drink, everyone are friends.”
          </div>
        </div>
      </section>

      <section className="full-bleed-band">
        <img
          src={images.ceremony}
          alt="Traditional kava preparation ceremony in Vanuatu"
        />
        <div>
          <p className="eyebrow light">From the island to you</p>
          <h2>
            Pure. Authentic.
            <br />
            <em>Unmistakably kava.</em>
          </h2>
        </div>
      </section>

      <section id="products" className="products section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Made with care</p>
            <h2>
              Our <em>products</em>
            </h2>
          </div>
          <p>
            We source only noble varieties of kava from Vanuatu, using water
            extraction and rigorous quality control.
          </p>
        </div>
        <div className="product-grid">
          <article className="product-card featured">
            <div className="product-image product-purple">
              <img
                src={images.effervescent}
                alt="Kava King effervescent kava tablets"
              />
            </div>
            <div className="product-meta">
              <span>Daily ritual 20*4.5g/SACHET</span>
              <h3>Kalmer Kava</h3>
              <p>Ginger Tea Beverage</p>
              <a className="text-link" href="https://enervite.com.au/products/kalmer-kava-ginger-flavour-20-sachets">
                Learn more <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
          <article className="product-card">
            <div className="product-image">
              <img src={images.product} alt="Kalmer Kava product packaging" />
            </div>
            <div className="product-meta">
              <span>Daily ritual 20*4.5g/SACHET</span>
              <h3>Kalmer Kava</h3>
              <p>Lemon Tea Beverage</p>
              <a className="text-link" href="https://enervite.com.au/products/kalmer-kava-lemon-flavour-20-sachets">
                Learn more <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="story" className="story">
        <img src={images.story} alt="Vanuatu village chief preparing kava" />
        <div className="story-overlay" />
        <div className="story-content">
          <p className="eyebrow light">Our story · Est. 1995</p>
          <h2>
            Friends of the
            <br />
            <em>village chief.</em>
          </h2>
          <p>
            Our story began on the island of Espiritu Santo, where a shared bowl
            and an invitation from the village chief became the beginning of a
            lifelong friendship.
          </p>
          <a className="button button-light" href="#contact">
            Read our story <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section id="partners" className="partners section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">In good company</p>
            <h2>
              Our <em>partners</em>
            </h2>
          </div>
          <p>
            Working with leading Australian brands to bring natural, effective
            products to more people.
          </p>
        </div>
        <div className="partner-grid">
          <div className="partner-card">
            <a href="https://www.ferngrovepharma.com.au" target="_blank" rel="noreferrer"><img src={images.fpa} alt="Ferngrove Pharmaceuticals Australia" />
            <h3>Ferngrove Pharmaceuticals</h3></a>
            <p>
              Our TGA-licensed Australian manufacturing partner for
              complementary medicine and health food products.
            </p>
          </div>
          <div className="partner-card">
          <a href="https://www.enervite.com.au" target="_blank" rel="noreferrer"><img src={images.enervite} alt="Enervite" />
            <h3>Enervite</h3></a>
            <p>
              Committed to creating effective nutritional formulas that help
              people live with energy and vitality.
            </p>
          </div>
        </div>
      </section>

      <section id="media" className="media-section section-pad">
        <div className="media-grid">
          <div className="media-heading">
            <p className="eyebrow">Watch and learn</p>
            <h2>
              <em>Media</em>
            </h2>
            <p>Discover the story, culture and tradition behind Kava King.</p>
          </div>
          <div className="media-player">
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/ZTojMvGr41I"
                title="Kava King video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <a
              className="text-link"
              href="https://youtu.be/VpkM5nVr37E"
              target="_blank"
              rel="noreferrer"
            >
              Watch on YouTube <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="footer-top">
          <img src={images.logo} alt="Kava King" className="footer-logo" />
          <p className="footer-lead">
            The original and authentic kava from Vanuatu.
          </p>
          {/* <a className="button button-gold" href="mailto:hello@kavaking.com.au">
            Get in touch <ArrowUpRight size={17} />
          </a> */}
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#f3b23f" }}>Get in touch:</h3>
            <p>Email: info@hsa-group.com.au </p>
            <p>Phone: +61 0296 443 358 </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Kava King</span>
          <span>Made with respect for tradition</span>
          <a href="https://fpa.group/en/" target="_blank" rel="noreferrer">
          <img
            src={images.member}
            alt="Member of FPA Group, established 1990"
          /></a>
        </div>
      </footer>
    </main>
  );
}
