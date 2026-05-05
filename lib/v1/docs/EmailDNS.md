
# EmailDNS

DNS details for an email address domain.

## Properties

Name | Type
------------ | -------------
`mx` | Array&lt;string&gt;
`spfValid` | boolean
`dkimConfigured` | boolean
`dmarcValid` | boolean
`mxRelay` | string
`mxRelayCategory` | string

## Example

```typescript
import type { EmailDNS } from ''

// TODO: Update the object below with actual values
const example = {
  "mx": ["0 mx1.example.com","10 mx2.example.com"],
  "spfValid": true,
  "dkimConfigured": true,
  "dmarcValid": false,
  "mxRelay": mx1.example.com,
  "mxRelayCategory": google,
} satisfies EmailDNS

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailDNS
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


