"use client";
import getFullDate from "@/domain/adapters/getFullDate";
import { DeviceSchema } from "@/domain/schemas/DeviceSchema";
import BadgeActive from "@/presentation/components/atoms/BadgeActive/BadgeActive";
import { Column } from "react-table";

export const getTableDeviceDefinition = (): Column<DeviceSchema>[] => {
  return [
    {
      Header: "Activo",
      accessor: "active",
      Cell: ({ cell: { value } }) => {
        return <BadgeActive active={value} />;
      },
    },
    {
      Header: "Nombre",
      accessor: "name",
    },
    {
      Header: "Tipo",
      accessor: "type",
    },
    {
      Header: "Creado en",
      accessor: "createdAt",
      Cell: ({ cell: { value } }) => {
        return <>{getFullDate(value)}</>;
      },
    },
    {
      Header: "Actualizado en",
      accessor: "updatedAt",
      Cell: ({ cell: { value } }) => {
        return <>{getFullDate(value)}</>;
      },
    },
  ];
};
