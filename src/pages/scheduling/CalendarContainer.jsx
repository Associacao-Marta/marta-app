import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import useGetAppointments from './hooks/useGetAppointments';

const CalendarContainer = (props) => {
  const { form, handleChangeForm } = props;
  const [availableDates, setAvailableDates] = useState([]);
  const { data: datesResponse } = useGetAppointments(form.type);

  useEffect(() => {
    if (form.type && form.date) {
      handleChangeForm('date', null);
    }
  }, [form.type]);

  useEffect(() => {
    setAvailableDates(getAvailableDates(datesResponse));
  }, [datesResponse]);

  const isAvailableDate = (date) =>
    availableDates?.some((availableDate) => availableDate.toDateString() === date.toDateString());

  const filterAvailableTime = (selectedDate) => {
    const dateStr = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD
    const timeStr = selectedDate.toTimeString().split(' ')[0].slice(0, 5); // HH:mm

    const dateEntry = datesResponse?.find((entry) => entry.date === dateStr);
    if (dateEntry) {
      return dateEntry.timeSlots.includes(timeStr);
    }

    return false;
  };

  const handleChangeDate = (selectedDate) => {
    if (!form.date) {
      const earliestDate = getEarliestTimeSlot(selectedDate, datesResponse);
      handleChangeForm('date', earliestDate);
    } else {
      handleChangeForm('date', selectedDate);
    }
  };

  return (
    <>
      <Grid container className="dateForm">
        <h3 className="subtitulo">Quando gostaria de ser atendida?</h3>
      </Grid>
      <div>
        <Grid container className="calendarioContainer">
          <DatePicker
            disabled={!form.type}
            placeholderText="Escolha uma data"
            locale={ptBR}
            selected={form.date}
            dateFormat="dd/MM/yyyy - HH:mm"
            onChange={handleChangeDate}
            includeDateIntervals={[
              {
                start: new Date(),
                end: addDays(new Date(), 60),
              },
            ]}
            filterDate={(date) => isAvailableDate(date)}
            shouldCloseOnSelect
            showTimeSelect
            timeIntervals={60}
            filterTime={filterAvailableTime}
            cursor="pointer"
            className={!form.type ? 'datepicker-disabled' : 'datepicker-enabled'}
            withPortal
          />
        </Grid>
      </div>
    </>
  );
};

export default CalendarContainer;

const parseDateToBrasiliaTime = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  const timezoneOffset = +3;

  utcDate.setHours(utcDate.getHours() + timezoneOffset);
  return utcDate;
};

const getAvailableDates = (datesResponse) => {
  return datesResponse
    ?.filter((item) => item.timeSlots && item.timeSlots.length > 0)
    ?.map((item) => new Date(parseDateToBrasiliaTime(item.date)));
};

const getEarliestTimeSlot = (selectedDate, datesResponse) => {
  const dateStr = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD
  const dateEntry = datesResponse?.find((entry) => entry.date === dateStr);

  if (dateEntry && dateEntry.timeSlots.length > 0) {
    const earliestTime = dateEntry.timeSlots[0];
    const [hours, minutes] = earliestTime.split(':').map(Number);

    const updatedDate = new Date(selectedDate);
    updatedDate.setHours(hours);
    updatedDate.setMinutes(minutes);
    return updatedDate;
  }

  return selectedDate;
};
