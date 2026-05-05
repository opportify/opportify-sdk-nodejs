
# AnalyzeFraud200ResponseSourcesGeo

Cross-source geographic consistency check. Present when at least two geographic signals are available (IP geolocation, email domain country, declared `country` field, phone country, or session…

## Properties

Name | Type
------------ | -------------
`consistent` | boolean
`signals` | [AnalyzeFraud200ResponseSourcesGeoSignals](AnalyzeFraud200ResponseSourcesGeoSignals.md)
`riskReport` | [RiskReport](RiskReport.md)

## Example

```typescript
import type { AnalyzeFraud200ResponseSourcesGeo } from ''

// TODO: Update the object below with actual values
const example = {
  "consistent": true,
  "signals": null,
  "riskReport": null,
} satisfies AnalyzeFraud200ResponseSourcesGeo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraud200ResponseSourcesGeo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


