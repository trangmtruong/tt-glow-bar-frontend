import React, { useState } from "react";
import "./Calendar.css";
import { services } from "../../utils/constants";

function Calendar({ handleSelectedCalendarSrc }) {
  //CalendarOptions to filter to certain calendar when different buttons are clicked
  return (
    <div className="calendar">
      {/* insert bookingCalendarOptions */}
      <iframe
        className="calendar__content"
        src={handleSelectedCalendarSrc}
        // style={{ border: 0 }}
        // width="100%"
        // height="600"
        // frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Calendar;
