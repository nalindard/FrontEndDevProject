/* eslint-disable react/prop-types */
import { useState } from "react"

function Faqs({ q, s }) {

    const [faqOpen, setFaqOpen] = useState(false)

    const toogle = () => {
        setFaqOpen(!faqOpen)
    }

    return (
        <div className="px-6 py-6 bg-[#FAF8FF] duration-300 transition-all text-left" onClick={toogle}>

            {/* Problem */}
            <div className={`top-0 left-0 w-full text-xl md:[font-size: 22px] md:[line-height: 28px] font-medium [line-height: 28px] text-left flex justify-between pb-[13px] z-10 ${faqOpen ? 'text-primary' : 'text-black'}`}> <span className="w-[232px] md:w-[584px] lg:w-[794px] xl:w-[744px]"> {q} </span> <span className="text-2xl text-center">{faqOpen ? '-' : '+'}</span></div>

            {/* Answer */}
            <div className={`top-0 left-0 w-full text-base font-normal text-[#6F6C90] [line-height: 30px] text-left overflow-hidden duration-300 transition-all ${faqOpen ? 'max-h-screen opacity-100' : 'max-h-1 opacity-0'}`}>
                {s}
            </div>
        </div>
    )
}

export default Faqs