
# Whois

This object provides sanitized and normalized WHOIS information for an IP address, including details about the Regional Internet Registry (RIR), Autonomous System Number (ASN), organization, and…

## Properties

Name | Type
------------ | -------------
`rir` | string
`asn` | [Asn](Asn.md)
`organization` | [Organization](Organization.md)
`abuseContact` | [AbuseContact](AbuseContact.md)
`adminContact` | [AdminContact](AdminContact.md)
`techContact` | [TechContact](TechContact.md)

## Example

```typescript
import type { Whois } from ''

// TODO: Update the object below with actual values
const example = {
  "rir": ARIN,
  "asn": null,
  "organization": null,
  "abuseContact": null,
  "adminContact": null,
  "techContact": null,
} satisfies Whois

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Whois
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


