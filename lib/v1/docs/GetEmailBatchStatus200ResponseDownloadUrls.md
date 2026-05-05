
# GetEmailBatchStatus200ResponseDownloadUrls

Available download URLs for the batch job results. Only present when status is \"COMPLETED\".

## Properties

Name | Type
------------ | -------------
`csv` | string
`json` | string
`csvCompressed` | string
`jsonCompressed` | string

## Example

```typescript
import type { GetEmailBatchStatus200ResponseDownloadUrls } from ''

// TODO: Update the object below with actual values
const example = {
  "csv": https://batch-object.opportify.ai/output/job-id.csv?X-Amz-Algorithm=...,
  "json": https://batch-object.opportify.ai/output/job-id.json?X-Amz-Algorithm=...,
  "csvCompressed": https://batch-object.opportify.ai/output/job-id.csv.gz?X-Amz-Algorithm=...,
  "jsonCompressed": https://batch-object.opportify.ai/output/job-id.json.gz?X-Amz-Algorithm=...,
} satisfies GetEmailBatchStatus200ResponseDownloadUrls

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEmailBatchStatus200ResponseDownloadUrls
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


