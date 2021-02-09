import faker from 'faker';
import { AuthenticationParams } from '@domain/usecases/authentication';

export const mockAuth = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
