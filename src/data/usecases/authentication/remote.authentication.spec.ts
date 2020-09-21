class RemoteAuthentication {
  constructor(private readonly url: string);

  async auth(): Promise<void> {
    return Promise.resolve();
  }
}

describe('RemoteAuthentication', () => {
  test('should call httpClient with correct url', async () => {
    const sut = new RemoteAuthentication(url);
    await sut.auth();

    expect(httpClient).toBe(url);
  });
});
