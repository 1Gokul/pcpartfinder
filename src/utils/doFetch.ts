type JsonBody = Record<string, unknown> | unknown[];

export async function doFetch<T>(
  endpoint: string,
  params?: Record<string, string | number | string[]> | string[][],
  {
    body,
    signal,
    headers,
    ...otherConfigs
  }: {
    body?: JsonBody;
    signal?: AbortSignal;
  } & Omit<RequestInit, "body"> = {},
): Promise<T> {
  return fetch(
    (endpoint.startsWith("/") ? import.meta.env.VITE_API_URL + endpoint : endpoint) +
      (params ? "?" : "") +
      new URLSearchParams(params as Record<string, string>).toString(),
    {
      method: body ? "POST" : "GET",
      ...otherConfigs,
      body: body === undefined ? undefined : JSON.stringify(body),
      headers: { "Content-Type": "application/json", ...headers },
      signal,
    },
  ).then(async (response) => {
    if (response.ok) {
      return (await response.json()) as Promise<T>;
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  });
}
