import PropTypes from "prop-types";


export default function RecentPosts({ title, date, category, description }) {
  return (

    <div className="bg-white flex flex-col gap-6 p-6 my-5 rounded  mr-6">
      <h2 className="text-3xl font-bold ">{title}</h2>
      <p className="text-gray-800">
        <span className="mr-4">{date}</span> |
        <span className="ml-4">{category}</span>
      </p>
      <p className="text-gray-800">
        {description}
      </p>
    </div>
  );
}

RecentPosts.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
