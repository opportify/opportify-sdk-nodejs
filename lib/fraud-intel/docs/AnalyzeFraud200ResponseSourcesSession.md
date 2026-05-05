
# AnalyzeFraud200ResponseSourcesSession

Behavioral session intelligence derived from the Opportify frontend SDK token. Present when `opportifyToken` was supplied.

## Properties

Name | Type
------------ | -------------
`clientId` | string
`sessionId` | string
`fuuid` | string
`tokenAge` | number
`tokenValid` | boolean
`detections` | [Array&lt;FraudAnalyzeSessionDetectionsInner&gt;](FraudAnalyzeSessionDetectionsInner.md)
`score` | number
`level` | string
`factors` | Array&lt;string&gt;
`eventCount` | number
`riskReport` | [RiskReport](RiskReport.md)

## Example

```typescript
import type { AnalyzeFraud200ResponseSourcesSession } from ''

// TODO: Update the object below with actual values
const example = {
  "clientId": d3f1a2b4-8c9e-4a7f-b1c5-2d6e7f8a9b0c,
  "sessionId": s8e7d6c5-b4a3-4f2e-9d1c-0b8a7f6e5d4c,
  "fuuid": f47ac10b-58cc-4372-a567-0e02b2c3d479,
  "tokenAge": 45,
  "tokenValid": true,
  "detections": null,
  "score": 750,
  "level": high,
  "factors": ["session:token-invalid","session:rapid-submit"],
  "eventCount": 12,
  "riskReport": null,
} satisfies AnalyzeFraud200ResponseSourcesSession

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraud200ResponseSourcesSession
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


