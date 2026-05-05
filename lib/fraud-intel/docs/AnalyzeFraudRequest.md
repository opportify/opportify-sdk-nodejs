
# AnalyzeFraudRequest


## Properties

Name | Type
------------ | -------------
`email` | string
`phone1` | string
`phone2` | string
`userIp` | string
`firstName` | string
`lastName` | string
`fullName` | string
`username` | string
`companyName` | string
`website` | string
`subject` | string
`message` | string
`address1` | string
`address2` | string
`city` | string
`region` | string
`country` | string
`postalCode` | string
`origin` | string
`submissionType` | string
`formData` | { [key: string]: any; }
`opportifyToken` | string
`opportifyFormUUID` | string

## Example

```typescript
import type { AnalyzeFraudRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "email": john.doe@example.com,
  "phone1": +14155551234,
  "phone2": +14155559876,
  "userIp": 203.0.113.42,
  "firstName": John,
  "lastName": Doe,
  "fullName": John Doe,
  "username": johndoe_92,
  "companyName": Acme Corp,
  "website": https://acme.example.com,
  "subject": Partnership inquiry,
  "message": Hello, I am interested in your services...,
  "address1": 123 Main St,
  "address2": Suite 400,
  "city": San Francisco,
  "region": CA,
  "country": US,
  "postalCode": 94105,
  "origin": www.example.com,
  "submissionType": registration,
  "formData": {"referral_code":"ABC123","newsletter_opt_in":"true"},
  "opportifyToken": opptok_v1.YWJjMTIz.ZGVmNDU2.Z2hpNzg5,
  "opportifyFormUUID": f47ac10b-58cc-4372-a567-0e02b2c3d479,
} satisfies AnalyzeFraudRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeFraudRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


