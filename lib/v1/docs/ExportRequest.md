
# ExportRequest

Request body for creating a batch export.

## Properties

Name | Type
------------ | -------------
`exportType` | string
`filters` | { [key: string]: any; }
`columns` | Array&lt;string&gt;

## Example

```typescript
import type { ExportRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "exportType": csv,
  "filters": {"isDeliverable":"yes","riskReport.score":{"min":0,"max":400},"emailProvider":["gmail","yahoo","outlook"]},
  "columns": ["emailAddress","emailProvider","riskReport.score","isDeliverable"],
} satisfies ExportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


