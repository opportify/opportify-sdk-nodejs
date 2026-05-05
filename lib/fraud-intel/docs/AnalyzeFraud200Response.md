
# AnalyzeFraud200Response


## Properties

Name | Type
------------ | -------------
`score` | number
`level` | string
`factors` | Array&lt;string&gt;
`sources` | [AnalyzeFraud200ResponseSources](AnalyzeFraud200ResponseSources.md)

## Example

```typescript
import type { AnalyzeFraud200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "score": 780,
  "level": high,
  "factors": ["email:disposable-domain","ip:blocklisted","velocity:anomaly"],
  "sources": null,
} satisfies AnalyzeFraud200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraud200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


