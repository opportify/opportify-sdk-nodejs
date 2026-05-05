
# AnalyzeFraud429Response


## Properties

Name | Type
------------ | -------------
`errorMessage` | string
`errorCode` | string

## Example

```typescript
import type { AnalyzeFraud429Response } from ''

// TODO: Update the object below with actual values
const example = {
  "errorMessage": The account has exceeded the rate limit for API requests.,
  "errorCode": TOO_MANY_REQUESTS,
} satisfies AnalyzeFraud429Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraud429Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


