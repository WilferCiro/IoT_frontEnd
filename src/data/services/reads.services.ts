import ReadsSchema from "@/domain/schemas/ReadsSchema";
import { fetchClient } from "../client/fetchClient";

const endpoint = `${process.env.API_DASHBOARD_URL}/graphReads`;

export async function getReadsService(): Promise<ReadsSchema | null> {
  return await fetchClient({
    endpoint: endpoint,
    method: "GET",
  });
}
