
# AnalyzeFraud200ResponseSourcesIp

Full IP Insights response. Present when `userIp` was supplied.

## Properties

Name | Type
------------ | -------------
`ipAddress` | string
`ipAddressNumber` | number
`ipType` | string
`ipCidr` | string
`connectionType` | string
`hostReverse` | string
`geo` | [Geo](Geo.md)
`whois` | [Whois](Whois.md)
`trustedProvider` | [TrustedProvider](TrustedProvider.md)
`blocklisted` | [BlockListed](BlockListed.md)
`riskReport` | [RiskReportIp](RiskReportIp.md)

## Example

```typescript
import type { AnalyzeFraud200ResponseSourcesIp } from ''

// TODO: Update the object below with actual values
const example = {
  "ipAddress": 203.0.113.42,
  "ipAddressNumber": 3405803564,
  "ipType": IPv4,
  "ipCidr": 203.0.113.0/24,
  "connectionType": wired,
  "hostReverse": 10.184.114.89.rev.providerhost.com,
  "geo": null,
  "whois": null,
  "trustedProvider": null,
  "blocklisted": null,
  "riskReport": null,
} satisfies AnalyzeFraud200ResponseSourcesIp

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraud200ResponseSourcesIp
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


