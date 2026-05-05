
# BlockListed

The `BlockListed` object provides detailed information about whether an IP address is listed in known blocklists and related data.

## Properties

Name | Type
------------ | -------------
`isBlockListed` | boolean
`sources` | number
`activeReports` | number
`lastDetected` | string

## Example

```typescript
import type { BlockListed } from ''

// TODO: Update the object below with actual values
const example = {
  "isBlockListed": false,
  "sources": 0,
  "activeReports": 0,
  "lastDetected": 2022-01-01T12:00:00Z,
} satisfies BlockListed

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BlockListed
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


