
# TrustedProvider

Details of trusted providers for an IP address.

## Properties

Name | Type
------------ | -------------
`isKnownProvider` | boolean
`provider` | string
`providerType` | string
`description` | string

## Example

```typescript
import type { TrustedProvider } from ''

// TODO: Update the object below with actual values
const example = {
  "isKnownProvider": true,
  "provider": ZScaler,
  "providerType": ZTNE,
  "description": Zero Trust Network Access for Enterprises,
} satisfies TrustedProvider

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrustedProvider
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


