import faker from 'faker';
import { AuthenticationParams } from '../usecases/authentication';

export const mockAuth = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
