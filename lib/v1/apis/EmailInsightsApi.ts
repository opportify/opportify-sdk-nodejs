/* tslint:disable */
/* eslint-disable */

import * as runtime from '../runtime';
import type {
  AnalyzeEmail200Response,
  AnalyzeEmail400Response,
  AnalyzeEmail403Response,
  AnalyzeEmail500Response,
  AnalyzeEmailRequest,
  BatchAnalyzeEmails202Response,
  BatchAnalyzeEmails400Response,
  BatchAnalyzeEmails401Response,
  BatchAnalyzeEmails402Response,
  BatchAnalyzeEmails403Response,
  BatchAnalyzeEmails413Response,
  BatchAnalyzeEmails429Response,
  BatchAnalyzeEmailsRequest,
  CreateEmailBatchExport400Response,
  CreateEmailBatchExport403Response,
  CreateEmailBatchExport404Response,
  CreateEmailBatchExport409Response,
  ExportCreatedResponse,
  ExportRequest,
  ExportStatusResponse,
  GetEmailBatchExportStatus400Response,
  GetEmailBatchExportStatus404Response,
  GetEmailBatchStatus200Response,
  GetEmailBatchStatus404Response,
} from '../models/index';
import {
    AnalyzeEmail200ResponseFromJSON,
    AnalyzeEmail200ResponseToJSON,
    AnalyzeEmail400ResponseFromJSON,
    AnalyzeEmail400ResponseToJSON,
    AnalyzeEmail403ResponseFromJSON,
    AnalyzeEmail403ResponseToJSON,
    AnalyzeEmail500ResponseFromJSON,
    AnalyzeEmail500ResponseToJSON,
    AnalyzeEmailRequestFromJSON,
    AnalyzeEmailRequestToJSON,
    BatchAnalyzeEmails202ResponseFromJSON,
    BatchAnalyzeEmails202ResponseToJSON,
    BatchAnalyzeEmails400ResponseFromJSON,
    BatchAnalyzeEmails400ResponseToJSON,
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
    BatchAnalyzeEmailsRequestFromJSON,
    BatchAnalyzeEmailsRequestToJSON,
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
    GetEmailBatchStatus200ResponseFromJSON,
    GetEmailBatchStatus200ResponseToJSON,
    GetEmailBatchStatus404ResponseFromJSON,
    GetEmailBatchStatus404ResponseToJSON,
} from '../models/index';

export interface AnalyzeEmailOperationRequest {
    analyzeEmailRequest: AnalyzeEmailRequest;
}

export interface BatchAnalyzeEmailsOperationRequest {
    batchAnalyzeEmailsRequest: BatchAnalyzeEmailsRequest;
}

export interface CreateEmailBatchExportRequest {
    jobId: string;
    exportRequest?: ExportRequest;
}

export interface GetEmailBatchExportStatusRequest {
    jobId: string;
    exportId: string;
}

export interface GetEmailBatchStatusRequest {
    jobId: string;
}

/**
 * EmailInsightsApi - interface
 * 
 * @export
 * @interface EmailInsightsApiInterface
 */
export interface EmailInsightsApiInterface {
    /**
     * The **Analyze Email** endpoint validates an email address and returns its deliverability status, provider details, and potential corrections. This endpoint is ideal for ensuring accurate email data…
     * @summary Analyze Email
     * @param {AnalyzeEmailRequest} analyzeEmailRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailInsightsApiInterface
     */
    analyzeEmailRaw(requestParameters: AnalyzeEmailOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyzeEmail200Response>>;

    /**
     * The **Analyze Email** endpoint validates an email address and returns its deliverability status, provider details, and potential corrections. This endpoint is ideal for ensuring accurate email data…
     * Analyze Email
     */
    analyzeEmail(requestParameters: AnalyzeEmailOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyzeEmail200Response>;

    /**
     * The **Batch Analyze Emails** endpoint enables processing of large volumes of email addresses asynchronously. This endpoint accepts various input formats and returns a job ID for tracking the analysis…
     * @summary Batch Analyze Emails
     * @param {BatchAnalyzeEmailsRequest} batchAnalyzeEmailsRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailInsightsApiInterface
     */
    batchAnalyzeEmailsRaw(requestParameters: BatchAnalyzeEmailsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchAnalyzeEmails202Response>>;

    /**
     * The **Batch Analyze Emails** endpoint enables processing of large volumes of email addresses asynchronously. This endpoint accepts various input formats and returns a job ID for tracking the analysis…
     * Batch Analyze Emails
     */
    batchAnalyzeEmails(requestParameters: BatchAnalyzeEmailsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchAnalyzeEmails202Response>;

    /**
     * The **Create Email Batch Export** endpoint allows you to request a custom export of completed batch analysis results. You can apply filters, select specific columns, and choose the output format (CSV…
     * @summary Create Email Batch Export
     * @param {string} jobId The unique identifier of the completed batch job. Format: uuid. Example: \&quot;84d22c8b-2cb6-4606-bfb1-361244a097e4\&quot;.
     * @param {ExportRequest} [exportRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailInsightsApiInterface
     */
    createEmailBatchExportRaw(requestParameters: CreateEmailBatchExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportCreatedResponse>>;

    /**
     * The **Create Email Batch Export** endpoint allows you to request a custom export of completed batch analysis results. You can apply filters, select specific columns, and choose the output format (CSV…
     * Create Email Batch Export
     */
    createEmailBatchExport(requestParameters: CreateEmailBatchExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportCreatedResponse>;

    /**
     * The **Get Email Batch Export Status** endpoint retrieves the status and download URL for a previously requested export job.
     * @summary Get Email Batch Export Status
     * @param {string} jobId The unique identifier of the batch job. Format: uuid. Example: \&quot;84d22c8b-2cb6-4606-bfb1-361244a097e4\&quot;.
     * @param {string} exportId The unique identifier of the export job. Format: uuid. Example: \&quot;6f8d88ef-0896-4f69-90cd-7cc6ce5e6ddf\&quot;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailInsightsApiInterface
     */
    getEmailBatchExportStatusRaw(requestParameters: GetEmailBatchExportStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportStatusResponse>>;

    /**
     * The **Get Email Batch Export Status** endpoint retrieves the status and download URL for a previously requested export job.
     * Get Email Batch Export Status
     */
    getEmailBatchExportStatus(requestParameters: GetEmailBatchExportStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportStatusResponse>;

    /**
     * The **Get Email Batch Status** endpoint allows you to retrieve the current status of a previously submitted batch processing job. Use this endpoint to track the progress of your batch email analysis…
     * @summary Get Email Batch Status
     * @param {string} jobId The unique identifier of the batch job to retrieve status for.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailInsightsApiInterface
     */
    getEmailBatchStatusRaw(requestParameters: GetEmailBatchStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetEmailBatchStatus200Response>>;

    /**
     * The **Get Email Batch Status** endpoint allows you to retrieve the current status of a previously submitted batch processing job. Use this endpoint to track the progress of your batch email analysis…
     * Get Email Batch Status
     */
    getEmailBatchStatus(requestParameters: GetEmailBatchStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetEmailBatchStatus200Response>;

}

/**
 * 
 */
export class EmailInsightsApi extends runtime.BaseAPI implements EmailInsightsApiInterface {

    /**
     * The **Analyze Email** endpoint validates an email address and returns its deliverability status, provider details, and potential corrections. This endpoint is ideal for ensuring accurate email data…
     * Analyze Email
     */
    async analyzeEmailRaw(requestParameters: AnalyzeEmailOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyzeEmail200Response>> {
        if (requestParameters['analyzeEmailRequest'] == null) {
            throw new runtime.RequiredError(
                'analyzeEmailRequest',
                'Required parameter "analyzeEmailRequest" was null or undefined when calling analyzeEmail().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-opportify-token"] = await this.configuration.apiKey("x-opportify-token"); // opportifyToken authentication
        }

        let urlPath = `/email/analyze`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AnalyzeEmailRequestToJSON(requestParameters['analyzeEmailRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnalyzeEmail200ResponseFromJSON(jsonValue));
    }

    /**
     * The **Analyze Email** endpoint validates an email address and returns its deliverability status, provider details, and potential corrections. This endpoint is ideal for ensuring accurate email data…
     * Analyze Email
     */
    async analyzeEmail(requestParameters: AnalyzeEmailOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyzeEmail200Response> {
        const response = await this.analyzeEmailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The **Batch Analyze Emails** endpoint enables processing of large volumes of email addresses asynchronously. This endpoint accepts various input formats and returns a job ID for tracking the analysis…
     * Batch Analyze Emails
     */
    async batchAnalyzeEmailsRaw(requestParameters: BatchAnalyzeEmailsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchAnalyzeEmails202Response>> {
        if (requestParameters['batchAnalyzeEmailsRequest'] == null) {
            throw new runtime.RequiredError(
                'batchAnalyzeEmailsRequest',
                'Required parameter "batchAnalyzeEmailsRequest" was null or undefined when calling batchAnalyzeEmails().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-opportify-token"] = await this.configuration.apiKey("x-opportify-token"); // opportifyToken authentication
        }

        let urlPath = `/email/batch`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BatchAnalyzeEmailsRequestToJSON(requestParameters['batchAnalyzeEmailsRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BatchAnalyzeEmails202ResponseFromJSON(jsonValue));
    }

    /**
     * The **Batch Analyze Emails** endpoint enables processing of large volumes of email addresses asynchronously. This endpoint accepts various input formats and returns a job ID for tracking the analysis…
     * Batch Analyze Emails
     */
    async batchAnalyzeEmails(requestParameters: BatchAnalyzeEmailsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchAnalyzeEmails202Response> {
        const response = await this.batchAnalyzeEmailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The **Create Email Batch Export** endpoint allows you to request a custom export of completed batch analysis results. You can apply filters, select specific columns, and choose the output format (CSV…
     * Create Email Batch Export
     */
    async createEmailBatchExportRaw(requestParameters: CreateEmailBatchExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportCreatedResponse>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling createEmailBatchExport().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-opportify-token"] = await this.configuration.apiKey("x-opportify-token"); // opportifyToken authentication
        }

        let urlPath = `/email/batch/{jobId}/exports`;
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
     * The **Create Email Batch Export** endpoint allows you to request a custom export of completed batch analysis results. You can apply filters, select specific columns, and choose the output format (CSV…
     * Create Email Batch Export
     */
    async createEmailBatchExport(requestParameters: CreateEmailBatchExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportCreatedResponse> {
        const response = await this.createEmailBatchExportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The **Get Email Batch Export Status** endpoint retrieves the status and download URL for a previously requested export job.
     * Get Email Batch Export Status
     */
    async getEmailBatchExportStatusRaw(requestParameters: GetEmailBatchExportStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportStatusResponse>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling getEmailBatchExportStatus().'
            );
        }

        if (requestParameters['exportId'] == null) {
            throw new runtime.RequiredError(
                'exportId',
                'Required parameter "exportId" was null or undefined when calling getEmailBatchExportStatus().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-opportify-token"] = await this.configuration.apiKey("x-opportify-token"); // opportifyToken authentication
        }

        let urlPath = `/email/batch/{jobId}/exports/{exportId}`;
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
     * The **Get Email Batch Export Status** endpoint retrieves the status and download URL for a previously requested export job.
     * Get Email Batch Export Status
     */
    async getEmailBatchExportStatus(requestParameters: GetEmailBatchExportStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportStatusResponse> {
        const response = await this.getEmailBatchExportStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The **Get Email Batch Status** endpoint allows you to retrieve the current status of a previously submitted batch processing job. Use this endpoint to track the progress of your batch email analysis…
     * Get Email Batch Status
     */
    async getEmailBatchStatusRaw(requestParameters: GetEmailBatchStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetEmailBatchStatus200Response>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling getEmailBatchStatus().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-opportify-token"] = await this.configuration.apiKey("x-opportify-token"); // opportifyToken authentication
        }

        let urlPath = `/email/batch/{jobId}`;
        urlPath = urlPath.replace(`{${"jobId"}}`, encodeURIComponent(String(requestParameters['jobId'])));

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetEmailBatchStatus200ResponseFromJSON(jsonValue));
    }

    /**
     * The **Get Email Batch Status** endpoint allows you to retrieve the current status of a previously submitted batch processing job. Use this endpoint to track the progress of your batch email analysis…
     * Get Email Batch Status
     */
    async getEmailBatchStatus(requestParameters: GetEmailBatchStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetEmailBatchStatus200Response> {
        const response = await this.getEmailBatchStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
