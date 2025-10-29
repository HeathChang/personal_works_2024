import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";

import { AppointmentDateMap } from "../types";
import { getMonthYearDetails, getNewMonthYear } from "./monthYear";

import { useLoginData } from "@/auth/AuthContext";
import { axiosInstance } from "@/axiosInstance";
import { queryKeys } from "@/react-query/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";

async function getAppointments(
  year: string,
  month: string
): Promise<AppointmentDateMap> {
  const { data } = await axiosInstance.get(`/appointments/${year}/${month}`);
  return data;
}


export function useAppointments() {
  const queryClient = useQueryClient();
  const [monthYear, setMonthYear] = useState(getMonthYearDetails(dayjs()));
  const [showAll, setShowAll] = useState(false);
  const { userId } = useLoginData();

  const updateMonthYear = useCallback((monthIncrement: number): void => {
    setMonthYear((prevData) => getNewMonthYear(prevData, monthIncrement));
  }, []);

  const { data: appointments = {} as AppointmentDateMap } = useQuery({
    queryKey: [queryKeys.appointments, monthYear.year, monthYear.month],
    queryFn: () => getAppointments(monthYear.year, monthYear.month),
  })

  useEffect(() => {
    const nextMonthYear = getNewMonthYear(monthYear, 1);
    queryClient.prefetchQuery({
      queryKey: [queryKeys.appointments, nextMonthYear.year, nextMonthYear.month],
      queryFn: () => getAppointments(nextMonthYear.year, nextMonthYear.month),
    });
  }, [queryClient, monthYear]);

  return { appointments, monthYear, updateMonthYear, showAll, setShowAll };
}