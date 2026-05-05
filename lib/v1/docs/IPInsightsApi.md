# IPInsightsApi

All URIs are relative to *https://api.opportify.ai/insights/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyzeIp**](IPInsightsApi.md#analyzeipoperation) | **POST** /ip/analyze | Analyze IP |
| [**batchAnalyzeIps**](IPInsightsApi.md#batchanalyzeipsoperation) | **POST** /ip/batch | Batch Analyze IPs |
| [**createIpBatchExport**](IPInsightsApi.md#createipbatchexport) | **POST** /ip/batch/{jobId}/exports | Create IP Batch Export |
| [**getIpBatchExportStatus**](IPInsightsApi.md#getipbatchexportstatus) | **GET** /ip/batch/{jobId}/exports/{exportId} | Get IP Batch Export Status |
| [**getIpBatchStatus**](IPInsightsApi.md#getipbatchstatus) | **GET** /ip/batch/{jobId} | Get IP Batch Status |



## analyzeIp

> AnalyzeIp200Response analyzeIp(analyzeIpRequest)

Analyze IP

The **Analyze IP** endpoint provides comprehensive insights into a specified IP address, leveraging AI-driven analysis to deliver actionable intelligence. This includes connection type…

### Example

```ts
import {
  Configuration,
  IPInsightsApi,
} from '';
import type { AnalyzeIpOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: opportifyToken
    apiKey: "YOUR API KEY",
  });
  const api = new IPInsightsApi(config);

  const body = {
    // AnalyzeIpRequest
    analyzeIpRequest: ...,
  } satisfies AnalyzeIpOperationRequest;

  try {
    const data = await api.analyzeIp(body);
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
| **analyzeIpRequest** | [AnalyzeIpRequest](AnalyzeIpRequest.md) |  | |

### Return type

[**AnalyzeIp200Response**](AnalyzeIp200Response.md)

### Authorization

[opportifyToken](../README.md#opportifyToken)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The IP analysis is successful. |  -  |
| **400** | Bad Request. Either the request is improperly formatted, or the IP is invalid. |  -  |
| **404** | IP address not found in any RIR database. |  -  |
| **403** | Forbidden. Authorization errors from the API. |  -  |
| **500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## batchAnalyzeIps

> BatchAnalyzeIps202Response batchAnalyzeIps(batchAnalyzeIpsRequest)

Batch Analyze IPs

The **Batch Analyze IPs** endpoint enables processing of large volumes of IP addresses asynchronously. This endpoint accepts various input formats and returns a job ID for tracking the analysis…

### Example

```ts
import {
  Configuration,
  IPInsightsApi,
} from '';
import type { BatchAnalyzeIpsOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: opportifyToken
    apiKey: "YOUR API KEY",
  });
  const api = new IPInsightsApi(config);

  const body = {
    // BatchAnalyzeIpsRequest
    batchAnalyzeIpsRequest: ...,
  } satisfies BatchAnalyzeIpsOperationRequest;

  try {
    const data = await api.batchAnalyzeIps(body);
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
| **batchAnalyzeIpsRequest** | [BatchAnalyzeIpsRequest](BatchAnalyzeIpsRequest.md) |  | |

### Return type

[**BatchAnalyzeIps202Response**](BatchAnalyzeIps202Response.md)

### Authorization

[opportifyToken](../README.md#opportifyToken)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`, `text/plain`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Batch job accepted for processing. |  -  |
| **400** | Bad Request. Either the request is improperly formatted, or contains invalid IP addresses. |  -  |
| **401** | Unauthorized. Invalid or missing authentication token. |  -  |
| **402** | Plan limitations or quota exceeded. |  -  |
| **403** | Forbidden. Authorization errors from the API. |  -  |
| **413** | Payload Too Large. The request exceeds the 3MB size limit. |  -  |
| **429** | Too Many Requests. Rate limit exceeded. |  -  |
| **500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createIpBatchExport

> ExportCreatedResponse createIpBatchExport(jobId, exportRequest)

Create IP Batch Export

The **Create IP Batch Export** endpoint allows you to request a custom export of completed batch analysis results. You can apply filters, select specific columns, and choose the output format (CSV or…

### Example

```ts
import {
  Configuration,
  IPInsightsApi,
} from '';
import type { CreateIpBatchExportRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: opportifyToken
    apiKey: "YOUR API KEY",
  });
  const api = new IPInsightsApi(config);

  const body = {
    // string | The unique identifier of the completed batch job. Format: uuid. Example: \"52b36b1f-0c21-41fa-8a4f-423d25a9a8e2\".
    jobId: 52b36b1f-0c21-41fa-8a4f-423d25a9a8e2,
    // ExportRequest (optional)
    exportRequest: ...,
  } satisfies CreateIpBatchExportRequest;

  try {
    const data = await api.createIpBatchExport(body);
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
| **jobId** | `string` | The unique identifier of the completed batch job. Format: uuid. Example: \&quot;52b36b1f-0c21-41fa-8a4f-423d25a9a8e2\&quot;. | [Defaults to `undefined`] |
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


## getIpBatchExportStatus

> ExportStatusResponse getIpBatchExportStatus(jobId, exportId)

Get IP Batch Export Status

The **Get IP Batch Export Status** endpoint retrieves the status and download URL for a previously requested export job.

### Example

```ts
import {
  Configuration,
  IPInsightsApi,
} from '';
import type { GetIpBatchExportStatusRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: opportifyToken
    apiKey: "YOUR API KEY",
  });
  const api = new IPInsightsApi(config);

  const body = {
    // string | The unique identifier of the batch job. Format: uuid. Example: \"52b36b1f-0c21-41fa-8a4f-423d25a9a8e2\".
    jobId: 52b36b1f-0c21-41fa-8a4f-423d25a9a8e2,
    // string | The unique identifier of the export job. Format: uuid. Example: \"3b90d156-a0d8-4630-8230-f59e9a4e9e33\".
    exportId: 3b90d156-a0d8-4630-8230-f59e9a4e9e33,
  } satisfies GetIpBatchExportStatusRequest;

  try {
    const data = await api.getIpBatchExportStatus(body);
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
| **jobId** | `string` | The unique identifier of the batch job. Format: uuid. Example: \&quot;52b36b1f-0c21-41fa-8a4f-423d25a9a8e2\&quot;. | [Defaults to `undefined`] |
| **exportId** | `string` | The unique identifier of the export job. Format: uuid. Example: \&quot;3b90d156-a0d8-4630-8230-f59e9a4e9e33\&quot;. | [Defaults to `undefined`] |

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


## getIpBatchStatus

> GetIpBatchStatus200Response getIpBatchStatus(jobId)

Get IP Batch Status

The **Get IP Batch Status** endpoint allows you to retrieve the current status of a previously submitted batch processing job. Use this endpoint to track the progress of your batch IP analysis…

### Example

```ts
import {
  Configuration,
  IPInsightsApi,
} from '';
import type { GetIpBatchStatusRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: opportifyToken
    apiKey: "YOUR API KEY",
  });
  const api = new IPInsightsApi(config);

  const body = {
    // string | The unique identifier of the batch job to retrieve status for.
    jobId: uuid-12345-67890,
  } satisfies GetIpBatchStatusRequest;

  try {
    const data = await api.getIpBatchStatus(body);
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

[**GetIpBatchStatus200Response**](GetIpBatchStatus200Response.md)

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

