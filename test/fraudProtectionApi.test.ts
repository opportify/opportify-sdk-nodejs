import { FraudProtectionApi } from '../lib/fraud-intel/apis/FraudProtectionApi';
import { Configuration } from '../lib/fraud-intel/runtime';

describe('FraudProtectionApi', () => {
  const mockFetch = jest.fn();

  beforeEach(() => {
    mockFetch.mockClear();
  });

  it('analyzeFraud() makes a POST request to /fraud/analyze', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      headers: { get: () => 'application/json' },
      json: async () => ({ riskScore: 50, recommendation: 'review' }),
      text: async () => JSON.stringify({ riskScore: 50, recommendation: 'review' }),
      clone: function () { return this; },
    });

    const config = new Configuration({ apiKey: 'test-key', fetchApi: mockFetch as any });
    const api = new FraudProtectionApi(config);

    await api.analyzeFraud({ analyzeFraudRequest: { email: 'user@example.com' } });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, init] = mockFetch.mock.calls[0];
    expect(url).toMatch(/\/fraud\/analyze/);
    expect(init.method).toBe('POST');
  });

  it('analyzeFraud() sends email in request body', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      headers: { get: () => 'application/json' },
      json: async () => ({}),
      text: async () => '{}',
      clone: function () { return this; },
    });

    const config = new Configuration({ apiKey: 'test-key', fetchApi: mockFetch as any });
    const api = new FraudProtectionApi(config);

    await api.analyzeFraud({ analyzeFraudRequest: { email: 'fraud@example.com', userIp: '10.0.0.1' } });

    const [, init] = mockFetch.mock.calls[0];
    const body = JSON.parse(init.body as string);
    expect(body.email).toBe('fraud@example.com');
  });

  it('analyzeFraud() throws on non-2xx response', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 429,
      headers: { get: () => 'application/json' },
      json: async () => ({ message: 'Too Many Requests' }),
      text: async () => JSON.stringify({ message: 'Too Many Requests' }),
      clone: function () { return this; },
    });

    const config = new Configuration({ apiKey: 'test-key', fetchApi: mockFetch as any });
    const api = new FraudProtectionApi(config);

    await expect(
      api.analyzeFraud({ analyzeFraudRequest: { email: 'user@example.com' } })
    ).rejects.toBeDefined();
  });
});
