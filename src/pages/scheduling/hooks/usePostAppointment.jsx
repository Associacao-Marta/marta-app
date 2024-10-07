import { useMutation } from '@tanstack/react-query';

const BASE_URL = process.env.REACT_APP_MARTA_API_URL;

const usePostAppointment = () => {
  const { mutate, data, isLoading, error } = useMutation({
    mutationFn: async ({ category, appointment }) => {
      const response = await fetch(`${BASE_URL}api/v1/appointments/${category}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appointment: {
            attender_name: appointment.attender_name,
            attender_phone_number: appointment.attender_phone_number,
            date: appointment.date,
            time_slot: appointment.time_slot,
            details: appointment.details,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    },
  });

  return { mutate, data, isLoading, error };
};

export default usePostAppointment;
