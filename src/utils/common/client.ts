export async function client<T>(
  endpoint: string,
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
      ? process.env.NEXT_PUBLIC_API_BASE_URL + endpoint
      : endpoint) +
      (params ? "?" : "") +
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new URLSearchParams(params as any),
    // https://github.com/microsoft/TypeScript/issues/32951
    {
      method: body ? "POST" : "GET",
      ...otherConfigs,
      headers: { "Content-Type": "application/json", ...headers },
      signal
    }
  ).then(async (response) => {
    if (response.ok) {
      return await response.json();
    } else {
      const errorMessage = await response.text();
      return Promise.reject(new Error(errorMessage));
    }
  });
}
