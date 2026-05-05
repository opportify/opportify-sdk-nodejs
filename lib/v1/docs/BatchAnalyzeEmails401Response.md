
# BatchAnalyzeEmails401Response


## Properties

Name | Type
------------ | -------------
`errorMessage` | string
`errorCode` | string

## Example

```typescript
import type { BatchAnalyzeEmails401Response } from ''

// TODO: Update the object below with actual values
const example = {
  "errorMessage": The token provided is either invalid, expired, or missing, preventing access to the resource.,
  "errorCode": INVALID_TOKEN,
} satisfies BatchAnalyzeEmails401Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchAnalyzeEmails401Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


