# FraudProtectionApi

All URIs are relative to *https://api.opportify.ai/intel/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyzeFraud**](FraudProtectionApi.md#analyzefraudoperation) | **POST** /fraud/analyze | Analyze |



## analyzeFraud

> AnalyzeFraud200Response analyzeFraud(analyzeFraudRequest)

Analyze

The **Analyze Fraud** endpoint performs a synchronous, multi-signal fraud risk assessment on a form submission. Send mapped submission fields and receive a complete risk report in a single HTTP call.

### Example

```ts
import {
  Configuration,
  FraudProtectionApi,
} from '';
import type { AnalyzeFraudOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: opportifyToken
    apiKey: "YOUR API KEY",
  });
  const api = new FraudProtectionApi(config);

  const body = {
    // AnalyzeFraudRequest
    analyzeFraudRequest: ...,
  } satisfies AnalyzeFraudOperationRequest;

  try {
    const data = await api.analyzeFraud(body);
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
| **analyzeFraudRequest** | [AnalyzeFraudRequest](AnalyzeFraudRequest.md) |  | |

### Return type

[**AnalyzeFraud200Response**](AnalyzeFraud200Response.md)

### Authorization

[opportifyToken](../README.md#opportifyToken)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Fraud analysis completed. |  -  |
| **400** | Malformed or invalid request. |  -  |
| **402** | Quota exceeded. |  -  |
| **403** | Authentication or authorization failure. |  -  |
| **429** | Rate limit exceeded. |  -  |
| **500** | Internal server error. |  -  |
| **502** | Upstream dependency failure. |  -  |
| **504** | Upstream dependency timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

