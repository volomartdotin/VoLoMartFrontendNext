import { getApiBaseUrl } from "@/lib/api-config";

export type ServiceCategory = {
  _id: string;
  name: string;
  image?: string;
  description?: string;
};

type ServiceListResponse = {
  status?: number;
  code?: string;
  message?: string;
  data?: {
    list?: ServiceCategory[];
  };
};

export async function fetchServiceCategories(): Promise<ServiceCategory[]> {
  const res = await fetch(`${getApiBaseUrl()}/api/v1/service/list`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  });

  if (!res.ok) {
    throw new Error(`Failed to load services (${res.status})`);
  }

  const json = (await res.json()) as ServiceListResponse;

  if (json.code !== "OK" || !json.data?.list) {
    throw new Error(json.message ?? "Failed to load services");
  }

  return json.data.list;
}
