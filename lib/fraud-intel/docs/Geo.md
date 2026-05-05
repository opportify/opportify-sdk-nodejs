
# Geo

Geolocation details are derived by analyzing the provided IP address using data aggregated from a wide range of sources, both official and unofficial (such as user-generated data, open-source, or…

## Properties

Name | Type
------------ | -------------
`continent` | string
`countryCode` | string
`countryName` | string
`countryShortName` | string
`city` | string
`currencyCode` | string
`domainExtension` | string
`languages` | string
`latitude` | number
`longitude` | number
`postalCode` | string
`phoneIntCode` | string
`region` | string
`timezone` | string

## Example

```typescript
import type { Geo } from ''

// TODO: Update the object below with actual values
const example = {
  "continent": North America,
  "countryCode": US,
  "countryName": United States of America,
  "countryShortName": United States,
  "city": San Francisco,
  "currencyCode": USD,
  "domainExtension": .com,
  "languages": en-US, es-US, es,
  "latitude": 37.7749,
  "longitude": -122.4194,
  "postalCode": 94105,
  "phoneIntCode": 1,
  "region": California,
  "timezone": America/Los_Angeles,
} satisfies Geo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Geo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


