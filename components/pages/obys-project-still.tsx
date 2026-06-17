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

type ObysProjectStillProps = {
  frameIndex?: number;
  item: ObysLabItem;
  mode: "index" | "detail";
};

export function ObysProjectStill({ frameIndex = 0, item, mode }: ObysProjectStillProps) {
  const frame = (frameIndex % 6) + 1;
  const isHospitalityHero = item.slug === "hospitality" && mode === "detail" && frameIndex === 0;
  const displayNumber = mode === "detail" ? String(frame).padStart(2, "0") : item.number;

  return (
    <div
      className={`obys-project-still obys-project-still--${mode} obys-project-still--${item.slug} obys-project-still--frame-${frame}`}
      aria-hidden="true"
    >
      {isHospitalityHero ? (
        <div className="obys-project-still__hospitality-cover">
          <div className="obys-project-still__hospitality-nav">
            <span>TIIH</span>
            <span>Hospitality</span>
            <span>Luxury Hotel</span>
          </div>
          <div className="obys-project-still__hospitality-hero">
            <Image
              src={demoImages.heroEstate}
              alt=""
              fill
              sizes="(min-width: 900px) 58vw, 82vw"
              className="obys-project-still__hospitality-image obys-project-still__hospitality-image--hero"
            />
            <div className="obys-project-still__hospitality-hero-top" />
            <div className="obys-project-still__hospitality-hero-veil" />
          </div>
          <div className="obys-project-still__hospitality-gallery">
            <Image
              src={demoImages.galleryLiving}
              alt=""
              fill
              sizes="(min-width: 900px) 58vw, 82vw"
              className="obys-project-still__hospitality-image obys-project-still__hospitality-image--gallery"
            />
          </div>
          <div className="obys-project-still__hospitality-rooms">
            <article className="obys-project-still__hospitality-room-card">
              <div className="obys-project-still__hospitality-room-media">
                <Image
                  src={demoImages.suiteRoom}
                  alt=""
                  fill
                  sizes="(min-width: 900px) 58vw, 82vw"
                  className="obys-project-still__hospitality-image obys-project-still__hospitality-image--room"
                />
              </div>
              <span>{displayNumber}</span>
              <strong>Luxury Suite</strong>
            </article>
            <article className="obys-project-still__hospitality-room-card">
              <div className="obys-project-still__hospitality-room-media">
                <Image
                  src={demoImages.mobileHeroEstate}
                  alt=""
                  fill
                  sizes="(min-width: 900px) 58vw, 82vw"
                  className="obys-project-still__hospitality-image obys-project-still__hospitality-image--room"
                />
              </div>
              <span>02</span>
              <strong>Pool Villa</strong>
            </article>
          </div>
          <div className="obys-project-still__hospitality-booking">
            <span>Booking</span>
            <div className="obys-project-still__hospitality-booking-media">
              <Image
                src={demoImages.proposalDetail}
                alt=""
                fill
                sizes="(min-width: 900px) 58vw, 82vw"
                className="obys-project-still__hospitality-image obys-project-still__hospitality-image--booking"
              />
            </div>
            <i />
          </div>
          <div className="obys-project-still__hospitality-title">
            <span>{displayNumber}</span>
            <strong>{item.title}</strong>
            <em>Hotel / Resort / Safari Lodge</em>
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
          filter: grayscale(1) contrast(1.08) saturate(0.18);
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
      `}</style>
    </div>
  );
}
