import ServicesCard from "./ServicesCard";
import data from "/src/assets/data.json";

function ServicesSection() {
  return (
    <div className="px-5 pt-[60px] md:px-10 lg:px-[152px] lg:pt-20 xl:px-[188px]">
      {data?.services?.map((data) => (
        <ServicesCard
          key={data?.id}
          description={data?.description}
          image={data?.image}
          title={data?.title}
          itemsOrder={data?.itemsOrder}
        />
      ))}
    </div>
  );
}

export default ServicesSection;
