import data from "/src/assets/data.json";
import ServicesList from "../ServicesList.jsx";

function Footer() {
  return (
    <footer className="flex w-full flex-wrap justify-center bg-primary px-5 pb-5 pt-10 md:px-10 md:pt-[28.89px] lg:px-[60px] xl:px-20">
      <div className="flex w-full flex-wrap lg:flex-nowrap lg:justify-between">
        {/* Logo & Description */}
        <span className="md:w-full md:pb-[60px] lg:mr-28 lg:w-auto xl:mr-[345px]">
          <img
            loading="lazy"
            src="/images/White-Logo.webp"
            className="h-[36.11px]"
            alt="footer logo"
          />
          <p className="[line-height: 19.2px] pt-5 text-left font-lato text-base font-normal md:w-[413px] lg:w-[438px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </span>

        {/* Technologies */}
        <span className="flex flex-col font-inter md:flex-row">
          <span className="mt-[60px] md:mr-[79px] md:mt-0 lg:mr-5 lg:min-w-[255px] xl:mr-32 xl:min-w-[197px]">
            <ServicesList
              title={data.footer?.servicesList[0]?.title}
              links={data.footer?.servicesList[0]?.links}
            />
          </span>

          {/* Services */}
          <span className="mt-10 md:mt-0">
            <ServicesList
              title={data.footer?.servicesList[1]?.title}
              links={data.footer?.servicesList[1]?.links}
            />
          </span>
        </span>
      </div>

      {/* Terms & Copyrights */}
      <div className="w-full *:[line-height:16.94px] mt-10 flex justify-center border-t border-white px-[39px] pt-2 font-inter *:text-[14px] *:font-medium md:w-[630px]">
        <span className="mr-4">Privacy Policy</span>
        <span className="h-full w-[1px] bg-white"></span>
        <span className="ml-4">Terms & Conditions</span>
      </div>
    </footer>
  );
}

export default Footer;
