import { CreateEmailBatchExportRequest, EmailInsightsApi, GetEmailBatchExportStatusRequest, GetEmailBatchStatusRequest } from '../lib/v1/apis/EmailInsightsApi';
import { AnalyzeEmailRequest } from '../lib/v1/models/AnalyzeEmailRequest';
import { Configuration } from '../lib/v1/runtime';
import { BatchAnalyzeEmailsRequest } from '../lib/v1/models/BatchAnalyzeEmailsRequest';
import { toErrorResponse } from './errorUtils';

export class EmailInsights {
  private emailInsightsApi: EmailInsightsApi;

  constructor(config: { apiKey: string; basePath?: string }) {
      const defaultConfig = new Configuration({
          apiKey: config.apiKey,
          basePath: config.basePath,
      });
      this.emailInsightsApi = new EmailInsightsApi(defaultConfig);
  }

  public async analyze (request: AnalyzeEmailRequest) {
    try {
        return await this.emailInsightsApi.analyzeEmail({
            analyzeEmailRequest: request
        });
    } catch (error) {
        throw await toErrorResponse(error);
    }
  };

  public async batchAnalyze (request: BatchAnalyzeEmailsRequest) {
    try {
        return await this.emailInsightsApi.batchAnalyzeEmails({
            batchAnalyzeEmailsRequest: request
        });
    } catch (error) {
        throw await toErrorResponse(error);
    }
  };
  
  public async getBatchStatus (request: GetEmailBatchStatusRequest ) {
    try {
        return await this.emailInsightsApi.getEmailBatchStatus(request);
    } catch (error) {
        throw await toErrorResponse(error);
    }
  };

  public async createEmailBatchExport (request: CreateEmailBatchExportRequest) {
    try {
        return await this.emailInsightsApi.createEmailBatchExport(request);
    } catch (error) {
        throw await toErrorResponse(error);
    }
  };

  public async getEmailBatchExportStatus (request: GetEmailBatchExportStatusRequest ) {
    try {
        return await this.emailInsightsApi.getEmailBatchExportStatus(request);
    } catch (error) {
        throw await toErrorResponse(error);
    }
  };
}
