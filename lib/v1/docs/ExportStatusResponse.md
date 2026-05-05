
# ExportStatusResponse

Response containing the status and details of an export job.

## Properties

Name | Type
------------ | -------------
`jobId` | string
`exportId` | string
`status` | string
`format` | string
`filters` | [Array&lt;ExportFilter&gt;](ExportFilter.md)
`columns` | Array&lt;string&gt;
`requestedAt` | string
`updatedAt` | string
`downloadUrl` | string
`expiresAt` | string
`resultSizeBytes` | number
`errorCode` | string
`errorMessage` | string

## Example

```typescript
import type { ExportStatusResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "jobId": 84d22c8b-2cb6-4606-bfb1-361244a097e4,
  "exportId": 6f8d88ef-0896-4f69-90cd-7cc6ce5e6ddf,
  "status": COMPLETED,
  "format": csv,
  "filters": null,
  "columns": ["emailAddress","emailProvider","riskReport.score"],
  "requestedAt": 2025-11-07T10:30:00.000Z,
  "updatedAt": 2025-11-07T10:32:15.000Z,
  "downloadUrl": https://opportify-batch-analysis.s3.amazonaws.com/...,
  "expiresAt": 2025-11-07T14:32:15.000Z,
  "resultSizeBytes": 45120,
  "errorCode": null,
  "errorMessage": null,
} satisfies ExportStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


