import { AuthenticationParams } from '@domain/usecases/authentication';
import { HttpPostClient } from '@data/interfaces/http/httpPostClient';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const { httpPostClient, url } = this;
    await httpPostClient.post({ url, body: params });
  }
}
