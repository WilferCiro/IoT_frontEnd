import { FormFieldSchema } from "@/domain/schemas/FormFieldSchema";

export const getDeviceFormDefinition = (): FormFieldSchema[] => {
  const fields: FormFieldSchema[] = [
    {
      type: "text",
      name: "name",
      label: "Nombre descriptivo",
      placeholder: "Nombre descriptivo",
      required: true,
    },
    {
      type: "text",
      name: "type",
      label: "Tipo",
      placeholder: "Tipo de dispositivo",
      required: true,
    },
    {
      type: "checkbox",
      name: "active",
      label: "¿Es activo?",
      initialValue: true,
    },
  ];

  return fields;
};
