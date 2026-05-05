
# AnalyzeFraud200ResponseSourcesContent

Content analysis. `null` when none of `firstName`, `lastName`, `fullName`, `username`, `companyName`, `website`, `subject`, or `message` was supplied.

## Properties

Name | Type
------------ | -------------
`names` | [FraudAnalyzeContentSection](FraudAnalyzeContentSection.md)
`subject` | [FraudAnalyzeContentSection](FraudAnalyzeContentSection.md)
`message` | [FraudAnalyzeContentSection](FraudAnalyzeContentSection.md)
`riskReport` | [RiskReport](RiskReport.md)

## Example

```typescript
import type { AnalyzeFraud200ResponseSourcesContent } from ''

// TODO: Update the object below with actual values
const example = {
  "names": null,
  "subject": null,
  "message": null,
  "riskReport": null,
} satisfies AnalyzeFraud200ResponseSourcesContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraud200ResponseSourcesContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


