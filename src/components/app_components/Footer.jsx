import data from "/src/assets/data.json"
import ServicesList from "../ServicesList.jsx";

function Footer() {

    return (
        <footer className="flex flex-wrap justify-center bg-primary w-full px-5 md:px-10 lg:px-[60px] xl:px-20 pt-10 md:pt-[28.89px] pb-5">
            <div className="flex flex-wrap lg:flex-nowrap w-full lg:justify-between">
                {/* Logo & Description */}
                <span className="md:w-full lg:w-auto lg:mr-28 xl:mr-[345px] md:pb-[60px]">
                    <img loading='lazy' src="./src/assets/White Logo.png" className="h-[36.11px]" alt="footer logo" />
                    <p className="pt-5 text-base font-normal font-lato [line-height: 19.2px] md:w-[413px] lg:w-[438px] text-left">
                        Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
                    </p>
                </span>

                {/* Technologies */}
                <span className="flex flex-col md:flex-row font-inter">
                    <span className="mt-[60px] md:mt-0 md:mr-[79px] lg:min-w-[255px] lg:mr-5 xl:min-w-[197px] xl:mr-32">
                        <ServicesList title={data.footer?.servicesList[0]?.title} links={data.footer?.servicesList[0]?.links} />
                    </span>

                    {/* Services */}
                    <span className="mt-10 md:mt-0">
                        <ServicesList title={data.footer?.servicesList[1]?.title} links={data.footer?.servicesList[1]?.links} />
                    </span>
                </span>
            </div>

            {/* Terms & Copyrights */}
            <div className="w-ful md:w-[630px] border-t border-white flex justify-center mt-10 pt-2 px-[39px] *:text-sm *:font-medium font-inter [line-height: 16.94px]">
                <span className="px-2">Privacy Policy</span>
                <span className="h-full w-[1px] bg-white mx-[0.5px]"></span>
                <span className="px-2">Terms & Conditions</span>
            </div>
        </footer>
    )
}

export default Footer