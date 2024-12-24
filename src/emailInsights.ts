import { EmailInsightsApi } from '../lib/v1/apis/EmailInsightsApi';
import { AnalyzeEmailRequest } from '../lib/v1/models/AnalyzeEmailRequest';
import { Configuration } from '../lib/v1/runtime';

export type EmailInsightsConfiguration = {
    apiKey: string;
    version: string;
    basePath?: string;
};

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
    return this.emailInsightsApi.analyzeEmail({
        analyzeEmailRequest: {
            email: request.email,
            enableAutoCorrection: request.enableAutoCorrection,
            enableAI: request.enableAI,
        }
    });
  };
}
