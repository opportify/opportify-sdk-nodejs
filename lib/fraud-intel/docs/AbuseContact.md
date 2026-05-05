
# AbuseContact

Abuse contact details.

## Properties

Name | Type
------------ | -------------
`contactId` | string
`contactType` | string
`name` | string
`address` | Array&lt;string&gt;
`phone` | Array&lt;string&gt;
`fax` | Array&lt;string&gt;
`email` | Array&lt;string&gt;

## Example

```typescript
import type { AbuseContact } from ''

// TODO: Update the object below with actual values
const example = {
  "contactId": ABUSE123,
  "contactType": abuse,
  "name": Abuse Desk,
  "address": ["123 Abuse St, Suite 100"],
  "phone": ["+1-800-ABUSE-123"],
  "fax": ["+1-800-ABUSE-456"],
  "email": ["abuse@organization.com"],
} satisfies AbuseContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AbuseContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


