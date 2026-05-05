
# MALFORMEDREQUEST3


## Properties

Name | Type
------------ | -------------
`errorMessage` | string
`errorCode` | string

## Example

```typescript
import type { MALFORMEDREQUEST3 } from ''

// TODO: Update the object below with actual values
const example = {
  "errorMessage": The request is improperly formatted or missing required data.,
  "errorCode": MALFORMED_REQUEST,
} satisfies MALFORMEDREQUEST3

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MALFORMEDREQUEST3
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


