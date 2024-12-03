import React from "react";
import "../BookService/BookService.css";

function BookService() {
  return (
    <div>
      <h2 className="bookservice__title">Select Service:</h2>
      <ul className="bookservice__list">
        <li className="bookservice__type_fullsets">
          Lash Extensions/ Fullsets
          <button>Select</button>
        </li>
        <li className="bookservice__type_fills">
          Lash Fills
          <button>Select</button>
        </li>
        <li className="bookservice__type_fills">
          Lash Lift
          <button>Select</button>
        </li>
        <li className="bookservice__type_browlam">
          Brow Lamination
          <button>Select</button>
        </li>
        <li className="bookservice__type_waxing">
          Hair Removal (Waxing)
          <button>Select</button>
        </li>
      </ul>
    </div>
  );
}

export default BookService;
