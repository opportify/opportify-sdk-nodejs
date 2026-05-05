import { EmailInsights } from '../src/emailInsights';
import { EmailInsightsApi } from '../lib/v1/apis/EmailInsightsApi';

jest.mock('../lib/v1/apis/EmailInsightsApi');

const MockedEmailInsightsApi = EmailInsightsApi as jest.MockedClass<typeof EmailInsightsApi>;

describe('EmailInsights', () => {
  beforeEach(() => {
    MockedEmailInsightsApi.mockClear();
  });

  it('creates an instance successfully', () => {
    const client = new EmailInsights({ apiKey: 'test-key' });
    expect(client).toBeInstanceOf(EmailInsights);
    expect(MockedEmailInsightsApi).toHaveBeenCalledTimes(1);
  });

  it('analyze() returns response on success', async () => {
    const fakeResponse = { email: 'user@example.com', isValid: true };
    MockedEmailInsightsApi.prototype.analyzeEmail = jest.fn().mockResolvedValue(fakeResponse);

    const client = new EmailInsights({ apiKey: 'test-key' });
    const result = await client.analyze({ email: 'user@example.com', enableAI: false });

    expect(result).toEqual(fakeResponse);
    expect(MockedEmailInsightsApi.prototype.analyzeEmail).toHaveBeenCalledWith({
      analyzeEmailRequest: { email: 'user@example.com', enableAI: false },
    });
  });

  it('analyze() passes all optional fields', async () => {
    MockedEmailInsightsApi.prototype.analyzeEmail = jest.fn().mockResolvedValue({});

    const client = new EmailInsights({ apiKey: 'test-key' });
    await client.analyze({
      email: 'user@example.com',
      enableAI: true,
      enableAutoCorrection: true,
      enableDomainEnrichment: true,
    });

    expect(MockedEmailInsightsApi.prototype.analyzeEmail).toHaveBeenCalledWith({
      analyzeEmailRequest: {
        email: 'user@example.com',
        enableAI: true,
        enableAutoCorrection: true,
        enableDomainEnrichment: true,
      },
    });
  });

  it('analyze() throws on API error', async () => {
    MockedEmailInsightsApi.prototype.analyzeEmail = jest.fn().mockRejectedValue(new Error('API error'));

    const client = new EmailInsights({ apiKey: 'test-key' });
    await expect(client.analyze({ email: 'bad@example.com' })).rejects.toBeDefined();
  });

  it('batchAnalyze() returns response on success', async () => {
    const fakeResponse = { jobId: 'job-123', status: 'queued' };
    MockedEmailInsightsApi.prototype.batchAnalyzeEmails = jest.fn().mockResolvedValue(fakeResponse);

    const client = new EmailInsights({ apiKey: 'test-key' });
    const result = await client.batchAnalyze({ emails: ['a@example.com'], enableAI: false });

    expect(result).toEqual(fakeResponse);
  });

  it('batchAnalyze() passes all optional fields', async () => {
    MockedEmailInsightsApi.prototype.batchAnalyzeEmails = jest.fn().mockResolvedValue({});

    const client = new EmailInsights({ apiKey: 'test-key' });
    await client.batchAnalyze({
      emails: ['a@example.com', 'b@example.com'],
      name: 'my-batch',
      enableAI: true,
      enableAutoCorrection: true,
    });

    expect(MockedEmailInsightsApi.prototype.batchAnalyzeEmails).toHaveBeenCalledWith({
      batchAnalyzeEmailsRequest: {
        emails: ['a@example.com', 'b@example.com'],
        name: 'my-batch',
        enableAI: true,
        enableAutoCorrection: true,
      },
    });
  });

  it('batchAnalyze() throws on API error', async () => {
    MockedEmailInsightsApi.prototype.batchAnalyzeEmails = jest.fn().mockRejectedValue(new Error('API error'));

    const client = new EmailInsights({ apiKey: 'test-key' });
    await expect(client.batchAnalyze({ emails: ['a@example.com'] })).rejects.toBeDefined();
  });

  it('getBatchStatus() returns response on success', async () => {
    const fakeResponse = { jobId: 'job-123', status: 'completed' };
    MockedEmailInsightsApi.prototype.getEmailBatchStatus = jest.fn().mockResolvedValue(fakeResponse);

    const client = new EmailInsights({ apiKey: 'test-key' });
    const result = await client.getBatchStatus({ jobId: 'job-123' });

    expect(result).toEqual(fakeResponse);
    expect(MockedEmailInsightsApi.prototype.getEmailBatchStatus).toHaveBeenCalledWith({ jobId: 'job-123' });
  });

  it('getBatchStatus() throws on API error', async () => {
    MockedEmailInsightsApi.prototype.getEmailBatchStatus = jest.fn().mockRejectedValue(new Error('Not found'));

    const client = new EmailInsights({ apiKey: 'test-key' });
    await expect(client.getBatchStatus({ jobId: 'bad-id' })).rejects.toBeDefined();
  });

  it('createEmailBatchExport() returns export response on success', async () => {
    const fakeResponse = { jobId: 'job-123', exportId: 'exp-456', status: 'QUEUED' };
    MockedEmailInsightsApi.prototype.createEmailBatchExport = jest.fn().mockResolvedValue(fakeResponse);

    const client = new EmailInsights({ apiKey: 'test-key' });
    const result = await client.createEmailBatchExport({
      jobId: 'job-123',
      exportRequest: { exportType: 'csv' },
    });

    expect(result).toEqual(fakeResponse);
    expect(MockedEmailInsightsApi.prototype.createEmailBatchExport).toHaveBeenCalledWith({
      jobId: 'job-123',
      exportRequest: { exportType: 'csv' },
    });
  });

  it('createEmailBatchExport() throws on API error', async () => {
    MockedEmailInsightsApi.prototype.createEmailBatchExport = jest.fn().mockRejectedValue(new Error('Not found'));

    const client = new EmailInsights({ apiKey: 'test-key' });
    await expect(client.createEmailBatchExport({ jobId: 'bad-id' })).rejects.toBeDefined();
  });

  it('getEmailBatchExportStatus() returns status on success', async () => {
    const fakeResponse = { jobId: 'job-123', exportId: 'exp-456', status: 'COMPLETED' };
    MockedEmailInsightsApi.prototype.getEmailBatchExportStatus = jest.fn().mockResolvedValue(fakeResponse);

    const client = new EmailInsights({ apiKey: 'test-key' });
    const result = await client.getEmailBatchExportStatus({ jobId: 'job-123', exportId: 'exp-456' });

    expect(result).toEqual(fakeResponse);
    expect(MockedEmailInsightsApi.prototype.getEmailBatchExportStatus).toHaveBeenCalledWith({
      jobId: 'job-123',
      exportId: 'exp-456',
    });
  });

  it('getEmailBatchExportStatus() throws on API error', async () => {
    MockedEmailInsightsApi.prototype.getEmailBatchExportStatus = jest.fn().mockRejectedValue(new Error('Not found'));

    const client = new EmailInsights({ apiKey: 'test-key' });
    await expect(
      client.getEmailBatchExportStatus({ jobId: 'bad-id', exportId: 'bad-exp' })
    ).rejects.toBeDefined();
  });
});
