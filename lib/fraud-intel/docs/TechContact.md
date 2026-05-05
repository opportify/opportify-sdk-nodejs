
# TechContact

Tech contact details.

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
import type { TechContact } from ''

// TODO: Update the object below with actual values
const example = {
  "contactId": TECH123,
  "contactType": tech,
  "name": Tech Desk,
  "address": ["456 Tech Lane"],
  "phone": ["+1-800-TECH-123"],
  "fax": ["+1-800-TECH-456"],
  "email": ["tech@organization.com"],
} satisfies TechContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TechContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


