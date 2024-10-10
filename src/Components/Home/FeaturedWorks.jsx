import PropTypes from "prop-types";

export default function FeaturedWorks({ title, year, category, description, imgName }) {
  return (
    <>
      <ul className="py-8 flex gap-4">
        <img
          src={imgName}
          alt="feature image"
          className="h-44 w-80 object-cover rounded-lg"
        />
        <div className="flex flex-col gap-6">

          <h2 className="text-2xl font-bold inset-0">
            {title}
          </h2>
          <div className="flex items-center gap-2">
            <span className="bg-slate-800 text-white px-3 py-0.5 rounded-2xl font-bold">
              {year}
            </span>
            <span className="text-gray-400 text-xl mx-4">
              {category}
            </span>

          </div>
          <p className="">
            {description}
          </p>
        </div>

      </ul>
      <hr />
    </>
  );
}

FeaturedWorks.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgName: PropTypes.node.isRequired,
};
