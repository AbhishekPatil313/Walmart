import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import styles

const CalendarInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "13px" }}>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Click to select a date"
        isClearable
      />
      {selectedDate && (
        <div style={{ marginTop: "20px" }}>
        </div>
      )}
    </div>
  );
};

export default CalendarInput;
