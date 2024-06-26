/* eslint-disable react/prop-types */
import { useState } from "react"

function Faqs({ q, s, openeDefault }) {

    const [faqOpen, setFaqOpen] = useState(openeDefault)

    const toogle = () => {
        setFaqOpen(!faqOpen)
    }

    return (
        <div className="px-6 py-6 bg-[#FAF8FF] duration-300 transition-all text-left font-inter" onClick={toogle}>

            {/* Problem */}
            <div className={`top-0 left-0 w-full text-xl md:[font-size: 22px] md:[line-height: 28px] font-medium [line-height: 28px] text-left flex justify-start z-10 relative duration-300 transition-all ${faqOpen ? 'text-primary mb-[13px]' : 'text-black mb-0'}`}>
                <span className="w-[232px] md:w-[584px] lg:w-[794px] xl:w-[744px]"> {q} </span>
                <span className={`absolute top-0 right-0 text-[30px] text-center aspect-square h-full max-h-[14px] md:max-h-[auto] duration-300 ${faqOpen ? 'opacity-0' : 'opacity-100'}`}>&#43;</span>
                <span className={`absolute top-0 right-0 text-[30px] text-center aspect-square h-full max-h-[14px] md:max-h-[auto] duration-300 ${faqOpen ? 'opacity-100' : 'opacity-0'}`}>&#8722;</span>
            </div>

            {/* Answer */}
            <div className={`top-0 left-0 w-full text-base font-normal text-[#6F6C90] [line-height: 30px] text-left overflow-hidden duration-300 transition-all ${faqOpen ? 'max-h-screen opacity-100' : 'max-h-1 opacity-0'}`}>
                {s}
            </div>
        </div>
    )
}

export default Faqs