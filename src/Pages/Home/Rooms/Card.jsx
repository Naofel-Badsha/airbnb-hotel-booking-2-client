import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const Card = ({room}) => {
  return (
    <div>
      <Link
        to={`/room/${room?._id}`}
        className="col-span-1 cursor-pointer group"
      >
        <div className="flex flex-col gap-2 w-full border-2 border-orange-600 rounded-xl">
          <div
            className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
          >
            <img
              className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-150 
                transition
              "
              src={room?.image}
              alt="Room"
            />
            <div
              className="
              absolute
              top-3
              right-3
            "
            ></div>
          </div>
          <div className="font-semibold text-neutral-950 text-lg">{room?.location}</div>
          <div className="font-light text-neutral-950">5 nights .</div>
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold text-neutral-950">$ {room?.price}</div>
            <div className="font-light text-neutral-950">night</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
Card.propTypes = {
    room: PropTypes.object,
  }
export default Card;
