
# AdminContact

Admin contact details.

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
import type { AdminContact } from ''

// TODO: Update the object below with actual values
const example = {
  "contactId": ADMIN123,
  "contactType": admin,
  "name": Admin Desk,
  "address": ["456 Admin Lane"],
  "phone": ["+1-800-ADMIN-123"],
  "fax": ["+1-800-ADMIN-456"],
  "email": ["admin@organization.com"],
} satisfies AdminContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


