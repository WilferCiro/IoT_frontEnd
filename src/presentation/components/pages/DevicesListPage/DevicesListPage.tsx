"use client";

import TableCrud from "../../organisms/TableCrud/TableCrud";
import { useMemo } from "react";
import { useMutation } from "react-query";
import { DeviceSchema } from "@/domain/schemas/DeviceSchema";
import { getTableDeviceDefinition } from "@/data/tables/device.table";
import {
  addDeviceService,
  editDeviceService,
  exportDeviceService,
} from "@/data/services/device.services";
import { getDeviceFormDefinition } from "@/data/forms/device.form";
import PageTitle from "../../atoms/PageTitle/PageTitle";

const DevicesListPage = () => {
  const fieldsFormAdd = useMemo(() => getDeviceFormDefinition(), []);
  const columns = useMemo(() => getTableDeviceDefinition(), []);

  const mutationAdd = useMutation({
    mutationFn: addDeviceService,
  });
  const mutationEdit = useMutation({
    mutationFn: editDeviceService,
  });
  const mutationExport = useMutation({
    mutationFn: exportDeviceService,
  });

  const onDisable = async (original: DeviceSchema): Promise<boolean> => {
    const res = await mutationEdit.mutateAsync({
      id: original.id,
      active: !original.active,
    });
    return res !== null;
  };

  const onAdd = async (data: DeviceSchema): Promise<boolean> => {
    const res = await mutationAdd.mutateAsync(data);
    return res !== null;
  };

  const onEdit = async (
    data: DeviceSchema,
    original: DeviceSchema
  ): Promise<boolean> => {
    const res = await mutationEdit.mutateAsync({ id: original.id, ...data });
    return res !== null;
  };

  const onExport = async (): Promise<boolean> => {
    const res = await mutationExport.mutateAsync();
    return res !== null;
  };
  return (
    <>
      <PageTitle
        title="Dispositivos"
        subtitle="Revisa todos los dispositivos integrados en el sistema"
      />
      <TableCrud<DeviceSchema>
        columns={columns}
        endpoint="devices"
        actions={{
          onAdd: onAdd,
          onEdit: onEdit,
          onDisable: onDisable,
          onExport: onExport,
        }}
        fieldsFormAdd={fieldsFormAdd}
        fieldsFormEdit={fieldsFormAdd}
      />
    </>
  );
};

export default DevicesListPage;
