import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Playreel = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".play-reel",
          scroller: "#homeFixedContainer",
          pin: true,
          start: "top top",
          end: "+=150%",
          scrub: true,
        },
      })
      .to(".video-div", {
        height: "100vh",
        width: "100vw",
      })
      .to(
        "h2",
        {
          gap: 2,
        },
        "<"
      );
  }, []);

  return (
    <div
      id="playreel"
      className="play-reel overflow-hidden relative w-full h-screen  bg-[#0d0e13]"
    >
      <div className="video-div w-48 sm:w-80 sm:h-44 h-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-full w-full bg-black/70 scale-[1.01]">
          <svg
            className="text-[#e4e0db] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full mx-auto sm:hidden scale-75 opacity-25"
            viewBox="0 0 86 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="43" cy="43" r="41" stroke="currentColor"></circle>
            <path d="M41 38V48L49.1818 43L41 38Z" fill="currentColor"></path>
          </svg>
        </div>
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          src="https://videos.pexels.com/video-files/6981409/6981409-hd_1920_1080_25fps.mp4"
        ></video>
      </div>

      <div className="overlay absolute flex flex-col justify-between w-full h-full text-[#e4e0db] py-20">
        <div className="flex items-center justify-center gap-2">
          <svg
            className="size-3"
            viewBox="0 0 12 12"
            fill="none"
            xmlns=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h2 className="text-sm">Work in motion</h2>
        </div>

        <h2 className="w-full flex items-center justify-center gap-32 sm:gap-[42%]">
          <div className="text-6xl sm:text-9xl">Play</div>
          <div className="text-6xl sm:text-9xl">Reel</div>
        </h2>

        <p className="text-center text-sm">
        Every frame moves with meaning<br /> Let the music guide your journey
         
        </p>
      </div>
    </div>
  );
};

export default Playreel;
