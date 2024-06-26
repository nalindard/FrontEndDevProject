/* eslint-disable react/prop-types */
function ServicesList({ title, links }) {
  return (
    <div className="*:font-inter lg:mr-5 xl:mr-0">
      {/* Service Title */}
      <p className="[line-height: 25.41px] text-left text-[21px] font-semibold md:pb-3">
        {title}
      </p>

      {/* Services List */}
      <ul className="mt-3">
        {links?.map((link) => (
          <li
            className="[line-height: 16.94px] mb-3 text-left text-sm font-medium"
            key={link?.title}
          >
            {" "}
            <a href={link?.link}>{link?.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesList;
