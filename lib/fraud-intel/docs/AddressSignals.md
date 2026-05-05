
# AddressSignals

Local-part parsing insights produced during analysis. The service always returns this payload; when a specific signal is unavailable, the corresponding value falls back to `false` or an empty string.

## Properties

Name | Type
------------ | -------------
`tagDetected` | boolean
`tagValue` | string
`normalizedAddress` | string
`isRoleAddress` | boolean
`roleType` | string
`isNoReply` | boolean
`noReplyPattern` | string

## Example

```typescript
import type { AddressSignals } from ''

// TODO: Update the object below with actual values
const example = {
  "tagDetected": true,
  "tagValue": campaign-123,
  "normalizedAddress": noreply@company.com,
  "isRoleAddress": true,
  "roleType": support,
  "isNoReply": true,
  "noReplyPattern": noreply,
} satisfies AddressSignals

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddressSignals
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


