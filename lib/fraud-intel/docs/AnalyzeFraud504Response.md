
# AnalyzeFraud504Response


## Properties

Name | Type
------------ | -------------
`errorMessage` | string
`errorCode` | string

## Example

```typescript
import type { AnalyzeFraud504Response } from ''

// TODO: Update the object below with actual values
const example = {
  "errorMessage": An upstream dependency did not respond in time.,
  "errorCode": UPSTREAM_TIMEOUT,
} satisfies AnalyzeFraud504Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraud504Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


