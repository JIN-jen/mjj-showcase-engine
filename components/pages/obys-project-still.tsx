import Image from "next/image";
import type { ObysLabItem } from "@/components/pages/obys-lab-data";

const assetBase = "/template-assets/hospitality/luxury-hotel";

const demoImages = {
  galleryLiving: `${assetBase}/gallery-living.png`,
  heroEstate: `${assetBase}/hero-estate.png`,
  mobileHeroEstate: `${assetBase}/mobile-hero-estate.png`,
  proposalDetail: `${assetBase}/proposal-detail.png`,
  suiteRoom: `${assetBase}/suite-room.png`,
};

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

type ObysProjectStillProps = {
  frameIndex?: number;
  item: ObysLabItem;
  mode: "index" | "detail";
};

const hospitalityPosterFrames = [
  {
    image: "/posters/hospitality/luxury-hotel.png",
    title: "Luxury Hotel",
    subtitle: "Brand Website / Direct Booking / Mobile Experience",
    tags: ["Brand Website", "Direct Booking", "Mobile"],
  },
  {
    image: "/posters/hospitality/safari-lodge.png",
    title: "Safari Lodge",
    subtitle: "WhatsApp / Map / Inquiry Flow",
    tags: ["WhatsApp", "Map", "Inquiry"],
  },
  {
    image: "/posters/hospitality/boutique-hotel.png",
    title: "Boutique Hotel",
    subtitle: "Editorial Rooms / Guest Experience",
    tags: ["Editorial", "Rooms", "Guest"],
  },
  {
    image: "/posters/hospitality/resort.png",
    title: "Resort Booking",
    subtitle: "Rooms / Gallery / Travel",
    tags: ["Rooms", "Gallery", "Travel"],
  },
  {
    image: "/posters/hospitality/apartment-hotel.png",
    title: "Apartment Hotel",
    subtitle: "Long Stay / Mobile",
    tags: ["Long Stay", "Mobile", "Inquiry"],
  },
  {
    image: "/posters/hospitality/beach-resort.png",
    title: "Beach Resort",
    subtitle: "Coastal Stay / Wedding / Leisure",
    tags: ["BEACH", "WEDDING", "LEISURE"],
  },
] as const;

const restaurantPosterFrames = [
  {
    image: "/posters/restaurant/fine-dining-restaurant.png",
    title: "Fine Dining",
    subtitle: "Michelin Star / Wine / Experience",
    tags: ["MICHELIN", "WINE", "DINING"],
  },
  {
    image: "/posters/restaurant/modern-cafe.png",
    title: "Coffee Shop",
    subtitle: "Specialty Coffee / Lifestyle / Brand",
    tags: ["COFFEE", "LIFESTYLE", "BRAND"],
  },
  {
    image: "/posters/restaurant/rooftop-bar-lounge.png",
    title: "Rooftop Bar",
    subtitle: "Cocktails / Skyline / Membership",
    tags: ["BAR", "SKYLINE", "VIP"],
  },
  {
    image: "/posters/restaurant/bakery-patisserie.png",
    title: "Bakery",
    subtitle: "Pastry / Dessert / Boutique",
    tags: ["PASTRY", "DESSERT", "BOUTIQUE"],
  },
  {
    image: "/posters/restaurant/fast-casual-restaurant.png",
    title: "Fast Casual",
    subtitle: "Healthy Food / Chain / Startup",
    tags: ["HEALTHY", "CHAIN", "BRAND"],
  },
  {
    image: "/posters/restaurant/bubble-tea-dessert-brand.png",
    title: "Bubble Tea",
    subtitle: "Tea / Dessert / Retail",
    tags: ["TEA", "DESSERT", "RETAIL"],
  },
] as const;

export function ObysProjectStill({ frameIndex = 0, item, mode }: ObysProjectStillProps) {
  const frame = (frameIndex % 6) + 1;
  const isHospitalityPoster = item.slug === "hospitality" && mode === "detail";
  const hospitalityPoster = hospitalityPosterFrames[frameIndex % hospitalityPosterFrames.length];
  const isRestaurantPoster = item.slug === "restaurant" && mode === "detail";
  const restaurantPoster = restaurantPosterFrames[frameIndex % restaurantPosterFrames.length];
  const displayNumber = mode === "detail" ? String(frame).padStart(2, "0") : item.number;

  return (
    <div
      className={`obys-project-still obys-project-still--${mode} obys-project-still--${item.slug} obys-project-still--frame-${frame}`}
      aria-hidden="true"
    >
      {mode === "index" ? (
        <div className={`obys-project-still__poster obys-project-still__poster--${item.slug}`}>
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            priority={frameIndex === 0}
            sizes="(min-width: 900px) 18vw, 48vw"
            className="obys-project-still__poster-image"
          />
        </div>
      ) : isHospitalityPoster ? (
        <div className="obys-project-still__hospitality-poster">
          <div className="obys-project-still__hospitality-poster-top">
            <span>TIIH</span>
            <span>Hospitality</span>
            <span>{displayNumber}</span>
          </div>
          <div className="obys-project-still__hospitality-poster-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hospitalityPoster.image} alt="" className="obys-project-still__hospitality-poster-img" />
          </div>
          <div className="obys-project-still__hospitality-poster-footer">
            <div>
              <strong>{hospitalityPoster.title}</strong>
              <em>{hospitalityPoster.subtitle}</em>
            </div>
            <ul>
              {hospitalityPoster.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : isRestaurantPoster ? (
        <div className="obys-project-still__hospitality-poster">
          <div className="obys-project-still__hospitality-poster-top">
            <span>TIIH</span>
            <span>Restaurant</span>
            <span>{displayNumber}</span>
          </div>
          <div className="obys-project-still__hospitality-poster-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={restaurantPoster.image} alt="" className="obys-project-still__hospitality-poster-img" />
          </div>
          <div className="obys-project-still__hospitality-poster-footer">
            <div>
              <strong>{restaurantPoster.title}</strong>
              <em>{restaurantPoster.subtitle}</em>
            </div>
            <ul>
              {restaurantPoster.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <div className="obys-project-still__desktop-layer desktop-layer">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="obys-project-still__mobile-layer mobile-layer">
            <span />
            <span />
            <span />
          </div>
          <div className="obys-project-still__fragment-layer fragment-layer">
            <span />
            <span />
          </div>
          <div className="obys-project-still__support-layer support-layer">
            <b>{displayNumber}</b>
            <strong>{item.title}</strong>
            <span>{item.category}</span>
          </div>
        </>
      )}
      <style jsx>{`
        .obys-project-still__hospitality-poster {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border: 1px solid rgba(17, 17, 17, 0.16);
          background: #d9d5cc;
        }

        .obys-project-still__hospitality-poster::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(0, 0, 0, 0.08)),
            linear-gradient(135deg, rgba(238, 222, 195, 0.1), rgba(32, 22, 16, 0.16));
          pointer-events: none;
          z-index: 2;
        }

        .obys-project-still__hospitality-poster-top {
          position: absolute;
          inset: 0 auto auto 0;
          z-index: 3;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          width: 100%;
          padding: 0.42rem 0.52rem;
          color: rgba(255, 248, 236, 0.88);
          font-size: clamp(0.28rem, 0.34vw, 0.42rem);
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .obys-project-still__hospitality-poster-image {
          position: absolute;
          inset: 0 0 22% 0;
          overflow: hidden;
        }

        .obys-project-still__hospitality-poster-img {
          object-fit: cover;
        }

        .obys-project-still__hospitality-poster-footer {
          position: absolute;
          inset: auto 0 0 0;
          z-index: 3;
          display: grid;
          gap: 0.4rem;
          padding: 0.6rem 0.64rem 0.68rem;
          background: rgba(13, 10, 7, 0.9);
          color: rgba(255, 248, 236, 0.96);
          text-transform: uppercase;
        }

        .obys-project-still__hospitality-poster-footer strong {
          display: block;
          font-size: clamp(0.54rem, 0.72vw, 0.88rem);
          letter-spacing: 0.12em;
          font-weight: 400;
        }

        .obys-project-still__hospitality-poster-footer em {
          display: block;
          margin-top: 0.1rem;
          font-style: normal;
          font-size: clamp(0.24rem, 0.32vw, 0.38rem);
          letter-spacing: 0.18em;
          color: rgba(255, 248, 236, 0.64);
        }

        .obys-project-still__hospitality-poster-footer ul {
          display: flex;
          flex-wrap: wrap;
          gap: 0.28rem;
          margin: 0.1rem 0 0;
          padding: 0;
          list-style: none;
        }

        .obys-project-still__hospitality-poster-footer li {
          padding: 0.18rem 0.32rem;
          border: 1px solid rgba(255, 248, 236, 0.18);
          font-size: clamp(0.22rem, 0.29vw, 0.34rem);
          letter-spacing: 0.14em;
        }

        .obys-project-still__hospitality-cover {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: #d9d5cc;
        }

        .obys-project-still__hospitality-cover::before,
        .obys-project-still__hospitality-cover::after {
          content: "";
          position: absolute;
          inset: auto;
          pointer-events: none;
        }

        .obys-project-still__hospitality-cover::before {
          left: 0;
          right: 0;
          top: 0;
          height: 12%;
          background: linear-gradient(90deg, rgba(17, 17, 17, 0.85) 0 16%, transparent 16% 22%, rgba(17, 17, 17, 0.78) 22% 24%, transparent 24% 78%, rgba(17, 17, 17, 0.88) 78% 100%);
        }

        .obys-project-still__hospitality-cover::after {
          inset: 15% 8% 13% 8%;
          background:
            radial-gradient(ellipse at 50% 26%, rgba(255, 255, 255, 0.56) 0 10%, transparent 11%),
            radial-gradient(ellipse at 50% 46%, rgba(255, 255, 255, 0.2) 0 16%, transparent 17%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0 34%, transparent 34% 100%);
          opacity: 0.8;
        }

        .obys-project-still__hospitality-nav {
          position: absolute;
          top: 6%;
          left: 8%;
          right: 8%;
          display: flex;
          justify-content: space-between;
          font-size: clamp(0.26rem, 0.34vw, 0.4rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.88);
          z-index: 2;
        }

        .obys-project-still__hospitality-hero {
          position: absolute;
          inset: 15% 8% 34% 8%;
          z-index: 1;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.26);
          background: rgba(255, 255, 255, 0.08);
        }

        .obys-project-still__hospitality-image {
          object-fit: cover;
        }

        .obys-project-still__hospitality-image--hero {
          transform: scale(1.05);
        }

        .obys-project-still__hospitality-image--gallery {
          transform: scale(1.08);
        }

        .obys-project-still__hospitality-image--room {
          transform: scale(1.06);
        }

        .obys-project-still__hospitality-image--booking {
          transform: scale(1.04);
        }

        .obys-project-still__hospitality-hero-top {
          position: absolute;
          inset: 0 auto auto 0;
          width: 100%;
          height: 18%;
          background:
            linear-gradient(90deg, rgba(22, 22, 22, 0.9) 0 4%, transparent 4% 12%, rgba(22, 22, 22, 0.78) 12% 16%, transparent 16% 85%, rgba(22, 22, 22, 0.84) 85% 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(17, 17, 17, 0.06));
        }

        .obys-project-still__hospitality-hero-veil {
          position: absolute;
          inset: 18% 8% 22% 8%;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(0, 0, 0, 0.28)),
            radial-gradient(circle at 52% 22%, rgba(255, 255, 255, 0.42) 0 8%, transparent 9%),
            linear-gradient(135deg, rgba(222, 217, 208, 0.15), rgba(41, 40, 37, 0.45));
        }

        .obys-project-still__hospitality-rooms {
          position: absolute;
          left: 8%;
          bottom: 17%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.35rem;
          width: 50%;
          z-index: 2;
        }

        .obys-project-still__hospitality-room-card {
          position: relative;
          display: grid;
          gap: 0.1rem;
          min-height: 2.8rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(14, 14, 14, 0.74);
          color: rgba(255, 255, 255, 0.92);
          overflow: hidden;
        }

        .obys-project-still__hospitality-room-media {
          position: absolute;
          inset: 0 0 0 0;
          opacity: 0.58;
        }

        .obys-project-still__hospitality-room-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.45));
          z-index: 1;
        }

        .obys-project-still__hospitality-room-card span,
        .obys-project-still__hospitality-room-card strong {
          position: relative;
          z-index: 2;
          display: block;
          padding-inline: 0.34rem;
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.35);
        }

        .obys-project-still__hospitality-room-card span {
          padding-top: 0.28rem;
          font-size: clamp(0.28rem, 0.36vw, 0.42rem);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 400;
        }

        .obys-project-still__hospitality-room-card strong {
          padding-bottom: 0.26rem;
          color: rgba(255, 255, 255, 0.84);
          letter-spacing: 0.08em;
        }

        .obys-project-still__hospitality-booking {
          position: absolute;
          right: 8%;
          bottom: 18%;
          width: 22%;
          padding: 0.36rem 0.42rem 0.32rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(236, 234, 228, 0.82);
          z-index: 2;
          overflow: hidden;
        }

        .obys-project-still__hospitality-booking span {
          display: block;
          font-size: clamp(0.28rem, 0.34vw, 0.4rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(17, 17, 17, 0.74);
        }

        .obys-project-still__hospitality-booking-media {
          position: relative;
          height: 1.14rem;
          margin-top: 0.16rem;
          overflow: hidden;
          border: 1px solid rgba(17, 17, 17, 0.12);
        }

        .obys-project-still__hospitality-booking i {
          display: block;
          height: 0.46rem;
          margin-top: 0.18rem;
          border-top: 1px solid rgba(17, 17, 17, 0.22);
          background:
            linear-gradient(90deg, rgba(17, 17, 17, 0.1) 0 12%, transparent 12% 28%, rgba(17, 17, 17, 0.14) 28% 40%, transparent 40% 100%);
        }

        .obys-project-still__hospitality-title {
          position: absolute;
          left: 8%;
          right: 8%;
          bottom: 7%;
          z-index: 2;
          display: grid;
          gap: 0.12rem;
          padding: 0.48rem 0.58rem;
          background: rgba(8, 8, 8, 0.92);
          color: rgba(255, 255, 255, 0.94);
          text-transform: uppercase;
        }

        .obys-project-still__hospitality-title span {
          font-size: clamp(0.28rem, 0.34vw, 0.4rem);
          letter-spacing: 0.2em;
        }

        .obys-project-still__hospitality-title strong {
          font-size: clamp(0.52rem, 0.72vw, 0.84rem);
          letter-spacing: 0.14em;
          font-weight: 400;
        }

        .obys-project-still__hospitality-title em {
          font-style: normal;
          font-size: clamp(0.24rem, 0.32vw, 0.38rem);
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.66);
        }

        .obys-project-still__safari-cover {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border: 1px solid rgba(51, 30, 10, 0.18);
          background:
            radial-gradient(circle at top left, rgba(203, 167, 105, 0.18), transparent 28%),
            linear-gradient(180deg, #d9c6a0 0%, #c5b18a 20%, #8f7752 40%, #3c2a1d 74%, #23160f 100%);
        }

        .obys-project-still__safari-cover::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(255, 240, 205, 0.18), rgba(0, 0, 0, 0.1)),
            linear-gradient(90deg, rgba(17, 17, 17, 0.18), transparent 24% 76%, rgba(17, 17, 17, 0.18));
          pointer-events: none;
        }

        .obys-project-still__safari-topbar {
          position: absolute;
          inset: 0 0 auto;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.3rem 0.45rem 0;
          color: rgba(255, 244, 222, 0.84);
          font-size: clamp(0.25rem, 0.33vw, 0.38rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .obys-project-still__safari-hero {
          position: absolute;
          inset: 10% 8% 34% 8%;
          z-index: 1;
          overflow: hidden;
          border: 1px solid rgba(255, 234, 198, 0.24);
          background: rgba(255, 247, 228, 0.08);
        }

        .obys-project-still__safari-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.36)),
            linear-gradient(135deg, rgba(255, 238, 192, 0.1), rgba(49, 27, 11, 0.18));
        }

        .obys-project-still__safari-media {
          position: absolute;
          inset: 0;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          transform: scale(1.04);
        }

        .obys-project-still__safari-media--hero {
          transform: scale(1.08);
        }

        .obys-project-still__safari-copy {
          position: absolute;
          left: 5%;
          bottom: 5%;
          z-index: 2;
          display: grid;
          gap: 0.14rem;
          max-width: 46%;
          padding: 0.34rem 0.42rem;
          background: rgba(13, 9, 6, 0.84);
          color: rgba(255, 244, 220, 0.96);
          text-transform: uppercase;
        }

        .obys-project-still__safari-copy span {
          font-size: clamp(0.25rem, 0.31vw, 0.36rem);
          letter-spacing: 0.2em;
        }

        .obys-project-still__safari-copy strong {
          font-size: clamp(0.45rem, 0.6vw, 0.72rem);
          letter-spacing: 0.16em;
          font-weight: 400;
        }

        .obys-project-still__safari-copy em {
          font-style: normal;
          font-size: clamp(0.22rem, 0.28vw, 0.34rem);
          letter-spacing: 0.16em;
          color: rgba(255, 244, 220, 0.66);
        }

        .obys-project-still__safari-grid {
          position: absolute;
          left: 8%;
          right: 8%;
          bottom: 13%;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.28rem;
        }

        .obys-project-still__safari-card {
          position: relative;
          overflow: hidden;
          min-height: 2.2rem;
          border: 1px solid rgba(255, 232, 196, 0.16);
          background: rgba(25, 17, 12, 0.68);
        }

        .obys-project-still__safari-card--tall {
          grid-row: span 2;
          min-height: 4.76rem;
        }

        .obys-project-still__safari-card--wide {
          grid-column: span 2;
        }

        .obys-project-still__safari-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.2) 52%, rgba(0, 0, 0, 0.56) 100%),
            radial-gradient(circle at 50% 18%, rgba(255, 233, 188, 0.16), transparent 46%);
        }

        .obys-project-still__safari-card span {
          position: absolute;
          left: 0.32rem;
          right: 0.32rem;
          bottom: 0.22rem;
          z-index: 2;
          color: rgba(255, 245, 226, 0.96);
          font-size: clamp(0.26rem, 0.31vw, 0.38rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .obys-project-still__safari-footer {
          position: absolute;
          inset: auto 8% 7% 8%;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 0.24rem;
          border-top: 1px solid rgba(255, 236, 202, 0.18);
          color: rgba(255, 244, 220, 0.82);
          font-size: clamp(0.25rem, 0.32vw, 0.36rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
