import ServicesCard from "./ServicesCard"
import data from "/src/assets/data.json"

function ServicesSection() {
    
    return (
        <div className="px-5 md:px-10 pt-[60px] lg:pt-20 lg:px-[152px] xl:px-[188px]">
            {data?.services?.map(data => (
                // <p key={data?.title}>{data?.title}</p>
                <ServicesCard key={data?.id} description={data?.description} image={data?.image} title={data?.title} itemsOrder={data?.itemsOrder}/>    
            ))}
        </div>
    )
}

export default ServicesSection