
# MALFORMEDREQUEST2


## Properties

Name | Type
------------ | -------------
`errorMessage` | string
`errorCode` | string

## Example

```typescript
import type { MALFORMEDREQUEST2 } from ''

// TODO: Update the object below with actual values
const example = {
  "errorMessage": The JSON request doesn’t seem to be correct or valid.,
  "errorCode": MALFORMED_REQUEST,
} satisfies MALFORMEDREQUEST2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MALFORMEDREQUEST2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


