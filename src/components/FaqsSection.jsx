import data from "/src/assets/data.json";
import FaqsCard from "./FaqsCard.jsx";

function FaqsSection() {
  return (
    <div className="mb-[60px] h-auto w-full py-7 text-center text-black lg:mb-[80px]">
      <h2 className="[line-height: 33px] [letter-spacing: 0.4000000059604645px] pb-7 text-center font-poppins text-[27px] font-semibold text-primary">
        Frequently asked questions
      </h2>

      <div className="flex flex-col gap-y-[15px] pl-5 pr-[21px] md:pl-[42px] md:pr-[41px] lg:px-[152px] xl:px-[297px]">
        {data?.faqs?.map((data) => (
          <FaqsCard
            key={data?.id}
            q={data?.q}
            s={data?.s}
            openeDefault={data?.openeDefault}
          />
        ))}
      </div>
    </div>
  );
}

export default FaqsSection;
