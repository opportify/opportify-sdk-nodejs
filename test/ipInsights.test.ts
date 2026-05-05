import { IPInsights } from '../src/ipInsights';
import { IPInsightsApi } from '../lib/v1/apis/IPInsightsApi';

jest.mock('../lib/v1/apis/IPInsightsApi');

const MockedIPInsightsApi = IPInsightsApi as jest.MockedClass<typeof IPInsightsApi>;

describe('IPInsights', () => {
  beforeEach(() => {
    MockedIPInsightsApi.mockClear();
  });

  it('creates an instance successfully', () => {
    const client = new IPInsights({ apiKey: 'test-key' });
    expect(client).toBeInstanceOf(IPInsights);
    expect(MockedIPInsightsApi).toHaveBeenCalledTimes(1);
  });

  it('analyze() returns response on success', async () => {
    const fakeResponse = { ip: '8.8.8.8', riskScore: 10 };
    MockedIPInsightsApi.prototype.analyzeIp = jest.fn().mockResolvedValue(fakeResponse);

    const client = new IPInsights({ apiKey: 'test-key' });
    const result = await client.analyze({ ip: '8.8.8.8', enableAI: false });

    expect(result).toEqual(fakeResponse);
    expect(MockedIPInsightsApi.prototype.analyzeIp).toHaveBeenCalledWith({
      analyzeIpRequest: { ip: '8.8.8.8', enableAI: false },
    });
  });

  it('analyze() throws on API error', async () => {
    MockedIPInsightsApi.prototype.analyzeIp = jest.fn().mockRejectedValue(new Error('API error'));

    const client = new IPInsights({ apiKey: 'test-key' });
    await expect(client.analyze({ ip: '0.0.0.0' })).rejects.toBeDefined();
  });

  it('batchAnalyze() returns response on success', async () => {
    const fakeResponse = { jobId: 'ip-job-456', status: 'queued' };
    MockedIPInsightsApi.prototype.batchAnalyzeIps = jest.fn().mockResolvedValue(fakeResponse);

    const client = new IPInsights({ apiKey: 'test-key' });
    const result = await client.batchAnalyze({ ips: ['8.8.8.8'], enableAI: false });

    expect(result).toEqual(fakeResponse);
  });
});
