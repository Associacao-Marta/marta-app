import { useQuery } from '@tanstack/react-query';

const useGetAppointments = (appointmentType) => {
  console.log('appointmentType', appointmentType);

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
