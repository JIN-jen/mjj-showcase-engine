import Link from "next/link";
import styles from "./safari-lodge.module.css";

const safariImages = {
  hero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAr_8GdHKqiEcTdTKv9QLwn6FYtU53bdJScwYKz6FVcXDMMjtHnRbwerFg9PPvxWdAvCnEy0lf_thlkzNNMkM-0hZXWJh_uc31zW0DWCvkJXpkUiADO8753XUxOFe0O1SqEHwTXiqHUrXUEWxA9Pb_NQPIP4j5f3gF_aBk_Eo8kE1jJcf8YNfVauSZnN-rh_oyj2PNTRknftZ81k4Y1OWxmZP0-gtJ_p5OmZvjrzRMoq3PfqDOg4QdRkAYBUuEWLnS4Drv9xO04EeE",
  lodge:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC72e1S6hMCy5ffT5D2xpWX619wBQZSAXDYx-gj_aejQKLvTYeWDqbCc4MJBNWi7WPyW3RxQ1UoDBi7Fl62WJLEswNT_hlNMO77XT_GH0mrAP5BCD3O01LULpuTK0DQ7O4wSB8XVKEA0lmxPFeTP2eBtB8Qy6a4J-QoNG7p8p_i-hTKYWx7vT4mg7r1MOXdGhq7t5ERtTBoU9hnuPi3oLLNl14RsPYLFYit4r42qG_dnrhTULpugEt7eY27xPRgPyR9IT5BUa_4XI8",
  camp:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAnnMG92Lkx9O7B03h_NsYT9oAFCQ0vAjxUX1VeoHpDEWGOX4ob7IqfHhr2rHHMXKmJIOiEcBclCVHHyogWA5XxqeiF3nX167jBAz-RQRKFZozWuLmImePAoiRTGUv_KT_FEREdatTUYefNdD79Z7H1bMc0_dh84cJd3aK7KdvHFQWE_UJZhd_YoONR2Wq8emLohwgYZRdYL7-AAKZPbCAGn6aoREAcFaNsMbPFNG1iVInaOvYU7648Dr7oiDgI9h_5LhJwIG3KZDY",
  drive:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDF_DIl6BjRqfCCUWs66JKWTEje7qEtCKErHCj4_PeL3uFNfAj05KF6sppSuZuHGrd9YokeBjY2lfDI_v4KCXCdOL6O7FD_qHohpx9h1hlwM26B1D9-ZSsIAAYeXjXt7WIgYWa03U7jBsY4GT5eDcNUyx-deX0Evt0fJ-G_p-xWxMsqvj9iUrH7ozWMO5Z5s7SSyfv6A9C8zRATxF0H2I9jwGd-xu-dkM1HL9QURjGmE1XXIs2gJ0ws6aAiHdZE1JCkjwhjs4t6OLM",
  dining:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAXbz8qOOcd_aIKK_CZkHqWIbSzkzfenjyX-tkEUKF4pNFKPU6jaBWRZEzpnI9jq2jdsmTWud4-ikq8KU9Mn1aBtx67BONaAGeFqxlxVH_F2qoh36kvJvlQrO-IYKOriC6Anwkl9Mo6sdF0tuOo8DBa-oSe0EMNpHLMxH0tIMx5R5Utj6KvfC1RteAMaBwE8N_apnGLuxP9vMnAoz2J05VY53UEjPPnIDJR8ABIcKrSLgwYfzTc_qd3pR_wkoQsKR00QKNUe57pXc4",
  balloon:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAsgqGMEyXvfBktj8OebTfc4_65JnTO_SzgA1JDFFZQjknMoqZT61NAa3u8x6_eNBDvvR8u4JWG8nRzzqvR0j2BYalqsQcVrlqgAfDF836Reo4sRv_AQV9f9spmv35DpiaG6UegRgc49Zb-xRZFkPnWeD77FI8xwq_YRc4YAV24DGVWOjittZlHIQffw1CXIP-rrcoDxMQsQOdgDUS4E2X1Y-JuGzCga8OQn-Mqiqwv6HIXsKHABNzqhWpaPtBB0eeGweEBZMk9auk",
  wildlife:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDM9hoBVTzY8r_-hDo5TYrTeQLNz15CQIl38jI92Ttx2Fn7csgrH2b3byqiRLbg7uH68lnpvfAjQUns6OILlYtUi4BwP0W7OTT42bRygOHfYDzNowUWZgR7j6t0DWD3G_gUchMBZR-BVlLA1hEJxZyi0VX2ht97vOKAfW3tBhHmTHhLoTYAT5NCTWZph-gDaHhfY-uKDcN2LUeai3Jp0dwLYIotVKuuX0u9rtrhj5L5Nf7rU382b_peMhSx6NImkyH-mxSzkgSVIvs",
  elephants:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBOkYZuVWHPRHSRpG8ewtXRqPcROtQ_pPDjqO0fJP8CJvKAq_Nw3OVuDI4ZYBcWYdAlMgHeXV3vLrYIOd7J2BIvapqRK4HaFYxkXGXJwhyVSmusDhFQxqORDBwS9EKDg0Cir2jWleyRf2RxLR_YZi6pAy0W3kLYcr1OsrIxlVMHnq8p2fbtyhjJyZDl6ERmzHt_ppDKt5OW7Y2GXwqdoXGKYe5F2njNGeSFBCrYXyXVWt9wFeUEGAfeotdoJSGx2gOtPojjdBDdiIk",
  landscape:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA8wnhix4Jy5dn_MyOaemc6Nm9FfEmBOJ0HN9P5BMlJOiWnfonx_J16HCY6ac2aZBQW72riWNQ9Vm72C1yAJOfe_JIHuFduJiILSDjndd01N4M-yl90jOnd5ZOnzj-SEPv8ZZ9mv81WNfw_MAhFSCE4X-mmQ6w-k7be6hHNMDsgBveynepr8N7IXQJ2FToc-Wvt9B1igqlov4xFqxEj7wFDV2s9HlVE1Y3-RMKV-EeM8xON2TttBqQcIYNEIPu8QMyEgIDlTyo17M4",
};

const accommodation = [
  {
    title: "Luxury Tented Suite",
    body: "Canvas, timber and wide private decks for travelers who want the sky overhead and a private lodge interior beneath it.",
    image: safariImages.camp,
  },
  {
    title: "Family Safari Tent",
    body: "A generous family stay with connected sleeping zones, soft light and room for slow mornings after the game drive.",
    image: safariImages.lodge,
  },
];

const experiences = [
  ["01", "Game Drives", "Private dawn and dusk drives across the plains.", safariImages.drive],
  ["02", "Bush Dinner", "Candlelit dining in the open landscape.", safariImages.dining],
  ["03", "Sunrise Safari", "Balloon, breakfast and a cinematic horizon.", safariImages.balloon],
];

const packages = [
  {
    title: "3-Day Serengeti Escape",
    body: "A compact itinerary for the traveler who wants lodge comfort, wildlife viewing and a memorable first safari.",
    price: "$2,400",
  },
  {
    title: "5-Day Northern Circuit",
    body: "A balanced route through the classic East African safari circuit with more time for photos and downtime.",
    price: "$4,850",
  },
  {
    title: "7-Day Luxury Safari Journey",
    body: "A premium stay built around lodge comfort, private transfers and the slower rhythm of a high-value journey.",
    price: "$6,200",
  },
];

const gallery = [
  { title: "Safari Car", image: safariImages.drive, span: "wide" },
  { title: "Wildlife", image: safariImages.wildlife, span: "tall" },
  { title: "Sunset", image: safariImages.hero, span: "default" },
];

const contactLines = [
  ["WhatsApp", "+255 700 000 000", `https://wa.me/255700000000`],
  ["Phone", "+255 700 000 000", "tel:+255700000000"],
  ["Email", "stay@safarilodge.example", "mailto:stay@safarilodge.example"],
  ["Location", "Arusha / Serengeti / Ngorongoro / Zanzibar", "#location"],
];

export default function SafariLodgeTemplatePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/obys-lab/work/hospitality" className={styles.brand} aria-label="Back to hospitality reel">
          <span>Serengeti Horizon Safari Lodge</span>
        </Link>
        <nav className={styles.nav} aria-label="Safari Lodge template navigation">
          <a href="#stay">Stay</a>
          <a href="#experiences">Experiences</a>
          <a href="#journeys">Journeys</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className={styles.headerMeta}>
          <span>Powered by TIIH</span>
        </div>
      </header>
      <aside className={styles.concierge}>
        <div className={styles.conciergeHead}>
          <span>Concierge</span>
          <strong>Safari Planning</strong>
        </div>
        <a href="https://wa.me/255700000000" target="_blank" rel="noreferrer">
          Chat on WhatsApp
        </a>
      </aside>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p>Safari Lodge Website Template</p>
          <h1>Sleep Between The Savannah And The Stars</h1>
          <span>A refined safari lodge experience for travelers exploring Serengeti, Ngorongoro and the wild heart of East Africa.</span>
          <div className={styles.heroActions}>
            <a href="#booking">Plan Your Safari</a>
            <a href="https://wa.me/255700000000" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>
          <dl className={styles.heroMeta}>
            <div>
              <dt>Brand</dt>
              <dd>Serengeti Horizon</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Safari Lodge / Camp / Tour Operator</dd>
            </div>
          </dl>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroVisualTop} />
          <div className={styles.heroVisualMain} style={{ backgroundImage: `linear-gradient(180deg, rgba(14, 10, 7, 0.06), rgba(14, 10, 7, 0.42)), url(${safariImages.hero})` }} />
          <div className={styles.heroVisualCard}>
            <div className={styles.cardImage} style={{ backgroundImage: `linear-gradient(180deg, rgba(14, 10, 7, 0.12), rgba(14, 10, 7, 0.4)), url(${safariImages.lodge})` }} />
            <span>Private Bush Villa</span>
          </div>
          <div className={styles.heroVisualCardSmall}>
            <div className={styles.cardImage} style={{ backgroundImage: `linear-gradient(180deg, rgba(14, 10, 7, 0.06), rgba(14, 10, 7, 0.36)), url(${safariImages.balloon})` }} />
            <span>Sunrise Safari</span>
          </div>
        </div>
      </section>

      <section id="stay" className={styles.story}>
        <div className={styles.sectionKicker}>About</div>
        <div className={styles.sectionHeader}>
          <h2>A private lodge experience in East Africa</h2>
          <p>A refined safari stay designed for travelers seeking wildlife, comfort and authentic local hospitality.</p>
        </div>
        <div className={styles.storyGrid}>
          <div className={styles.storyPanel}>
            <p>
              Serengeti Horizon Safari Lodge is shaped for the long-view traveler: warm materials, low-slung furniture,
              slow mornings and a visual rhythm that moves between lodge calm and wilderness scale.
            </p>
            <p>
              The template is built to help a lodge, camp or tour operator feel ready to launch with room for
              itineraries, bookings, guest questions and direct WhatsApp conversion.
            </p>
          </div>
          <dl className={styles.storyMeta}>
            <div>
              <dt>Area</dt>
              <dd>Serengeti / Ngorongoro / Arusha / Zanzibar</dd>
            </div>
            <div>
              <dt>Style</dt>
              <dd>Luxury Safari / Editorial / Earth Tone</dd>
            </div>
            <div>
              <dt>Guests</dt>
              <dd>Families / Couples / Groups / Operators</dd>
            </div>
          </dl>
        </div>
        <figure className={styles.aboutVisual} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={safariImages.lodge}
            alt=""
            className={styles.coverImage}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </section>

      <section className={styles.accommodation}>
        <div className={styles.sectionHeader}>
          <h2>Accommodation</h2>
          <p>Three room directions with enough space for a real hospitality offer.</p>
        </div>
        <div className={styles.cardGrid3}>
          {accommodation.map((item) => (
            <article key={item.title} className={styles.mediaCard}>
              <div className={styles.mediaCardImage} style={{ backgroundImage: `linear-gradient(180deg, rgba(17, 13, 9, 0.1), rgba(17, 13, 9, 0.5)), url(${item.image})` }} />
              <div className={styles.mediaCardBody}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span>View Details</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experiences" className={styles.experiences}>
        <div className={styles.sectionHeader}>
          <h2>Experiences</h2>
          <p>Safari moments that feel built for the lodge, not pasted onto it.</p>
        </div>
        <div className={styles.experienceGrid}>
          {experiences.map(([number, title, body, image]) => (
            <article key={title} className={styles.experienceItem}>
              <div className={styles.experienceImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt=""
                  className={styles.coverImage}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journeys" className={styles.journeys}>
        <div className={styles.sectionHeader}>
          <h2>Safari Packages</h2>
          <p>Journeys designed to sell the stay before the guest reaches the lodge.</p>
        </div>
        <div className={styles.packageGrid}>
          {packages.map((item, index) => (
            <article key={item.title} className={index === 1 ? styles.packageCardActive : styles.packageCard}>
              <p>0{index + 1} — JOURNEY</p>
              <h3>{item.title}</h3>
              <span>{item.body}</span>
              <strong>{item.price}</strong>
              <button type="button">Enquire Now</button>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className={styles.gallery}>
        <div className={styles.sectionHeader}>
          <h2>Gallery</h2>
          <p>Editorial visual rhythm for safari car, camp, wildlife, sunset, dining and bedroom imagery.</p>
        </div>
        <div className={styles.galleryGrid}>
          {gallery.map((item, index) => (
            <figure
              key={item.title}
              className={`${styles.galleryItem} ${item.span === "wide" ? styles.galleryItemWide : ""} ${
                item.span === "tall" ? styles.galleryItemTall : ""
              }`}
            >
              <div
                className={styles.galleryImage}
                style={{ backgroundImage: `linear-gradient(180deg, rgba(17, 13, 9, 0.08), rgba(17, 13, 9, 0.5)), url(${item.image})` }}
              />
              <figcaption>
                <span>0{index + 1}</span>
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="location" className={styles.location}>
        <div className={styles.locationCopy}>
          <div className={styles.sectionKicker}>Location / Map</div>
          <h2>Find Us Near The National Park</h2>
          <p>Arusha, Serengeti, Ngorongoro and Zanzibar are represented as realistic destination anchors rather than a literal map API.</p>
          <dl className={styles.locationMeta}>
            <div>
              <dt>Location</dt>
              <dd>Arusha / Serengeti / Ngorongoro / Zanzibar</dd>
            </div>
            <div>
              <dt>Coordinates</dt>
            <dd>02° 20&#39; S / 34° 49&#39; E</dd>
            </div>
          </dl>
          <div className={styles.locationPills}>
            <span>Safari Camp</span>
            <span>Eco Lodge</span>
            <span>Tour Operator</span>
          </div>
        </div>
        <div className={styles.mapCard} aria-hidden="true">
          <div className={styles.mapGrid} />
          <div className={styles.mapPin} />
          <div className={styles.mapLabel}>
            <span>National Park Radius</span>
            <strong>Day trip / lodge / circuit</strong>
          </div>
        </div>
      </section>

      <section id="booking" className={styles.booking}>
        <div className={styles.bookingForm}>
          <div className={styles.sectionHeader}>
            <h2>Booking Inquiry</h2>
            <p>Turn the template into a working hospitality lead form.</p>
          </div>
          <form className={styles.form}>
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="name@example.com" />
            </label>
            <div className={styles.formRow}>
              <label>
                <span>Phone / WhatsApp</span>
                <input type="tel" placeholder="+255 700 000 000" />
              </label>
              <label>
                <span>Arrival Date</span>
                <input type="date" />
              </label>
            </div>
            <div className={styles.formRow}>
              <label>
                <span>Guests</span>
                <input type="number" min="1" placeholder="2" />
              </label>
              <label>
                <span>Message</span>
                <textarea rows={4} placeholder="Tell us about your safari plans." />
              </label>
            </div>
            <button type="button">Send Inquiry</button>
          </form>
        </div>

        <aside id="contact" className={styles.contactPanel}>
          <div className={styles.sectionKicker}>Contact</div>
          <h2>Direct contact for Safari Lodge bookings.</h2>
          <div className={styles.contactList}>
            {contactLines.map(([label, value, href]) => (
              <div key={label}>
                <span>{label}</span>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                  {value}
                </a>
              </div>
            ))}
          </div>
          <a className={styles.whatsappButton} href="https://wa.me/255700000000" target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </aside>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Serengeti Horizon Safari Lodge</strong>
          <p>TIIH Hospitality Collection</p>
        </div>
        <div>
          <span>Powered by TIIH</span>
          <p>Digital Solutions for East Africa</p>
          <small>Dar es Salaam, Tanzania</small>
        </div>
      </footer>
    </main>
  );
}
