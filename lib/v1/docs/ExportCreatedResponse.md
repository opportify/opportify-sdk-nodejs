
# ExportCreatedResponse

Response when an export request is accepted.

## Properties

Name | Type
------------ | -------------
`jobId` | string
`exportId` | string
`status` | string

## Example

```typescript
import type { ExportCreatedResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "jobId": 84d22c8b-2cb6-4606-bfb1-361244a097e4,
  "exportId": 6f8d88ef-0896-4f69-90cd-7cc6ce5e6ddf,
  "status": QUEUED,
} satisfies ExportCreatedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportCreatedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


