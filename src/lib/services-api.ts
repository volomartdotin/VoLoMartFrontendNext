import { apiPost } from "@/lib/api-client";

export type ServiceCategory = {
  _id: string;
  name: string;
  image?: string;
  description?: string;
};

type ServiceListData = {
  list?: ServiceCategory[];
};

export async function fetchServiceCategories(): Promise<ServiceCategory[]> {
  const data = await apiPost<ServiceListData>("/api/v1/service/list", {});
  return data.list ?? [];
}
