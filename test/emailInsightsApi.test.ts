import { EmailInsightsApi } from '../lib/v1/apis/EmailInsightsApi';
import { Configuration } from '../lib/v1/runtime';

describe('EmailInsightsApi', () => {
  const mockFetch = jest.fn();

  beforeEach(() => {
    mockFetch.mockClear();
  });

  it('analyzeEmail() makes a POST request to /email/analyze', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      headers: { get: () => 'application/json' },
      json: async () => ({ email: 'user@example.com', isValid: true }),
      text: async () => JSON.stringify({ email: 'user@example.com', isValid: true }),
      clone: function () { return this; },
    });

    const config = new Configuration({ apiKey: 'test-key', fetchApi: mockFetch as any });
    const api = new EmailInsightsApi(config);

    await api.analyzeEmail({ analyzeEmailRequest: { email: 'user@example.com' } });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, init] = mockFetch.mock.calls[0];
    expect(url).toMatch(/\/email\/analyze/);
    expect(init.method).toBe('POST');
  });

  it('analyzeEmail() sends email in request body', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      headers: { get: () => 'application/json' },
      json: async () => ({}),
      text: async () => '{}',
      clone: function () { return this; },
    });

    const config = new Configuration({ apiKey: 'test-key', fetchApi: mockFetch as any });
    const api = new EmailInsightsApi(config);

    await api.analyzeEmail({ analyzeEmailRequest: { email: 'test@example.com', enableAI: true } });

    const [, init] = mockFetch.mock.calls[0];
    const body = JSON.parse(init.body as string);
    expect(body.email).toBe('test@example.com');
  });

  it('analyzeEmail() throws on non-2xx response', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
      headers: { get: () => 'application/json' },
      json: async () => ({ message: 'Unauthorized' }),
      text: async () => JSON.stringify({ message: 'Unauthorized' }),
      clone: function () { return this; },
    });

    const config = new Configuration({ apiKey: 'bad-key', fetchApi: mockFetch as any });
    const api = new EmailInsightsApi(config);

    await expect(
      api.analyzeEmail({ analyzeEmailRequest: { email: 'user@example.com' } })
    ).rejects.toMatchObject({ response: expect.objectContaining({ status: 401 }) });
  });
});
