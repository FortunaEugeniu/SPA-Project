import PropTypes from "prop-types";


// const classes = 
export default function RoundedPhoto({ photoName, photoAlt }) {
  return (
    <div>
      <img className={"block h-60 w-60 object-cover rounded-full"} src={photoName} alt={photoAlt} />
    </div>
  );
}

RoundedPhoto.propTypes = {
  photoName: PropTypes.string.isRequired,
  photoAlt: PropTypes.string.isRequired,
};
