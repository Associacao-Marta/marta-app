import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import { addDays, getDay } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import dates from './utils/data/availableDates';

const parseDateToBrasiliaTime = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  const timezoneOffset = +3;

  utcDate.setHours(utcDate.getHours() + timezoneOffset);
  return utcDate;
};

const getAvailableDates = () => {
  return dates
    .filter((item) => item.timeSlots && item.timeSlots.length > 0)
    .map((item) => new Date(parseDateToBrasiliaTime(item.date)));
};

const CalendarContainer = (props) => {
  const { form, handleChangeForm } = props;
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    setAvailableDates(getAvailableDates());
  }, []);

  const isAvailableDate = (date) => {
    const day = getDay(date);
    const isWeekDay = day !== 0 && day !== 6;
    return (
      isWeekDay &&
      availableDates.some((availableDate) => availableDate.toDateString() === date.toDateString())
    );
  };

  const filterAvailableTime = (selectedDate) => {
    const dateStr = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD
    const timeStr = selectedDate.toTimeString().split(' ')[0].slice(0, 5); // HH:mm

    const dateEntry = dates.find((entry) => entry.date === dateStr);
    if (dateEntry) {
      return dateEntry.timeSlots.includes(timeStr);
    }

    return false;
  };

  return (
    <>
      <Grid container className="dateForm">
        <h3 className="subtitulo">Quando gostaria de ser atendida?</h3>
      </Grid>
      <div>
        <Grid container className="calendarioContainer">
          <DatePicker
            placeholderText="Escolha uma data"
            locale={ptBR}
            selected={form.date}
            dateFormat="dd/MM/yyyy - HH:mm"
            onChange={(selectedDate) => handleChangeForm('date', selectedDate)}
            includeDateIntervals={[
              {
                start: new Date(),
                end: addDays(new Date(), 60),
              },
            ]}
            filterDate={(date) => isAvailableDate(date)}
            shouldCloseOnSelect
            calendarContainer={CalendarPopper}
            showTimeSelect
            timeIntervals={60}
            filterTime={filterAvailableTime}
          />
        </Grid>
      </div>
    </>
  );
};

const CalendarPopper = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default CalendarContainer;
