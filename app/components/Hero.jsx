"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
