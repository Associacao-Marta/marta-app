import { useQuery } from '@tanstack/react-query';

const BASE_URL = process.env.REACT_APP_MARTA_API_URL;

const useGetAppointments = (appointmentType) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getAppointments', appointmentType],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}api/v1/appointments/${appointmentType}`);
      if (!response.ok) {
        throw new Error('Network response was not ok', response);
      }
      return response.json();
    },
    enabled: !!appointmentType,
  });

  return { data, isLoading, error };
};

export default useGetAppointments;
