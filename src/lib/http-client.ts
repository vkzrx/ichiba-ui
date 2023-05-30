import { config } from '~/lib/config';

type HttpClientConfig = {
  baseURL: string;
};

class HttpClient {
  private readonly baseURL: string;

  constructor(config: HttpClientConfig) {
    this.baseURL = config.baseURL;
  }

  async get<T>(url: string, config?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseURL}${url}`, config);
    if (!response.ok) {
      throw new Error(`GET: Request to ${url} failed`);
    }
    return response.json();
  }

  async post<TResponse, TData = object>(url: string, data: TData): Promise<TResponse> {
    const response = await fetch(`${this.baseURL}${url}`, {
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`POST: Request to ${url} with data ${JSON.stringify(data)} failed`);
    }
    return response.json();
  }
}

export const httpClient = new HttpClient({
  baseURL: config.apiBaseURL,
});
