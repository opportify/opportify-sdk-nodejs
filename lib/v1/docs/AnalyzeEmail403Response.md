
# AnalyzeEmail403Response


## Properties

Name | Type
------------ | -------------
`errorMessage` | string
`errorCode` | string

## Example

```typescript
import type { AnalyzeEmail403Response } from ''

// TODO: Update the object below with actual values
const example = {
  "errorMessage": Your quota has been exceeded. Please upgrade your plan or wait for the quota to reset.,
  "errorCode": QUOTA_EXCEEDED,
} satisfies AnalyzeEmail403Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeEmail403Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


