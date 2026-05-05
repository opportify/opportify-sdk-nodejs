
# AnalyzeEmail200Response


## Properties

Name | Type
------------ | -------------
`emailAddress` | string
`emailProvider` | string
`emailType` | string
`isDeliverable` | string
`isCatchAll` | boolean
`isMailboxFull` | boolean
`isReachable` | boolean
`isFormatValid` | boolean
`emailCorrection` | string
`emailAutoCorrectedFrom` | string
`addressSignals` | [AddressSignals](AddressSignals.md)
`emailDNS` | [EmailDNS](EmailDNS.md)
`riskReport` | [RiskReportEmail](RiskReportEmail.md)
`domain` | [EmailDomain](EmailDomain.md)

## Example

```typescript
import type { AnalyzeEmail200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "emailAddress": some-email@domain.com,
  "emailProvider": google,
  "emailType": free,
  "isDeliverable": yes,
  "isCatchAll": false,
  "isMailboxFull": true,
  "isReachable": true,
  "isFormatValid": true,
  "emailCorrection": some-email@domain.com,
  "emailAutoCorrectedFrom": some-email@domian.com,
  "addressSignals": null,
  "emailDNS": null,
  "riskReport": null,
  "domain": null,
} satisfies AnalyzeEmail200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeEmail200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


