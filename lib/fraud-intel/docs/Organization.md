
# Organization

Organization details for an IP address.

## Properties

Name | Type
------------ | -------------
`orgId` | string
`orgName` | string
`orgType` | string
`descr` | Array&lt;string&gt;
`address` | Array&lt;string&gt;
`country` | string
`phone` | Array&lt;string&gt;
`fax` | Array&lt;string&gt;
`email` | Array&lt;string&gt;

## Example

```typescript
import type { Organization } from ''

// TODO: Update the object below with actual values
const example = {
  "orgId": GOOGL,
  "orgName": Google LLC,
  "orgType": ISP,
  "descr": ["Leading internet provider","Mountain View, CA"],
  "address": ["1600 Amphitheatre Parkway"],
  "country": US,
  "phone": ["+1-800-555-1234"],
  "fax": ["+1-800-555-5678"],
  "email": ["support@organization.com"],
} satisfies Organization

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Organization
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


