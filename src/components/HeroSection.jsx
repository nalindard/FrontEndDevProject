import Button from "../components/Button.jsx";

function HeroSection() {
  return (
    <div className="aspect-[144/70] w-full lg:relative">
      {/* Hero Image */}
      <picture>
        <source media="(max-width: 768px)"  srcSet="/images/hero-image-sm.webp"/>
        <source media="(max-width: 1200px)"  srcSet="/images/hero-image-md.webp"/>
        <img
          loading="eager"
          src="/images/hero-image-lg.webp"
          alt="hero image"
          className="aspect-[144/70] w-full"
        />
      </picture>

      {/* Hero Text */}
      <div
        className="flex w-full flex-wrap justify-start bg-gradient-to-r from-dark to-analogous-2 px-5 pt-5 font-inter font-bold md:px-10 
            md:pt-6 lg:absolute lg:bottom-10 lg:left-[60px] lg:w-[622px] lg:pl-10 lg:pr-[26px] lg:pt-6 xl:left-20 xl:pr-[34px]"
      >
        <p className="md:[line-height: 48px] md:[letter-spacing: -0.02em] pb-5 text-left [font-size:36px] [line-height:36px] md:h-auto md:text-5xl md:font-bold">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </p>
        <span className="pb-8 lg:pt-5">
          <Button
            text={"GET FREE CONSULATION"}
            styles={{
              minWidth: "174px",
              fontSize: "14px",
              lineHeight: "14px",
              letterSpacing: "-0.02em",
            }}
            cssClasses={"bg-secondary py-3 px-5 text-left font-inter rounded"}
          />
        </span>
      </div>
    </div>
  );
}

export default HeroSection;
