import { HttpPostClient, HttpPostParams } from 'data/interfaces/http/httpPostClient';

export type BodyType = {

}
export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  body?: BodyType

  async post(params: HttpPostParams): Promise<void> {
    const { url, body } = params;
    this.url = url;
    this.body = body;

    return Promise.resolve();
  }
}
