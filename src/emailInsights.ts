import { ErrorResponse } from './types';
import { EmailInsightsApi } from '../lib/v1/apis/EmailInsightsApi';
import { AnalyzeEmailRequest } from '../lib/v1/models/AnalyzeEmailRequest';
import { Configuration } from '../lib/v1/runtime';

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
        return this.emailInsightsApi.analyzeEmail({
            analyzeEmailRequest: {
                email: request.email,
                enableAutoCorrection: request.enableAutoCorrection,
                enableAI: request.enableAI,
            }
        });
    } catch (error) {
        const errorResponse = await error.response.json() as ErrorResponse;
        throw errorResponse;
    }
  };
}
