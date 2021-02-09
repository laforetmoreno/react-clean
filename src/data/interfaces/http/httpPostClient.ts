import { BodyType } from '@data/mocks/HttpPostClientSpy';

export type HttpPostParams = {
  url: string
  body?: BodyType
}

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<void>;
}
