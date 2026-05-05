
# FraudAnalyzeContentSection

Analysis results for a single content section (names, subject, or message).

## Properties

Name | Type
------------ | -------------
`gibberishScore` | number
`isGibberish` | boolean
`spamScore` | number
`isSpam` | boolean
`language` | string

## Example

```typescript
import type { FraudAnalyzeContentSection } from ''

// TODO: Update the object below with actual values
const example = {
  "gibberishScore": 0.12,
  "isGibberish": false,
  "spamScore": 0.05,
  "isSpam": false,
  "language": en,
} satisfies FraudAnalyzeContentSection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FraudAnalyzeContentSection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


