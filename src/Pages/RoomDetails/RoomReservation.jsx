import PropTypes from "prop-types";
import Button from "../../Shared/Button/Button";
import { useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const RoomReservation = ({ room }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl text-neutral-900 font-semibold">
          $ {room?.price}
        </div>
        <div className="font-light text-neutral-900">night</div>
      </div>
      <hr />
      <div className="flex justify-center text-xl">
        {/* Calender */}
        <DateRange
          // showDateDisplay={false}
          rangeColors={["#f6536d"]}
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div className="text-neutral-900">Total</div>
        <div className="text-neutral-900">${room?.price}</div>
      </div>
    </div>
  );
};

RoomReservation.propTypes = {
  room: PropTypes.object,
};
export default RoomReservation;
