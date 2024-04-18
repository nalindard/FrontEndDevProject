/* eslint-disable react/prop-types */
function ServicesList({ title, links }) {

    return (
        <div className="*:font-inter lg:mr-5">
            <h4 className="text-[21px] font-semibold [line-height: 25.41px] text-left md:pb-3">{title}</h4>

            <ul className="mt-3">

                {links?.map(link => (
                    <li className="text-sm font-medium [line-height: 16.94px] text-left mb-3" key={link?.title}> <a href={link?.link}>{link?.title}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default ServicesList