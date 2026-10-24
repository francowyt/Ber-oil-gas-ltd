import { useState } from "react";
import { Play, Youtube } from "lucide-react";
import { YOUTUBE_CHANNEL_URL, YOUTUBE_VIDEO_URL } from "@/lib/company";
import { Reveal } from "./Reveal";
import heroTanker from "@/assets/hero-tanker.jpg";

function getVideoId(url: string) {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m?.[1] ?? null;
}

export function VideoSection() {
  const id = YOUTUBE_VIDEO_URL ? getVideoId(YOUTUBE_VIDEO_URL) : null;
  const [playing, setPlaying] = useState(false);

  return (
    <section aria-labelledby="video-heading" className="bg-secondary py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Company Story</p>
          <h2 id="video-heading" className="mt-5 font-display text-3xl font-semibold sm:text-5xl">
            See BER OIL &amp; GAS LTD in Action
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Discover more about BER OIL &amp; GAS LTD, our services and our commitment to
            quality diesel supply and distribution.
          </p>
        </Reveal>

        <Reveal delay={120} className="reveal-scale mx-auto mt-12 max-w-5xl">
          <div className="relative aspect-video overflow-hidden rounded-md bg-navy shadow-[0_40px_80px_-40px_rgba(10,30,70,0.7)]">
            {id && playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
                title="BER OIL & GAS LTD company video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <>
                <img
                  src={id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : heroTanker}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                {id ? (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label="Play BER OIL & GAS LTD company video"
                    className="group absolute inset-0 flex items-center justify-center"
                  >
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-flame text-flame-foreground shadow-xl transition-transform group-hover:scale-110">
                      <Play className="ml-1 h-8 w-8" fill="currentColor" aria-hidden="true" />
                    </span>
                  </button>
                ) : (
                  <a
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-navy-foreground"
                  >
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-flame text-flame-foreground shadow-xl transition-transform group-hover:scale-110">
                      <Play className="ml-1 h-8 w-8" fill="currentColor" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-semibold tracking-[0.16em] uppercase">
                      Watch on our YouTube channel
                    </span>
                  </a>
                )}
              </>
            )}
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift inline-flex h-12 items-center gap-2 rounded-sm bg-navy px-7 font-semibold text-navy-foreground"
          >
            <Youtube className="h-5 w-5" aria-hidden="true" /> Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}
