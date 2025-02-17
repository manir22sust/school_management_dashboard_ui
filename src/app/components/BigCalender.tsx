import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      onView={handleOnChangeView}
      style={{ height: "98%" }}
      min={new Date(2025, 0, 1, 8, 0)} // Start time: 8:00 AM
      max={new Date(2025, 0, 1, 17, 0)} // End time: 5:00 PM
      date={new Date()} // Keeps the current week visible
      defaultView={Views.WORK_WEEK} // Defaults to the work week view
    />
  );
};

export default BigCalendar;
