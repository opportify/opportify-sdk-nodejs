
# IPVALIDATIONFAILED


## Properties

Name | Type
------------ | -------------
`errorMessage` | string
`errorCode` | string

## Example

```typescript
import type { IPVALIDATIONFAILED } from ''

// TODO: Update the object below with actual values
const example = {
  "errorMessage": The input provided is not a valid IPv4 or IPv6 address.,
  "errorCode": IP_VALIDATION_FAILED,
} satisfies IPVALIDATIONFAILED

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IPVALIDATIONFAILED
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


