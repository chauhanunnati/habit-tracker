import React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { defaultColour } from "@/colors";

function Calendar() {
  return (
    <div className="flex mx-4 flex-col gap-6 justify-center items-center mt-10">
      <div className="g-state so rounded-xl p-5 pt-7">
        <DateCalendar
          sx={{
            "& .MuiPickersDay-root": {
              "&.Mui-selected": {
                backgroundColor: defaultColour.default,
              },
            },
            "& .MuiPickersYear-yearButton.Mui-selected": {
              backgroundColor: defaultColour.default,
            },
          }}
        />
      </div>
    </div>
  );
}

export default Calendar;
