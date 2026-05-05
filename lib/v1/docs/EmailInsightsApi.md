# EmailInsightsApi

All URIs are relative to *https://api.opportify.ai/insights/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyzeEmail**](EmailInsightsApi.md#analyzeemailoperation) | **POST** /email/analyze | Analyze Email |
| [**batchAnalyzeEmails**](EmailInsightsApi.md#batchanalyzeemailsoperation) | **POST** /email/batch | Batch Analyze Emails |
| [**createEmailBatchExport**](EmailInsightsApi.md#createemailbatchexport) | **POST** /email/batch/{jobId}/exports | Create Email Batch Export |
| [**getEmailBatchExportStatus**](EmailInsightsApi.md#getemailbatchexportstatus) | **GET** /email/batch/{jobId}/exports/{exportId} | Get Email Batch Export Status |
| [**getEmailBatchStatus**](EmailInsightsApi.md#getemailbatchstatus) | **GET** /email/batch/{jobId} | Get Email Batch Status |



## analyzeEmail

> AnalyzeEmail200Response analyzeEmail(analyzeEmailRequest)

Analyze Email

The **Analyze Email** endpoint validates an email address and returns its deliverability status, provider details, and potential corrections. This endpoint is ideal for ensuring accurate email data…

### Example

```ts
import {
  Configuration,
  EmailInsightsApi,
} from '';
import type { AnalyzeEmailOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: opportifyToken
    apiKey: "YOUR API KEY",
  });
  const api = new EmailInsightsApi(config);

  const body = {
    // AnalyzeEmailRequest
    analyzeEmailRequest: ...,
  } satisfies AnalyzeEmailOperationRequest;

  try {
    const data = await api.analyzeEmail(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **analyzeEmailRequest** | [AnalyzeEmailRequest](AnalyzeEmailRequest.md) |  | |

### Return type

[**AnalyzeEmail200Response**](AnalyzeEmail200Response.md)

### Authorization

[opportifyToken](../README.md#opportifyToken)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Email validation successful. |  -  |
| **400** | Bad Request. Either the request is improperly formatted, or the email is invalid. |  -  |
| **403** | Forbidden. Authorization errors from the API. |  -  |
| **500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## batchAnalyzeEmails

> BatchAnalyzeEmails202Response batchAnalyzeEmails(batchAnalyzeEmailsRequest)

Batch Analyze Emails

The **Batch Analyze Emails** endpoint enables processing of large volumes of email addresses asynchronously. This endpoint accepts various input formats and returns a job ID for tracking the analysis…

### Example

```ts
import {
  Configuration,
  EmailInsightsApi,
} from '';
import type { BatchAnalyzeEmailsOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: opportifyToken
    apiKey: "YOUR API KEY",
  });
  const api = new EmailInsightsApi(config);

  const body = {
    // BatchAnalyzeEmailsRequest
    batchAnalyzeEmailsRequest: ...,
  } satisfies BatchAnalyzeEmailsOperationRequest;

  try {
    const data = await api.batchAnalyzeEmails(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **batchAnalyzeEmailsRequest** | [BatchAnalyzeEmailsRequest](BatchAnalyzeEmailsRequest.md) |  | |

### Return type

[**BatchAnalyzeEmails202Response**](BatchAnalyzeEmails202Response.md)

### Authorization

[opportifyToken](../README.md#opportifyToken)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`, `text/plain`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Batch job accepted for processing. |  -  |
| **400** | Bad Request. Either the request is improperly formatted, or contains invalid data. |  -  |
| **401** | Unauthorized. Invalid or missing authentication token. |  -  |
| **402** | Plan limitations or quota exceeded. |  -  |
| **403** | Forbidden. Authorization errors from the API. |  -  |
| **413** | Payload Too Large. The request exceeds the 3MB size limit. |  -  |
| **429** | Too Many Requests. Rate limit exceeded. |  -  |
| **500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createEmailBatchExport

> ExportCreatedResponse createEmailBatchExport(jobId, exportRequest)

Create Email Batch Export

The **Create Email Batch Export** endpoint allows you to request a custom export of completed batch analysis results. You can apply filters, select specific columns, and choose the output format (CSV…

### Example

```ts
import {
  Configuration,
  EmailInsightsApi,
} from '';
import type { CreateEmailBatchExportRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: opportifyToken
    apiKey: "YOUR API KEY",
  });
  const api = new EmailInsightsApi(config);

  const body = {
    // string | The unique identifier of the completed batch job. Format: uuid. Example: \"84d22c8b-2cb6-4606-bfb1-361244a097e4\".
    jobId: 84d22c8b-2cb6-4606-bfb1-361244a097e4,
    // ExportRequest (optional)
    exportRequest: ...,
  } satisfies CreateEmailBatchExportRequest;

  try {
    const data = await api.createEmailBatchExport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` | The unique identifier of the completed batch job. Format: uuid. Example: \&quot;84d22c8b-2cb6-4606-bfb1-361244a097e4\&quot;. | [Defaults to `undefined`] |
| **exportRequest** | [ExportRequest](ExportRequest.md) |  | [Optional] |

### Return type

[**ExportCreatedResponse**](ExportCreatedResponse.md)

### Authorization

[opportifyToken](../README.md#opportifyToken)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Export request accepted for processing. |  -  |
| **400** | Bad Request. Invalid request parameters or body. |  -  |
| **403** | Forbidden. Access denied to this job. |  -  |
| **404** | Job not found. |  -  |
| **409** | Conflict. Job not ready for export. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEmailBatchExportStatus

> ExportStatusResponse getEmailBatchExportStatus(jobId, exportId)

Get Email Batch Export Status

The **Get Email Batch Export Status** endpoint retrieves the status and download URL for a previously requested export job.

### Example

```ts
import {
  Configuration,
  EmailInsightsApi,
} from '';
import type { GetEmailBatchExportStatusRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: opportifyToken
    apiKey: "YOUR API KEY",
  });
  const api = new EmailInsightsApi(config);

  const body = {
    // string | The unique identifier of the batch job. Format: uuid. Example: \"84d22c8b-2cb6-4606-bfb1-361244a097e4\".
    jobId: 84d22c8b-2cb6-4606-bfb1-361244a097e4,
    // string | The unique identifier of the export job. Format: uuid. Example: \"6f8d88ef-0896-4f69-90cd-7cc6ce5e6ddf\".
    exportId: 6f8d88ef-0896-4f69-90cd-7cc6ce5e6ddf,
  } satisfies GetEmailBatchExportStatusRequest;

  try {
    const data = await api.getEmailBatchExportStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` | The unique identifier of the batch job. Format: uuid. Example: \&quot;84d22c8b-2cb6-4606-bfb1-361244a097e4\&quot;. | [Defaults to `undefined`] |
| **exportId** | `string` | The unique identifier of the export job. Format: uuid. Example: \&quot;6f8d88ef-0896-4f69-90cd-7cc6ce5e6ddf\&quot;. | [Defaults to `undefined`] |

### Return type

[**ExportStatusResponse**](ExportStatusResponse.md)

### Authorization

[opportifyToken](../README.md#opportifyToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved export status. |  -  |
| **400** | Bad Request. Invalid path parameters. |  -  |
| **403** | Forbidden. Access denied to this job. |  -  |
| **404** | Job or export not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEmailBatchStatus

> GetEmailBatchStatus200Response getEmailBatchStatus(jobId)

Get Email Batch Status

The **Get Email Batch Status** endpoint allows you to retrieve the current status of a previously submitted batch processing job. Use this endpoint to track the progress of your batch email analysis…

### Example

```ts
import {
  Configuration,
  EmailInsightsApi,
} from '';
import type { GetEmailBatchStatusRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: opportifyToken
    apiKey: "YOUR API KEY",
  });
  const api = new EmailInsightsApi(config);

  const body = {
    // string | The unique identifier of the batch job to retrieve status for.
    jobId: uuid-12345-67890,
  } satisfies GetEmailBatchStatusRequest;

  try {
    const data = await api.getEmailBatchStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` | The unique identifier of the batch job to retrieve status for. | [Defaults to `undefined`] |

### Return type

[**GetEmailBatchStatus200Response**](GetEmailBatchStatus200Response.md)

### Authorization

[opportifyToken](../README.md#opportifyToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved batch job status. |  -  |
| **401** | Unauthorized. Invalid or missing authentication token. |  -  |
| **402** | Plan limitations or quota exceeded. |  -  |
| **403** | Forbidden. Authorization errors from the API. |  -  |
| **404** | Job not found. The specified jobId doesn\&#39;t exist or has expired. |  -  |
| **429** | Too Many Requests. Rate limit exceeded. |  -  |
| **500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

