import data from "/src/assets/data.json"
import FaqsCard from "./FaqsCard.jsx"

function FaqsSection() {

    return (
        <div className="w-full text-black text-center py-7 mb-[60px] lg:mb-[80px] h-auto">

            <h2 className="pb-7 text-primary text-[27px] font-semibold [line-height: 33px] [letter-spacing: 0.4000000059604645px] text-center font-poppins">Frequently asked questions</h2>

            <div className="flex flex-col gap-y-[15px] pl-5 pr-[21px] md:pl-[42px] md:pr-[41px] lg:px-[152px] xl:px-[297px]">
                {data?.faqs?.map(data => (
                    // <p key={data?.title}>{data?.title}</p>
                    <FaqsCard key={data?.id} q={data?.q} s={data?.s} openeDefault={data?.openeDefault}/>
                ))}
            </div>
        </div>
    )
}

export default FaqsSection