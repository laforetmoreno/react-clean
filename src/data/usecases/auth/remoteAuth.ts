import { HttpPostClient } from '../../interfaces';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(): Promise<void> {
    const { httpPostClient, url } = this;
    await httpPostClient.post(url);
  }
}
