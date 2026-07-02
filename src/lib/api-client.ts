import { getApiUrl } from "@/lib/api-config";

type ApiEnvelope<T> = {
  status?: number;
  code?: string;
  message?: string;
  data?: T;
};

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(getApiUrl(path), {
    ...init,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`API request failed (${res.status}): ${path}`);
  }

  const json = (await res.json()) as ApiEnvelope<T>;
  if (json.code && json.code !== "OK") {
    throw new Error(json.message ?? `API request failed: ${path}`);
  }

  if (json.data === undefined) {
    throw new Error(json.message ?? `API response missing data: ${path}`);
  }

  return json.data;
}

export async function apiPost<T>(
  path: string,
  body: unknown = {},
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(getApiUrl(path), {
    ...init,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`API request failed (${res.status}): ${path}`);
  }

  const json = (await res.json()) as ApiEnvelope<T>;
  if (json.code && json.code !== "OK") {
    throw new Error(json.message ?? `API request failed: ${path}`);
  }

  if (json.data === undefined) {
    throw new Error(json.message ?? `API response missing data: ${path}`);
  }

  return json.data;
}
