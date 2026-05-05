import { CreateIpBatchExportRequest, GetIpBatchExportStatusRequest, GetIpBatchStatusRequest, IPInsightsApi } from '../lib/v1/apis/IPInsightsApi';
import { AnalyzeIpRequest } from '../lib/v1/models/AnalyzeIpRequest';
import { BatchAnalyzeIpsRequest } from '../lib/v1/models/BatchAnalyzeIpsRequest';
import { Configuration } from '../lib/v1/runtime';
import { toErrorResponse } from './errorUtils';

export class IPInsights {
  private ipInsightsApi: IPInsightsApi;

  constructor(config: { apiKey: string; basePath?: string }) {
      const defaultConfig = new Configuration({
          apiKey: config.apiKey,
          basePath: config.basePath,
      });
      this.ipInsightsApi = new IPInsightsApi(defaultConfig);
  }

  public async analyze (request: AnalyzeIpRequest) {
    try {
        return await this.ipInsightsApi.analyzeIp({
            analyzeIpRequest: {
                ip: request.ip,
                enableAI: request.enableAI,
            }
        });
    } catch (error) {
        throw await toErrorResponse(error);
    }
  };

  public async batchAnalyze (request: BatchAnalyzeIpsRequest) {
    try {
        return await this.ipInsightsApi.batchAnalyzeIps({
            batchAnalyzeIpsRequest: {
                ips: request.ips,
                name: request.name,
                enableAI: request.enableAI,
            }
        });
    } catch (error) {
        throw await toErrorResponse(error);
    }
  };

  public async getBatchStatus (request: GetIpBatchStatusRequest ) {
    try {
        return await this.ipInsightsApi.getIpBatchStatus(request);
    } catch (error) {
        throw await toErrorResponse(error);
    }
  };
  
  public async createIpBatchExport (request: CreateIpBatchExportRequest) {
    try {
        return await this.ipInsightsApi.createIpBatchExport(request);
    } catch (error) {
        throw await toErrorResponse(error);
    }
  };

  public async getIpBatchExportStatus (request: GetIpBatchExportStatusRequest ) {
    try {
        return await this.ipInsightsApi.getIpBatchExportStatus(request);
    } catch (error) {
        throw await toErrorResponse(error);
    }
  };
}
