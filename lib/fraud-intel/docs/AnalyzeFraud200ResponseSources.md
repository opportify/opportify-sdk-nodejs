
# AnalyzeFraud200ResponseSources

Per-signal analysis results. `email` and `ip` are present only when the corresponding input field was supplied and omitted otherwise. `content`, `session`, `velocity`, and `geo` are always present as…

## Properties

Name | Type
------------ | -------------
`email` | [AnalyzeFraud200ResponseSourcesEmail](AnalyzeFraud200ResponseSourcesEmail.md)
`ip` | [AnalyzeFraud200ResponseSourcesIp](AnalyzeFraud200ResponseSourcesIp.md)
`content` | [AnalyzeFraud200ResponseSourcesContent](AnalyzeFraud200ResponseSourcesContent.md)
`session` | [AnalyzeFraud200ResponseSourcesSession](AnalyzeFraud200ResponseSourcesSession.md)
`velocity` | [AnalyzeFraud200ResponseSourcesVelocity](AnalyzeFraud200ResponseSourcesVelocity.md)
`geo` | [AnalyzeFraud200ResponseSourcesGeo](AnalyzeFraud200ResponseSourcesGeo.md)

## Example

```typescript
import type { AnalyzeFraud200ResponseSources } from ''

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "ip": null,
  "content": null,
  "session": null,
  "velocity": null,
  "geo": null,
} satisfies AnalyzeFraud200ResponseSources

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraud200ResponseSources
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


