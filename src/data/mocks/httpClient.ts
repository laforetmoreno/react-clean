import { HttpPostClient } from 'data/interfaces/http/httpPostClient';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  async post(url: string): Promise<void> {
    this.url = url;

    return Promise.resolve();
  }
}
