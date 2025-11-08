import { ErrorResponse } from './types';
import { CreateEmailBatchExportRequest, EmailInsightsApi, GetEmailBatchExportStatusRequest, GetEmailBatchStatusRequest } from '../lib/v1/apis/EmailInsightsApi';
import { AnalyzeEmailRequest  } from '../lib/v1/models/AnalyzeEmailRequest';
import { Configuration } from '../lib/v1/runtime';
import { BatchAnalyzeEmailsRequest } from '../lib/v1/models/BatchAnalyzeEmailsRequest';

export class EmailInsights {
  private emailInsightsApi: EmailInsightsApi;

  constructor(config) {
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
        const errorResponse = await error.response.json() as ErrorResponse;
        throw errorResponse;
    }
  };

  public async batchAnalyze (request: BatchAnalyzeEmailsRequest) {
    try {
        return await this.emailInsightsApi.batchAnalyzeEmails({
            batchAnalyzeEmailsRequest: request
        });
    } catch (error) {
        const errorResponse = await error.response.json() as ErrorResponse;
        throw errorResponse;
    }
  };
  
  public async getBatchStatus (request: GetEmailBatchStatusRequest ) {
    try {
        return await this.emailInsightsApi.getEmailBatchStatus(request);
    } catch (error) {
        const errorResponse = await error.response.json() as ErrorResponse;
        throw errorResponse;
    }
  };

  public async createEmailBatchExport (request: CreateEmailBatchExportRequest) {
    try {
        return await this.emailInsightsApi.createEmailBatchExport(request);
    } catch (error) {
        const errorResponse = await error.response.json() as ErrorResponse;
        throw errorResponse;
    }
  };

  public async getEmailBatchExportStatus (request: GetEmailBatchExportStatusRequest ) {
    try {
        return await this.emailInsightsApi.getEmailBatchExportStatus(request);
    } catch (error) {
        const errorResponse = await error.response.json() as ErrorResponse;
        throw errorResponse;
    }
  };
}
