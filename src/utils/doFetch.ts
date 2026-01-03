export async function doFetch<T>(
  endpoint: string,
  // eslint-disable-next-line unicorn/prevent-abbreviations
  params?: Record<string, string | number> | string[][],
  {
    body,
    signal,
    headers,
    ...otherConfigs
  }: {
    body?: Record<string, string> | string[][];
    signal?: AbortSignal;
  } & Omit<RequestInit, "body"> = {}
): Promise<T> {
  return fetch(
    (endpoint.startsWith("/")
      ? import.meta.env.VITE_API_URL + endpoint
      : endpoint) +
      (params ? "?" : "") +
      new URLSearchParams(params as Record<string, string>).toString(),
    {
      method: body ? "POST" : "GET",
      ...otherConfigs,
      headers: { "Content-Type": "application/json", ...headers },
      signal
    }
  ).then(async (response) => {
    if (response.ok) {
      return (await response.json()) as Promise<T>;
    } else {
      const errorMessage = await response.text();
      throw Promise.reject(new Error(errorMessage));
    }
  });
}
