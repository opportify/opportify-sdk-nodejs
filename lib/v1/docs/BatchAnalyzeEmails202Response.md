
# BatchAnalyzeEmails202Response


## Properties

Name | Type
------------ | -------------
`jobId` | string
`name` | string
`status` | string
`statusDescription` | string

## Example

```typescript
import type { BatchAnalyzeEmails202Response } from ''

// TODO: Update the object below with actual values
const example = {
  "jobId": uuid-12345-67890,
  "name": my list of emails,
  "status": QUEUED,
  "statusDescription": ,
} satisfies BatchAnalyzeEmails202Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchAnalyzeEmails202Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


