
# AnalyzeFraud200ResponseSourcesVelocity

Submission rate per identifier type over sliding windows. Always evaluated when identifiers are provided.

## Properties

Name | Type
------------ | -------------
`emailSubmissions` | [FraudVelocityWindow](FraudVelocityWindow.md)
`ipSubmissions` | [FraudVelocityWindow](FraudVelocityWindow.md)
`phoneSubmissions` | [FraudVelocityWindow](FraudVelocityWindow.md)
`anomaly` | boolean
`riskReport` | [RiskReport](RiskReport.md)

## Example

```typescript
import type { AnalyzeFraud200ResponseSourcesVelocity } from ''

// TODO: Update the object below with actual values
const example = {
  "emailSubmissions": null,
  "ipSubmissions": null,
  "phoneSubmissions": null,
  "anomaly": false,
  "riskReport": null,
} satisfies AnalyzeFraud200ResponseSourcesVelocity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraud200ResponseSourcesVelocity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


