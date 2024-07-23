import { useEffect } from 'react';
import { gsap } from 'gsap';

const Intro = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
    tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
    tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
    tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
  }, []);

  return (
    <>
      <div className="intro fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#121212] z-[999]">
      <div className="intro-text text-[#d5d5d5] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-extrabold bg-[#121212] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <h1 className="hide">
            <span className="text transform translate-y-full inline-block ">
              HI THERE!
            </span>
          </h1>
          <h1 className="hide">
            <span className="text transform translate-y-full inline-block">
              THANK YOU FOR
            </span>
          </h1>
          <h1 className="hide">
            <span className="text transform translate-y-full inline-block">
              INVADING MY SPACE!
            </span>
          </h1>
        </div>
      </div>
      <div className="slider fixed top-0 left-0 w-full h-full bg-[#121212] transform translate-y-full"></div>
    </>
  );
};

export default Intro;