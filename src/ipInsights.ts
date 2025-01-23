import { IPInsightsApi } from '../lib/v1/apis/IPInsightsApi';
import { AnalyzeIpRequest } from '../lib/v1/models/AnalyzeIpRequest';
import { Configuration } from '../lib/v1/runtime';
import { ErrorResponse } from './types';

export class IPInsights {
  private ipInsightsApi: IPInsightsApi;

  constructor(config) {
      const defaultConfig = new Configuration({
          apiKey: config.apiKey,
          basePath: config.basePath,
      });
      this.ipInsightsApi = new IPInsightsApi(defaultConfig);
  }

  public async analyze (request: AnalyzeIpRequest) {
    try {
        return this.ipInsightsApi.analyzeIp({
            analyzeIpRequest: {
                ip: request.ip,
                enableAI: request.enableAI,
            }
        });
    } catch (error) {
        const errorResponse = await error.response.json() as ErrorResponse;
        throw errorResponse;
    }
  };
}
