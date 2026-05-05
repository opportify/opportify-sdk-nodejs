
# AnalyzeIp400Response


## Properties

Name | Type
------------ | -------------
`errorMessage` | string
`errorCode` | string

## Example

```typescript
import type { AnalyzeIp400Response } from ''

// TODO: Update the object below with actual values
const example = {
  "errorMessage": The JSON request doesn’t seem to be correct or valid.,
  "errorCode": MALFORMED_REQUEST,
} satisfies AnalyzeIp400Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeIp400Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


