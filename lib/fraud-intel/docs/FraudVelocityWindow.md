
# FraudVelocityWindow

Submission counts for a single identifier type over four sliding time windows.

## Properties

Name | Type
------------ | -------------
`last60s` | number
`last300s` | number
`last3600s` | number
`last86400s` | number

## Example

```typescript
import type { FraudVelocityWindow } from ''

// TODO: Update the object below with actual values
const example = {
  "last60s": 1,
  "last300s": 4,
  "last3600s": 18,
  "last86400s": 42,
} satisfies FraudVelocityWindow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FraudVelocityWindow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


