import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsapTimeline = (
  timeLine,
  rotationRef,
  rotaionState,
  firstTarget,
  secondtarget,
  animationProps
) => {
  timeLine.to(rotationRef.current.rotaion, {
    y: rotaionState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeLine.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeLine.to(
    secondtarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
