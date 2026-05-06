import { FraudProtectionApi } from '../lib/fraud-intel/apis/FraudProtectionApi';
import { AnalyzeFraudRequest } from '../lib/fraud-intel/models/AnalyzeFraudRequest';
import { Configuration } from '../lib/fraud-intel/runtime';
import { toErrorResponse } from './errorUtils';

export class FraudProtection {
  private fraudProtectionApi: FraudProtectionApi;

  constructor(config: { apiKey: string; basePath?: string }) {
    const defaultConfig = new Configuration({
      apiKey: config.apiKey,
      basePath: config.basePath,
    });
    this.fraudProtectionApi = new FraudProtectionApi(defaultConfig);
  }

  public async analyzeFraud(request: AnalyzeFraudRequest) {
    try {
      return await this.fraudProtectionApi.analyzeFraud({ analyzeFraudRequest: request });
    } catch (error) {
      throw await toErrorResponse(error);
    }
  }

}
