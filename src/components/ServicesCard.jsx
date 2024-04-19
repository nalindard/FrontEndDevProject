import Button from "./Button";

/* eslint-disable react/prop-types */
function ServicesCard({ title, image, description, itemsOrder }) {
  return (
    <div
      className={`mb-[60px] flex w-full flex-col items-center justify-center text-black md:flex-row md:justify-normal md:gap-5 lg:mb-20 ${itemsOrder === "acc" ? "" : "md:flex-row-reverse"}`}
    >
      {/* Image */}
      <div className="px-[30px] pb-5 md:px-0">
        <img
          loading="lazy"
          className="min-w-[275px] lg:min-w-[346px] xl:min-w-[414px]"
          width={"275px"}
          src={`/src/assets/${image}`}
          alt="service image"
        />
      </div>

      {/* Title */}
      <div className="flex flex-col items-center md:items-start md:py-[18px] lg:py-[79.5px] xl:py-[113.5px]">
        <h3 className="[line-height: 33px] [letter-spacing: 0.4000000059604645px] pb-5 text-center font-poppins text-[27px] font-semibold text-primary md:text-left">
          {title}
        </h3>

        {/* Description */}
        <p className="text-s [line-height: 19.36px] pb-5 text-center font-inter text-base font-normal md:text-left">
          {description}
        </p>

        {/* Button */}
        {/* <button className="uppercase">Learn More</button> */}
        <Button
          text={"Learn More"}
          cssClasses={
            "bg-secondary text-white text-sm px-5 py-3 uppercase font-bold [letter-spacing: -0.02em] rounded"
          }
        />
      </div>
    </div>
  );
}

export default ServicesCard;
