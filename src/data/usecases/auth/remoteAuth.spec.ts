import faker from 'faker';

import { mockAuth } from '../../../domain/mocks/auth';
import { RemoteAuthentication } from './remoteAuth';
import { HttpPostClientSpy } from '../../mocks/HttpPostClientSpy';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  test('should call httpPostClient with correct url', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuth());

    expect(httpPostClientSpy.url).toBe(url);
  });

  test('should call httpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authParams = mockAuth();
    await sut.auth(authParams);

    expect(httpPostClientSpy.body).toEqual(authParams);
  });
});
