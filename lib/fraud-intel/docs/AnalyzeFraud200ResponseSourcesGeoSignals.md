
# AnalyzeFraud200ResponseSourcesGeoSignals

ISO 3166-1 alpha-2 country codes from each geographic signal. `null` when the signal is unavailable.

## Properties

Name | Type
------------ | -------------
`ipCountry` | string
`phoneCountry` | string
`emailDomainCountry` | string
`sessionCountry` | string
`declaredCountry` | string

## Example

```typescript
import type { AnalyzeFraud200ResponseSourcesGeoSignals } from ''

// TODO: Update the object below with actual values
const example = {
  "ipCountry": US,
  "phoneCountry": US,
  "emailDomainCountry": US,
  "sessionCountry": null,
  "declaredCountry": GB,
} satisfies AnalyzeFraud200ResponseSourcesGeoSignals

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraud200ResponseSourcesGeoSignals
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


