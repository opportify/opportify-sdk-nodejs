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

  it('getBatchStatus() returns response on success', async () => {
    const fakeResponse = { jobId: 'job-123', status: 'completed' };
    MockedEmailInsightsApi.prototype.getEmailBatchStatus = jest.fn().mockResolvedValue(fakeResponse);

    const client = new EmailInsights({ apiKey: 'test-key' });
    const result = await client.getBatchStatus({ jobId: 'job-123' });

    expect(result).toEqual(fakeResponse);
  });
});
