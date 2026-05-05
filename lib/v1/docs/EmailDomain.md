
# EmailDomain

Summary of the domain-level enrichment returned when enrichment is available and not opted out via `enableDomainEnrichment`.

## Properties

Name | Type
------------ | -------------
`name` | string
`enrichmentAvailable` | boolean
`creationDate` | string
`expirationDate` | string
`updatedDate` | string
`ageYears` | number
`registrar` | string
`isBlockListed` | boolean
`mtaStsStatus` | string
`bimiStatus` | string
`hasVMC` | boolean
`aRecordValid` | boolean
`aRecordReverseHost` | string
`sslValid` | boolean

## Example

```typescript
import type { EmailDomain } from ''

// TODO: Update the object below with actual values
const example = {
  "name": company.com,
  "enrichmentAvailable": true,
  "creationDate": 2014-05-12T00:00:00Z,
  "expirationDate": 2026-05-11T23:59:59Z,
  "updatedDate": 2024-11-01T08:30:00Z,
  "ageYears": 11,
  "registrar": Namecheap, Inc.,
  "isBlockListed": false,
  "mtaStsStatus": present,
  "bimiStatus": present-no-vmc,
  "hasVMC": false,
  "aRecordValid": true,
  "aRecordReverseHost": reverse.company.com,
  "sslValid": true,
} satisfies EmailDomain

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailDomain
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


