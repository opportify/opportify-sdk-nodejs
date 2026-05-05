
# BatchAnalyzeEmailsRequest


## Properties

Name | Type
------------ | -------------
`emails` | Array&lt;string&gt;
`name` | string
`enableAI` | boolean
`enableAutoCorrection` | boolean

## Example

```typescript
import type { BatchAnalyzeEmailsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "emails": ["first-email@domain.com","second-email@domain.com"],
  "name": my list of emails,
  "enableAI": true,
  "enableAutoCorrection": true,
} satisfies BatchAnalyzeEmailsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchAnalyzeEmailsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


