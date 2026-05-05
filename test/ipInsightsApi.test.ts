import { IPInsightsApi } from '../lib/v1/apis/IPInsightsApi';
import { Configuration } from '../lib/v1/runtime';

describe('IPInsightsApi', () => {
  const mockFetch = jest.fn();

  beforeEach(() => {
    mockFetch.mockClear();
  });

  it('analyzeIp() makes a POST request to /ip/analyze', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      headers: { get: () => 'application/json' },
      json: async () => ({ ip: '8.8.8.8', riskScore: 5 }),
      text: async () => JSON.stringify({ ip: '8.8.8.8', riskScore: 5 }),
      clone: function () { return this; },
    });

    const config = new Configuration({ apiKey: 'test-key', fetchApi: mockFetch as any });
    const api = new IPInsightsApi(config);

    await api.analyzeIp({ analyzeIpRequest: { ip: '8.8.8.8' } });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, init] = mockFetch.mock.calls[0];
    expect(url).toMatch(/\/ip\/analyze/);
    expect(init.method).toBe('POST');
  });

  it('analyzeIp() sends ip in request body', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      headers: { get: () => 'application/json' },
      json: async () => ({}),
      text: async () => '{}',
      clone: function () { return this; },
    });

    const config = new Configuration({ apiKey: 'test-key', fetchApi: mockFetch as any });
    const api = new IPInsightsApi(config);

    await api.analyzeIp({ analyzeIpRequest: { ip: '1.1.1.1', enableAI: true } });

    const [, init] = mockFetch.mock.calls[0];
    const body = JSON.parse(init.body as string);
    expect(body.ip).toBe('1.1.1.1');
  });

  it('analyzeIp() throws on non-2xx response', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 403,
      headers: { get: () => 'application/json' },
      json: async () => ({ message: 'Forbidden' }),
      text: async () => JSON.stringify({ message: 'Forbidden' }),
      clone: function () { return this; },
    });

    const config = new Configuration({ apiKey: 'bad-key', fetchApi: mockFetch as any });
    const api = new IPInsightsApi(config);

    await expect(
      api.analyzeIp({ analyzeIpRequest: { ip: '8.8.8.8' } })
    ).rejects.toBeDefined();
  });
});
