export async function client(
  endpoint: string,
  params?: Record<string, string | number> | string[][],
  {
    body,
    headers,
    ...otherConfigs
  }: { body?: Record<string, string> | string[][] } & Omit<
    RequestInit,
    "body"
  > = {}
) {
  return fetch(
    (endpoint.startsWith("/")
      ? process.env.NEXT_PUBLIC_API_BASE_URL + endpoint
      : endpoint) +
      (params ? "?" : "") +
      new URLSearchParams(params),
    {
      method: body ? "POST" : "GET",
      ...otherConfigs,
      headers: { "Content-Type": "application/json", ...headers }
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
