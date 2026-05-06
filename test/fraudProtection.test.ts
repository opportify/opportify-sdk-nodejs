import { FraudProtection } from '../src/fraudProtection';
import { FraudProtectionApi } from '../lib/fraud-intel/apis/FraudProtectionApi';

jest.mock('../lib/fraud-intel/apis/FraudProtectionApi');

const MockedFraudProtectionApi = FraudProtectionApi as jest.MockedClass<typeof FraudProtectionApi>;

describe('FraudProtection', () => {
  beforeEach(() => {
    MockedFraudProtectionApi.mockClear();
  });

  it('creates an instance successfully', () => {
    const client = new FraudProtection({ apiKey: 'test-key' });
    expect(client).toBeInstanceOf(FraudProtection);
    expect(MockedFraudProtectionApi).toHaveBeenCalledTimes(1);
  });

  it('analyzeFraud() returns response on success', async () => {
    const fakeResponse = { riskScore: 85, recommendation: 'block' };
    MockedFraudProtectionApi.prototype.analyzeFraud = jest.fn().mockResolvedValue(fakeResponse);

    const client = new FraudProtection({ apiKey: 'test-key' });
    const result = await client.analyzeFraud({
      email: 'user@example.com',
      userIp: '192.0.2.1',
    });

    expect(result).toEqual(fakeResponse);
    expect(MockedFraudProtectionApi.prototype.analyzeFraud).toHaveBeenCalledWith({
      analyzeFraudRequest: { email: 'user@example.com', userIp: '192.0.2.1' },
    });
  });

  it('analyzeFraud() passes all optional fields', async () => {
    MockedFraudProtectionApi.prototype.analyzeFraud = jest.fn().mockResolvedValue({});

    const client = new FraudProtection({ apiKey: 'test-key' });
    await client.analyzeFraud({
      email: 'user@example.com',
      userIp: '192.0.2.1',
      phone1: '+15550001234',
      phone2: '+15550005678',
      firstName: 'John',
    });

    expect(MockedFraudProtectionApi.prototype.analyzeFraud).toHaveBeenCalledWith({
      analyzeFraudRequest: {
        email: 'user@example.com',
        userIp: '192.0.2.1',
        phone1: '+15550001234',
        phone2: '+15550005678',
        firstName: 'John',
      },
    });
  });

  it('analyzeFraud() works with only userIp (email is optional)', async () => {
    MockedFraudProtectionApi.prototype.analyzeFraud = jest.fn().mockResolvedValue({ score: 10 });

    const client = new FraudProtection({ apiKey: 'test-key' });
    const result = await client.analyzeFraud({ userIp: '10.0.0.1' });

    expect(result).toEqual({ score: 10 });
    expect(MockedFraudProtectionApi.prototype.analyzeFraud).toHaveBeenCalledWith({
      analyzeFraudRequest: { userIp: '10.0.0.1' },
    });
  });

  it('analyzeFraud() throws on API error', async () => {
    MockedFraudProtectionApi.prototype.analyzeFraud = jest.fn().mockRejectedValue(new Error('API error'));

    const client = new FraudProtection({ apiKey: 'test-key' });
    await expect(client.analyzeFraud({ email: 'bad@example.com' })).rejects.toMatchObject({ errorCode: 'REQUEST_ERROR', errorMessage: 'API error' });
  });
});
