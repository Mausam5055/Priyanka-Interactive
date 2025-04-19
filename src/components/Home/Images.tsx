import { useGSAP } from "@gsap/react";
import gsap, { Expo } from "gsap/all";

const Images = () => {
  const position = [
    {
      video:
        "https://videos.pexels.com/video-files/1777892/1777892-hd_1280_720_25fps.mp4",
      right: "right-[60%]",
      top: "top-[30%]",
      height: "h-[30%]",
      width: "w-[100%]",
    },
    {
      image:
        "src/assets/1.webp",
      right: "-right-[40%]",
      top: "top-[10%]",
      height: "h-[35%]",
      width: "w-[50%]",
    },
    {
      image:
        "src/assets/2.webp",
      right: "right-[60%]",
      top: "top-[90%]",
      height: "h-[40%]",
      width: "w-[120%]",
    },
    {
      video:
        "https://videos.pexels.com/video-files/1448735/1448735-uhd_2732_1440_24fps.mp4",
      right: "-right-[90%]",
      top: "top-[86%]",
      height: "h-[50%]",
      width: "w-[100%]",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".images-section",
        scroller: "#homeFixedContainer",
        start: "top 30%",
        end: "top -200%",
        scrub: true,
      },
      defaults: {
        ease: Expo.easeOut,
      },
    });

    tl.to(
      ".images:nth-child(1) video",
      {
        x: "-50%",
        y: "-100%",
      },
      "a"
    )
      .to(
        ".images:nth-child(2) img",
        {
          x: "90%",
          y: "-50%",
        },
        "a"
      )
      .to(
        ".images:nth-child(3) img",
        {
          x: "-50%",
          y: "-50%",
        },
        "a"
      )
      .to(
        ".images:nth-child(4) video",
        {
          x: "50%",
          y: "-50%",
        },
        "a"
      );
  }, []);

  return (
    <div
      id="images"
      className="images-section w-full h-[70vh] sm:h-[160vh] overflow-hidden flex items-center justify-center bg-white"
    >
      <div className="relative w-1/3 sm:w-1/4 h-1/2">
        {position.map((item, index) => {
          return (
            <div
              className={`images absolute ${item.height} ${item.width} ${item.top} ${item.right}`}
              id={`${index}`}
              key={index}
            >
              {item.image ? (
                <img className="h-full w-full object-cover" src={item.image} />
              ) : (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  src={item.video}
                ></video>
              )}
            </div>
          );
        })}

        <img
          className="h-full w-full object-cover"
          src="src/assets/3.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
