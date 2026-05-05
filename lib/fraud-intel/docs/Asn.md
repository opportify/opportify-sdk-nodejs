
# Asn

Autonomous System Number details.

## Properties

Name | Type
------------ | -------------
`asnId` | string
`asName` | string
`descr` | Array&lt;string&gt;
`email` | Array&lt;string&gt;

## Example

```typescript
import type { Asn } from ''

// TODO: Update the object below with actual values
const example = {
  "asnId": 15169,
  "asName": GOOGLE,
  "descr": ["Google LLC","Mountain View, CA"],
  "email": ["asn-email@somedomain.com"],
} satisfies Asn

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Asn
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


