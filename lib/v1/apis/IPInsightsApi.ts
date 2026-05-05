/* tslint:disable */
/* eslint-disable */

import * as runtime from '../runtime';
import type {
  AnalyzeEmail403Response,
  AnalyzeEmail500Response,
  AnalyzeIp200Response,
  AnalyzeIp400Response,
  AnalyzeIpRequest,
  BatchAnalyzeEmails401Response,
  BatchAnalyzeEmails402Response,
  BatchAnalyzeEmails403Response,
  BatchAnalyzeEmails413Response,
  BatchAnalyzeEmails429Response,
  BatchAnalyzeIps202Response,
  BatchAnalyzeIps400Response,
  BatchAnalyzeIpsRequest,
  CreateEmailBatchExport400Response,
  CreateEmailBatchExport403Response,
  CreateEmailBatchExport404Response,
  CreateEmailBatchExport409Response,
  ExportCreatedResponse,
  ExportRequest,
  ExportStatusResponse,
  GetEmailBatchExportStatus400Response,
  GetEmailBatchExportStatus404Response,
  GetEmailBatchStatus404Response,
  GetIpBatchStatus200Response,
  INTERNALERROR1,
  NOTFOUND,
} from '../models/index';
import {
    AnalyzeEmail403ResponseFromJSON,
    AnalyzeEmail403ResponseToJSON,
    AnalyzeEmail500ResponseFromJSON,
    AnalyzeEmail500ResponseToJSON,
    AnalyzeIp200ResponseFromJSON,
    AnalyzeIp200ResponseToJSON,
    AnalyzeIp400ResponseFromJSON,
    AnalyzeIp400ResponseToJSON,
    AnalyzeIpRequestFromJSON,
    AnalyzeIpRequestToJSON,
    BatchAnalyzeEmails401ResponseFromJSON,
    BatchAnalyzeEmails401ResponseToJSON,
    BatchAnalyzeEmails402ResponseFromJSON,
    BatchAnalyzeEmails402ResponseToJSON,
    BatchAnalyzeEmails403ResponseFromJSON,
    BatchAnalyzeEmails403ResponseToJSON,
    BatchAnalyzeEmails413ResponseFromJSON,
    BatchAnalyzeEmails413ResponseToJSON,
    BatchAnalyzeEmails429ResponseFromJSON,
    BatchAnalyzeEmails429ResponseToJSON,
    BatchAnalyzeIps202ResponseFromJSON,
    BatchAnalyzeIps202ResponseToJSON,
    BatchAnalyzeIps400ResponseFromJSON,
    BatchAnalyzeIps400ResponseToJSON,
    BatchAnalyzeIpsRequestFromJSON,
    BatchAnalyzeIpsRequestToJSON,
    CreateEmailBatchExport400ResponseFromJSON,
    CreateEmailBatchExport400ResponseToJSON,
    CreateEmailBatchExport403ResponseFromJSON,
    CreateEmailBatchExport403ResponseToJSON,
    CreateEmailBatchExport404ResponseFromJSON,
    CreateEmailBatchExport404ResponseToJSON,
    CreateEmailBatchExport409ResponseFromJSON,
    CreateEmailBatchExport409ResponseToJSON,
    ExportCreatedResponseFromJSON,
    ExportCreatedResponseToJSON,
    ExportRequestFromJSON,
    ExportRequestToJSON,
    ExportStatusResponseFromJSON,
    ExportStatusResponseToJSON,
    GetEmailBatchExportStatus400ResponseFromJSON,
    GetEmailBatchExportStatus400ResponseToJSON,
    GetEmailBatchExportStatus404ResponseFromJSON,
    GetEmailBatchExportStatus404ResponseToJSON,
    GetEmailBatchStatus404ResponseFromJSON,
    GetEmailBatchStatus404ResponseToJSON,
    GetIpBatchStatus200ResponseFromJSON,
    GetIpBatchStatus200ResponseToJSON,
    INTERNALERROR1FromJSON,
    INTERNALERROR1ToJSON,
    NOTFOUNDFromJSON,
    NOTFOUNDToJSON,
} from '../models/index';

export interface AnalyzeIpOperationRequest {
    analyzeIpRequest: AnalyzeIpRequest;
}

export interface BatchAnalyzeIpsOperationRequest {
    batchAnalyzeIpsRequest: BatchAnalyzeIpsRequest;
}

export interface CreateIpBatchExportRequest {
    jobId: string;
    exportRequest?: ExportRequest;
}

export interface GetIpBatchExportStatusRequest {
    jobId: string;
    exportId: string;
}

export interface GetIpBatchStatusRequest {
    jobId: string;
}

/**
 * IPInsightsApi - interface
 * 
 * @export
 * @interface IPInsightsApiInterface
 */
export interface IPInsightsApiInterface {
    /**
     * The **Analyze IP** endpoint provides comprehensive insights into a specified IP address, leveraging AI-driven analysis to deliver actionable intelligence. This includes connection type…
     * @summary Analyze IP
     * @param {AnalyzeIpRequest} analyzeIpRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPInsightsApiInterface
     */
    analyzeIpRaw(requestParameters: AnalyzeIpOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyzeIp200Response>>;

    /**
     * The **Analyze IP** endpoint provides comprehensive insights into a specified IP address, leveraging AI-driven analysis to deliver actionable intelligence. This includes connection type…
     * Analyze IP
     */
    analyzeIp(requestParameters: AnalyzeIpOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyzeIp200Response>;

    /**
     * The **Batch Analyze IPs** endpoint enables processing of large volumes of IP addresses asynchronously. This endpoint accepts various input formats and returns a job ID for tracking the analysis…
     * @summary Batch Analyze IPs
     * @param {BatchAnalyzeIpsRequest} batchAnalyzeIpsRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPInsightsApiInterface
     */
    batchAnalyzeIpsRaw(requestParameters: BatchAnalyzeIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchAnalyzeIps202Response>>;

    /**
     * The **Batch Analyze IPs** endpoint enables processing of large volumes of IP addresses asynchronously. This endpoint accepts various input formats and returns a job ID for tracking the analysis…
     * Batch Analyze IPs
     */
    batchAnalyzeIps(requestParameters: BatchAnalyzeIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchAnalyzeIps202Response>;

    /**
     * The **Create IP Batch Export** endpoint allows you to request a custom export of completed batch analysis results. You can apply filters, select specific columns, and choose the output format (CSV or…
     * @summary Create IP Batch Export
     * @param {string} jobId The unique identifier of the completed batch job. Format: uuid. Example: \&quot;52b36b1f-0c21-41fa-8a4f-423d25a9a8e2\&quot;.
     * @param {ExportRequest} [exportRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPInsightsApiInterface
     */
    createIpBatchExportRaw(requestParameters: CreateIpBatchExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportCreatedResponse>>;

    /**
     * The **Create IP Batch Export** endpoint allows you to request a custom export of completed batch analysis results. You can apply filters, select specific columns, and choose the output format (CSV or…
     * Create IP Batch Export
     */
    createIpBatchExport(requestParameters: CreateIpBatchExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportCreatedResponse>;

    /**
     * The **Get IP Batch Export Status** endpoint retrieves the status and download URL for a previously requested export job.
     * @summary Get IP Batch Export Status
     * @param {string} jobId The unique identifier of the batch job. Format: uuid. Example: \&quot;52b36b1f-0c21-41fa-8a4f-423d25a9a8e2\&quot;.
     * @param {string} exportId The unique identifier of the export job. Format: uuid. Example: \&quot;3b90d156-a0d8-4630-8230-f59e9a4e9e33\&quot;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPInsightsApiInterface
     */
    getIpBatchExportStatusRaw(requestParameters: GetIpBatchExportStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportStatusResponse>>;

    /**
     * The **Get IP Batch Export Status** endpoint retrieves the status and download URL for a previously requested export job.
     * Get IP Batch Export Status
     */
    getIpBatchExportStatus(requestParameters: GetIpBatchExportStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportStatusResponse>;

    /**
     * The **Get IP Batch Status** endpoint allows you to retrieve the current status of a previously submitted batch processing job. Use this endpoint to track the progress of your batch IP analysis…
     * @summary Get IP Batch Status
     * @param {string} jobId The unique identifier of the batch job to retrieve status for.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPInsightsApiInterface
     */
    getIpBatchStatusRaw(requestParameters: GetIpBatchStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetIpBatchStatus200Response>>;

    /**
     * The **Get IP Batch Status** endpoint allows you to retrieve the current status of a previously submitted batch processing job. Use this endpoint to track the progress of your batch IP analysis…
     * Get IP Batch Status
     */
    getIpBatchStatus(requestParameters: GetIpBatchStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetIpBatchStatus200Response>;

}

/**
 * 
 */
export class IPInsightsApi extends runtime.BaseAPI implements IPInsightsApiInterface {

    /**
     * The **Analyze IP** endpoint provides comprehensive insights into a specified IP address, leveraging AI-driven analysis to deliver actionable intelligence. This includes connection type…
     * Analyze IP
     */
    async analyzeIpRaw(requestParameters: AnalyzeIpOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyzeIp200Response>> {
        if (requestParameters['analyzeIpRequest'] == null) {
            throw new runtime.RequiredError(
                'analyzeIpRequest',
                'Required parameter "analyzeIpRequest" was null or undefined when calling analyzeIp().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-opportify-token"] = await this.configuration.apiKey("x-opportify-token"); // opportifyToken authentication
        }

        let urlPath = `/ip/analyze`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AnalyzeIpRequestToJSON(requestParameters['analyzeIpRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnalyzeIp200ResponseFromJSON(jsonValue));
    }

    /**
     * The **Analyze IP** endpoint provides comprehensive insights into a specified IP address, leveraging AI-driven analysis to deliver actionable intelligence. This includes connection type…
     * Analyze IP
     */
    async analyzeIp(requestParameters: AnalyzeIpOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyzeIp200Response> {
        const response = await this.analyzeIpRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The **Batch Analyze IPs** endpoint enables processing of large volumes of IP addresses asynchronously. This endpoint accepts various input formats and returns a job ID for tracking the analysis…
     * Batch Analyze IPs
     */
    async batchAnalyzeIpsRaw(requestParameters: BatchAnalyzeIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchAnalyzeIps202Response>> {
        if (requestParameters['batchAnalyzeIpsRequest'] == null) {
            throw new runtime.RequiredError(
                'batchAnalyzeIpsRequest',
                'Required parameter "batchAnalyzeIpsRequest" was null or undefined when calling batchAnalyzeIps().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-opportify-token"] = await this.configuration.apiKey("x-opportify-token"); // opportifyToken authentication
        }

        let urlPath = `/ip/batch`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BatchAnalyzeIpsRequestToJSON(requestParameters['batchAnalyzeIpsRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BatchAnalyzeIps202ResponseFromJSON(jsonValue));
    }

    /**
     * The **Batch Analyze IPs** endpoint enables processing of large volumes of IP addresses asynchronously. This endpoint accepts various input formats and returns a job ID for tracking the analysis…
     * Batch Analyze IPs
     */
    async batchAnalyzeIps(requestParameters: BatchAnalyzeIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchAnalyzeIps202Response> {
        const response = await this.batchAnalyzeIpsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The **Create IP Batch Export** endpoint allows you to request a custom export of completed batch analysis results. You can apply filters, select specific columns, and choose the output format (CSV or…
     * Create IP Batch Export
     */
    async createIpBatchExportRaw(requestParameters: CreateIpBatchExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportCreatedResponse>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling createIpBatchExport().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-opportify-token"] = await this.configuration.apiKey("x-opportify-token"); // opportifyToken authentication
        }

        let urlPath = `/ip/batch/{jobId}/exports`;
        urlPath = urlPath.replace(`{${"jobId"}}`, encodeURIComponent(String(requestParameters['jobId'])));

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExportRequestToJSON(requestParameters['exportRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportCreatedResponseFromJSON(jsonValue));
    }

    /**
     * The **Create IP Batch Export** endpoint allows you to request a custom export of completed batch analysis results. You can apply filters, select specific columns, and choose the output format (CSV or…
     * Create IP Batch Export
     */
    async createIpBatchExport(requestParameters: CreateIpBatchExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportCreatedResponse> {
        const response = await this.createIpBatchExportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The **Get IP Batch Export Status** endpoint retrieves the status and download URL for a previously requested export job.
     * Get IP Batch Export Status
     */
    async getIpBatchExportStatusRaw(requestParameters: GetIpBatchExportStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportStatusResponse>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling getIpBatchExportStatus().'
            );
        }

        if (requestParameters['exportId'] == null) {
            throw new runtime.RequiredError(
                'exportId',
                'Required parameter "exportId" was null or undefined when calling getIpBatchExportStatus().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-opportify-token"] = await this.configuration.apiKey("x-opportify-token"); // opportifyToken authentication
        }

        let urlPath = `/ip/batch/{jobId}/exports/{exportId}`;
        urlPath = urlPath.replace(`{${"jobId"}}`, encodeURIComponent(String(requestParameters['jobId'])));
        urlPath = urlPath.replace(`{${"exportId"}}`, encodeURIComponent(String(requestParameters['exportId'])));

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportStatusResponseFromJSON(jsonValue));
    }

    /**
     * The **Get IP Batch Export Status** endpoint retrieves the status and download URL for a previously requested export job.
     * Get IP Batch Export Status
     */
    async getIpBatchExportStatus(requestParameters: GetIpBatchExportStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportStatusResponse> {
        const response = await this.getIpBatchExportStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The **Get IP Batch Status** endpoint allows you to retrieve the current status of a previously submitted batch processing job. Use this endpoint to track the progress of your batch IP analysis…
     * Get IP Batch Status
     */
    async getIpBatchStatusRaw(requestParameters: GetIpBatchStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetIpBatchStatus200Response>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling getIpBatchStatus().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-opportify-token"] = await this.configuration.apiKey("x-opportify-token"); // opportifyToken authentication
        }

        let urlPath = `/ip/batch/{jobId}`;
        urlPath = urlPath.replace(`{${"jobId"}}`, encodeURIComponent(String(requestParameters['jobId'])));

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetIpBatchStatus200ResponseFromJSON(jsonValue));
    }

    /**
     * The **Get IP Batch Status** endpoint allows you to retrieve the current status of a previously submitted batch processing job. Use this endpoint to track the progress of your batch IP analysis…
     * Get IP Batch Status
     */
    async getIpBatchStatus(requestParameters: GetIpBatchStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetIpBatchStatus200Response> {
        const response = await this.getIpBatchStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
