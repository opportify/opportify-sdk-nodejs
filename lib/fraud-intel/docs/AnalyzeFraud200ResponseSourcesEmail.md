
# AnalyzeFraud200ResponseSourcesEmail

Full Email Insights response. Present when `email` was supplied.

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
import type { AnalyzeFraud200ResponseSourcesEmail } from ''

// TODO: Update the object below with actual values
const example = {
  "emailAddress": some-email@domain.com,
  "emailProvider": google,
  "emailType": free,
  "isDeliverable": yes,
  "isCatchAll": false,
  "isMailboxFull": false,
  "isReachable": true,
  "isFormatValid": true,
  "emailCorrection": some-email@domain.com,
  "emailAutoCorrectedFrom": some-email@domian.com,
  "addressSignals": null,
  "emailDNS": null,
  "riskReport": null,
  "domain": null,
} satisfies AnalyzeFraud200ResponseSourcesEmail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraud200ResponseSourcesEmail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


