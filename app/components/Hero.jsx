"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Render the hero section showcasing the MacBook Pro with a title image, an autoplaying muted background video, a purchase button, and pricing.
 *
 * On mount, sets the attached video's playback rate to 2x if the video element is available.
 *
 * @returns {JSX.Element} The root `<section>` element for the hero area.
 */
function Hero() {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <Image src="/title.png" alt="MacBook Title" width={800} height={100} />
      </div>

      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
      ></video>

      <button>Buy</button>

      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
}

export default Hero;