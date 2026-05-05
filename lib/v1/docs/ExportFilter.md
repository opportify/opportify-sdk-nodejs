
# ExportFilter

Describes a filter applied to an export.

## Properties

Name | Type
------------ | -------------
`field` | string
`kind` | string
`values` | Array&lt;string&gt;
`min` | number
`max` | number

## Example

```typescript
import type { ExportFilter } from ''

// TODO: Update the object below with actual values
const example = {
  "field": riskReport.score,
  "kind": number-range,
  "values": ["yes","no"],
  "min": 400,
  "max": 800,
} satisfies ExportFilter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportFilter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


