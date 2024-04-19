import Button from "./Button"

/* eslint-disable react/prop-types */
function ServicesCard({ title, image, description, itemsOrder }) {

    return (
        <div className={`w-full mb-[60px] lg:mb-20 flex flex-col md:flex-row md:gap-5 justify-center items-center md:justify-normal text-black ${itemsOrder === 'acc' ? '' : 'md:flex-row-reverse' }`}>
            {/* Image */}
            <div className="px-[30px] md:px-0 pb-5">
                <img loading='lazy' className="min-w-[275px] lg:min-w-[346px] xl:min-w-[414px]" width={'275px'} src={`/src/assets/${image}`} alt="service image" />
            </div>

            {/* Title */}
            <div className="flex flex-col items-center md:items-start md:py-[18px] lg:py-[79.5px] xl:py-[113.5px]">
                <h3 className="pb-5 font-semibold font-poppins text-primary text-center md:text-left text-[27px] [line-height: 33px] [letter-spacing: 0.4000000059604645px]">{title}</h3>

                {/* Description */}
                <p className="text-base text-s font-normal pb-5 [line-height: 19.36px] text-center md:text-left font-inter">{description}</p>

                {/* Button */}
                {/* <button className="uppercase">Learn More</button> */}
                <Button text={'Learn More'} cssClasses={'bg-secondary text-white text-sm px-5 py-3 uppercase font-bold [letter-spacing: -0.02em] rounded'}/>
            </div>
        </div>
    )
}

export default ServicesCard