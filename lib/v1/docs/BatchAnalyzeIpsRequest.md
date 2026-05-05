
# BatchAnalyzeIpsRequest


## Properties

Name | Type
------------ | -------------
`ips` | Array&lt;string&gt;
`name` | string
`enableAI` | boolean

## Example

```typescript
import type { BatchAnalyzeIpsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "ips": ["192.168.0.1","10.0.0.1","172.16.0.1"],
  "name": my list of IPs,
  "enableAI": true,
} satisfies BatchAnalyzeIpsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchAnalyzeIpsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


