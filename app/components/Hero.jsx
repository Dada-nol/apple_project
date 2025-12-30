"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section
      id="hero"
      className="mt-[80px] flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-lg md:text-4xl font-bold">MacBook Pro</h1>
        <Image src="/title.png" alt="MacBook Title" width={800} height={100} />
      </div>

      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        className="md:w-[1200px]"
      ></video>

      <button className="bg-blue-500 py-1 px-4 mb-2 rounded-xl text-sm">
        Buy
      </button>

      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
}

export default Hero;
