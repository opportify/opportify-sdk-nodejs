
# GetEmailBatchStatus200Response


## Properties

Name | Type
------------ | -------------
`jobId` | string
`name` | string
`status` | string
`statusDescription` | string
`progress` | number
`downloadUrls` | [GetEmailBatchStatus200ResponseDownloadUrls](GetEmailBatchStatus200ResponseDownloadUrls.md)

## Example

```typescript
import type { GetEmailBatchStatus200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "jobId": uuid-12345-67890,
  "name": my list of emails,
  "status": COMPLETED,
  "statusDescription": ,
  "progress": 100,
  "downloadUrls": null,
} satisfies GetEmailBatchStatus200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEmailBatchStatus200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


