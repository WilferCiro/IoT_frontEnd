"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

import styles from "./styles.module.css";
import { Alert, Card, Skeleton, Space } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import { useQuery } from "react-query";
import { getReadsService } from "@/data/services/reads.services";
import { useMemo } from "react";
import dayjs from "dayjs";
import WaterAlert from "../../molecules/Alerts/WaterAlert/WaterAlert";
import HumidityAlert from "../../molecules/Alerts/HumidityAlert/HumidityAlert";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Humedad",
    },
  },
  maintainAspectRatio: false,
};
export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Nivel del agua",
    },
  },
  scales: {
    y: {
      suggestedMax: 100,
    },
  },
  maintainAspectRatio: false,
};

const ReadsPage = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [`reads`],
    queryFn: () => getReadsService(),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 1,
    refetchInterval: 1 * 60 * 1000,
  });

  const dataWater = useMemo(() => {
    return {
      labels: ["Nivel de agua"],
      datasets: [
        {
          label: "Nivel de agua",
          data: [data?.water || 0],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  }, [data?.water]);

  const dataSensors = useMemo(() => {
    return {
      labels: (data?.humidity || []).map(({ date }) =>
        dayjs(date).format("YYYY-MM-DD HH:ss")
      ),
      datasets: [
        {
          label: "Sensor 1",
          data: (data?.humidity || []).map(({ sensor1 }) => sensor1),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "sensor 2",
          data: (data?.humidity || []).map(({ sensor2 }) => sensor2),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  }, [data?.humidity]);

  if (isError) {
    return <>ERROR</>;
  }

  return (
    <div className={styles.general_container}>
      <div className={styles.alerts_container}>
        {isLoading ? (
          <>
            <Skeleton height={"100px"} mb="xl" />
            <Skeleton height={"100px"} mb="xl" />
          </>
        ) : (
          <>
            <HumidityAlert
              value1={data?.humidity[data?.humidity.length - 1]?.sensor1 || 0}
              value2={data?.humidity[data?.humidity.length - 1]?.sensor2 || 0}
            />
            <WaterAlert value={data?.water || 0} />
          </>
        )}
      </div>
      <Space h="md" />
      <div className={styles.container}>
        <div>
          <Card withBorder style={{ height: "100%", minHeight: "300px" }}>
            {isLoading ? (
              <Skeleton height={"100%"} mb="xl" />
            ) : (
              <Bar options={options2} data={dataWater} />
            )}
          </Card>
        </div>
        <div>
          <Card withBorder style={{ height: "100%", minHeight: "500px" }}>
            {isLoading ? (
              <Skeleton height={"100%"} mb="xl" />
            ) : (
              <Line options={options} data={dataSensors} />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReadsPage;
