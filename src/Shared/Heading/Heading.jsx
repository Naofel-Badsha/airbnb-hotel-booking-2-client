import PropTypes from 'prop-types'
const Heading = ({ title, subtitle, center }) => {
  return (
    <div>
      <div className={center ? "text-center" : "text-start"}>
        <div className="text-2xl text-neutral-900 font-bold">{title}</div>
        <div className="font-light text-neutral-900 mt-2">{subtitle}</div>
      </div>
    </div>
  );
};
Heading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    center: PropTypes.bool,
  }
export default Heading;
