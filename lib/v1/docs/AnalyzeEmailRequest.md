
# AnalyzeEmailRequest


## Properties

Name | Type
------------ | -------------
`email` | string
`enableAI` | boolean
`enableAutoCorrection` | boolean
`enableDomainEnrichment` | boolean

## Example

```typescript
import type { AnalyzeEmailRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "email": my-email@company.com,
  "enableAI": true,
  "enableAutoCorrection": true,
  "enableDomainEnrichment": true,
} satisfies AnalyzeEmailRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeEmailRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


