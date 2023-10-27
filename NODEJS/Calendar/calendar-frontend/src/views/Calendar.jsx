import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect } from "react";

moment.locale("es");
const localizer = momentLocalizer(moment);

export const MyCalendar = (props) => {
  useEffect(() => {
    console.log(moment().toDate());
    console.log(new Date());
  });
  const myEventsList = [
    {
      id: new Date().getTime(),
      title: "Evento en el trabajo",
      start: moment().toDate(),
      end: moment().add(2, "days").toDate(),
      //   end: moment().add(2, "hours").toDate(),
      bgcolor: "#fafafa",
      notes: "Comprar el pastel",
      user: {
        _id: "123",
        name: "Alexis Matamoros",
      },
    },
  ];
  const messages = {
    allDay: "Todo el día",
    previous: "<",
    next: ">",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "No hay eventos en este rango",
    showMore: (total) => `+ Ver más (${total})`,
  };
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };
  const onDoubleClick = (e) => {
    console.log("Open Modal ", e);
  };
  const onSelectEvent = (e) => {
    console.log("Activar Evento ", e);
  };
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        // onView={onViewChange}
        // onSelectSlot={onSelectSlot}
        selectable={true}
        // view={lastView}
        components={{
          event: CalendarEvent,
        }}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <div>
      <strong> {title} </strong>
      <span>- {user.name} </span>
    </div>
  );
};
