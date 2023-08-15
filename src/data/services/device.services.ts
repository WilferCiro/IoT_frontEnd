import { DeviceSchema } from "@/domain/schemas/DeviceSchema";
import { fetchClient } from "../client/fetchClient";

const endpoint = `${process.env.API_DASHBOARD_URL}/devices`;

export async function addDeviceService(
  data: DeviceSchema
): Promise<DeviceSchema | null> {
  return await fetchClient({
    endpoint: endpoint,
    method: "POST",
    body: data,
  });
}

export async function editDeviceService(
  data: Partial<DeviceSchema>
): Promise<DeviceSchema | null> {
  return await fetchClient({
    endpoint: `${endpoint}/${data.id}`,
    method: "PATCH",
    body: { ...data, id: undefined },
  });
}

export async function exportDeviceService(): Promise<null> {
  return await fetchClient({
    endpoint: `${endpoint}/export`,
    method: "POST",
    isFile: true,
    fileName: "devices.xlsx",
  });
}

export async function getDeviceById(
  deviceId: number
): Promise<DeviceSchema | null> {
  return await fetchClient({
    endpoint: `${endpoint}/${deviceId}`,
    method: "GET",
  });
}
