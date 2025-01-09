import React from "react";
import "./Calendar.css";
import { bookingCalendarOptions } from "../../utils/constants";
("../../utils/constants");

function Calendar() {
  //CalendarOptions to filter to certain calendar when different buttons are clicked
  return (
    <div className="calendar">
      <iframe
        className="calendar__content"
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3l6mBnpsy_-h10nvyq9L98j15IoN1AkF7nLt0Q7wUtfbWomYRrt-fmKBEvTQS7_V_-XoK071kb?gv=true"
        // style={{ border: 0 }}
        // width="100%"
        // height="600"
        // frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Calendar;
