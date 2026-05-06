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
    await expect(client.analyze({ ip: '0.0.0.0' })).rejects.toMatchObject({ errorCode: 'REQUEST_ERROR', errorMessage: 'API error' });
  });

  it('batchAnalyze() returns response on success', async () => {
    const fakeResponse = { jobId: 'ip-job-456', status: 'queued' };
    MockedIPInsightsApi.prototype.batchAnalyzeIps = jest.fn().mockResolvedValue(fakeResponse);

    const client = new IPInsights({ apiKey: 'test-key' });
    const result = await client.batchAnalyze({ ips: ['8.8.8.8'], enableAI: false });

    expect(result).toEqual(fakeResponse);
  });

  it('batchAnalyze() passes name and all optional fields', async () => {
    MockedIPInsightsApi.prototype.batchAnalyzeIps = jest.fn().mockResolvedValue({});

    const client = new IPInsights({ apiKey: 'test-key' });
    await client.batchAnalyze({ ips: ['8.8.8.8', '1.1.1.1'], name: 'my-ip-batch', enableAI: true });

    expect(MockedIPInsightsApi.prototype.batchAnalyzeIps).toHaveBeenCalledWith({
      batchAnalyzeIpsRequest: {
        ips: ['8.8.8.8', '1.1.1.1'],
        name: 'my-ip-batch',
        enableAI: true,
      },
    });
  });

  it('batchAnalyze() throws on API error', async () => {
    MockedIPInsightsApi.prototype.batchAnalyzeIps = jest.fn().mockRejectedValue(new Error('API error'));

    const client = new IPInsights({ apiKey: 'test-key' });
    await expect(client.batchAnalyze({ ips: ['8.8.8.8'] })).rejects.toMatchObject({ errorCode: 'REQUEST_ERROR', errorMessage: 'API error' });
  });

  it('getBatchStatus() returns response on success', async () => {
    const fakeResponse = { jobId: 'ip-job-456', status: 'completed' };
    MockedIPInsightsApi.prototype.getIpBatchStatus = jest.fn().mockResolvedValue(fakeResponse);

    const client = new IPInsights({ apiKey: 'test-key' });
    const result = await client.getBatchStatus({ jobId: 'ip-job-456' });

    expect(result).toEqual(fakeResponse);
    expect(MockedIPInsightsApi.prototype.getIpBatchStatus).toHaveBeenCalledWith({ jobId: 'ip-job-456' });
  });

  it('getBatchStatus() throws on API error', async () => {
    MockedIPInsightsApi.prototype.getIpBatchStatus = jest.fn().mockRejectedValue(new Error('Not found'));

    const client = new IPInsights({ apiKey: 'test-key' });
    await expect(client.getBatchStatus({ jobId: 'bad-id' })).rejects.toMatchObject({ errorCode: 'REQUEST_ERROR', errorMessage: 'Not found' });
  });

  it('createIpBatchExport() returns export response on success', async () => {
    const fakeResponse = { jobId: 'ip-job-456', exportId: 'exp-789', status: 'QUEUED' };
    MockedIPInsightsApi.prototype.createIpBatchExport = jest.fn().mockResolvedValue(fakeResponse);

    const client = new IPInsights({ apiKey: 'test-key' });
    const result = await client.createIpBatchExport({
      jobId: 'ip-job-456',
      exportRequest: { exportType: 'json' },
    });

    expect(result).toEqual(fakeResponse);
    expect(MockedIPInsightsApi.prototype.createIpBatchExport).toHaveBeenCalledWith({
      jobId: 'ip-job-456',
      exportRequest: { exportType: 'json' },
    });
  });

  it('createIpBatchExport() throws on API error', async () => {
    MockedIPInsightsApi.prototype.createIpBatchExport = jest.fn().mockRejectedValue(new Error('Not found'));

    const client = new IPInsights({ apiKey: 'test-key' });
    await expect(client.createIpBatchExport({ jobId: 'bad-id' })).rejects.toMatchObject({ errorCode: 'REQUEST_ERROR', errorMessage: 'Not found' });
  });

  it('getIpBatchExportStatus() returns status on success', async () => {
    const fakeResponse = { jobId: 'ip-job-456', exportId: 'exp-789', status: 'COMPLETED' };
    MockedIPInsightsApi.prototype.getIpBatchExportStatus = jest.fn().mockResolvedValue(fakeResponse);

    const client = new IPInsights({ apiKey: 'test-key' });
    const result = await client.getIpBatchExportStatus({ jobId: 'ip-job-456', exportId: 'exp-789' });

    expect(result).toEqual(fakeResponse);
    expect(MockedIPInsightsApi.prototype.getIpBatchExportStatus).toHaveBeenCalledWith({
      jobId: 'ip-job-456',
      exportId: 'exp-789',
    });
  });

  it('getIpBatchExportStatus() throws on API error', async () => {
    MockedIPInsightsApi.prototype.getIpBatchExportStatus = jest.fn().mockRejectedValue(new Error('Not found'));

    const client = new IPInsights({ apiKey: 'test-key' });
    await expect(
      client.getIpBatchExportStatus({ jobId: 'bad-id', exportId: 'bad-exp' })
    ).rejects.toMatchObject({ errorCode: 'REQUEST_ERROR', errorMessage: 'Not found' });
  });
});
