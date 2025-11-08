# Opportify-SDK-NodeJS

## Overview

The **Opportify API** provides access to a powerful and up-to-date platform. With advanced data warehousing and AI-driven capabilities, this API is designed to empower your business to make informed, data-driven decisions and effectively assess potential risks.

[Sign Up Free](https://www.opportify.ai)

### Base URL
Use the following base URL for all API requests:

```plaintext
https://api.opportify.ai/insights/v1/<service>/<endpoint>
```

## Requirements

Recommended Node version [22.x.x](https://nodejs.org/en/blog/release/v22.11.0). It is also compatible with +v18 .

## Getting Started

First, install Opportify via the npm package manager:

```shell
npm install --save @opportify/sdk-nodejs
```

### Calling Email Insights

```typescript
import { EmailInsights } from '@opportify/sdk-nodejs';

const clientEmailInsights = new EmailInsights({
  version: '1.0',
  apiKey: 'YOUR_API_KEY'
});

async function analyzeEmail() {
  try {
    const response = await clientEmailInsights.analyze({
      email: "email_to_validate@domain.com",
      enableAutoCorrection: true,
      enableAI: true, // only available on paid plans.
    });
    console.log('response', response);
  } catch (error: unknown) {
    console.error('error', error);
  }
}

analyzeEmail();
```

### Batch Email Analysis

For processing large volumes of emails asynchronously:

```typescript
import { EmailInsights } from '@opportify/sdk-nodejs';

const clientEmailInsights = new EmailInsights({
  version: '1.0',
  apiKey: 'YOUR_API_KEY'
});

async function batchAnalyzeEmails() {
  try {
    // Submit batch analysis job
    const batchResponse = await clientEmailInsights.batchAnalyze({
      emails: [
        "user1@example.com",
        "user2@domain.org",
        "invalid-email@test.com"
      ],
      name: "Marketing List Validation",
      enableAI: true,
      enableAutoCorrection: true
    });
    
    console.log('Batch job submitted:', batchResponse);
    const jobId = batchResponse.jobId;
    
    // Check batch analysis status
    const statusResponse = await clientEmailInsights.getBatchStatus({
      jobId: jobId
    });
    
    console.log('Batch status:', statusResponse);
    
  } catch (error: unknown) {
    console.error('Batch analysis error:', error);
  }
}

batchAnalyzeEmails();
```

### Email Batch Export

For exporting batch analysis results to CSV or JSON:

```typescript
import { EmailInsights } from '@opportify/sdk-nodejs';

const clientEmailInsights = new EmailInsights({
  version: '1.0',
  apiKey: 'YOUR_API_KEY'
});

async function exportBatchResults() {
  try {
    const jobId = 'your-batch-job-id'; // From previous batch analysis
    
    // Create export request
    const exportResponse = await clientEmailInsights.createEmailBatchExport({
      jobId: jobId,
      exportRequest: {
        exportType: 'csv', // or 'json'
        columns: [
          'email',
          'isValid',
          'isDeliverable',
          'provider',
          'riskScore'
        ],
        filters: {
          isValid: true,
          riskScore: { min: 200, max: 800 }
        }
      }
    });
    
    console.log('Export created:', exportResponse);
    const exportId = exportResponse.exportId;
    
    // Check export status
    const exportStatus = await clientEmailInsights.getEmailBatchExportStatus({
      jobId: jobId,
      exportId: exportId
    });
    
    console.log('Export status:', exportStatus);
    
    // When status is 'completed', download from the provided URL
    if (exportStatus.status === 'completed') {
      console.log('Download URL:', exportStatus.downloadUrl);
    }
    
  } catch (error: unknown) {
    console.error('Export error:', error);
  }
}

exportBatchResults();
```


### Calling IP Insights

```typescript
import { IPInsights } from '@opportify/sdk-nodejs';

const clientIpInsights = new IPInsights({ 
  version: '1.0',
  apiKey: 'YOUR-API-KEY-HERE'
});

async function analyzeIP() {
  try {
    const response = await clientIpInsights.analyze({
      ip: '8.8.8.8',
      enableAI: true // only available for paid plans.
    });
    console.log('response', response);
  } catch (error: unknown) {
    console.error('error', error);
  }
}

analyzeIP();
```

### Batch IP Analysis

For processing large volumes of IP addresses asynchronously:

```typescript
import { IPInsights } from '@opportify/sdk-nodejs';

const clientIpInsights = new IPInsights({
  version: '1.0',
  apiKey: 'YOUR_API_KEY'
});

async function batchAnalyzeIPs() {
  try {
    // Submit batch analysis job
    const batchResponse = await clientIpInsights.batchAnalyze({
      ips: [
        "8.8.8.8",
        "1.1.1.1",
        "192.168.1.1",
        "203.0.113.1"
      ],
      name: "Network Security Audit",
      enableAI: true
    });
    
    console.log('Batch job submitted:', batchResponse);
    const jobId = batchResponse.jobId;
    
    // Check batch analysis status
    const statusResponse = await clientIpInsights.getBatchStatus({
      jobId: jobId
    });
    
    console.log('Batch status:', statusResponse);
    
  } catch (error: unknown) {
    console.error('Batch analysis error:', error);
  }
}

batchAnalyzeIPs();
```

### IP Batch Export

For exporting batch IP analysis results to CSV or JSON:

```typescript
import { IPInsights } from '@opportify/sdk-nodejs';

const clientIpInsights = new IPInsights({
  version: '1.0',
  apiKey: 'YOUR_API_KEY'
});

async function exportIpBatchResults() {
  try {
    const jobId = 'your-ip-batch-job-id'; // From previous batch analysis
    
    // Create export request
    const exportResponse = await clientIpInsights.createIpBatchExport({
      jobId: jobId,
      exportRequest: {
        exportType: 'csv', // or 'json'
        columns: [
          'ip',
          'connectionType',
          'riskScore',
          'geo.country',
          'geo.city',
          'asn.organization',
          'blocklisted.isListed'
        ],
        filters: {
          riskScore: { min: 300, max: 900 },
          'connectionType': ['vpn', 'proxy', 'tor']
        }
      }
    });
    
    console.log('Export created:', exportResponse);
    const exportId = exportResponse.exportId;
    
    // Check export status
    const exportStatus = await clientIpInsights.getIpBatchExportStatus({
      jobId: jobId,
      exportId: exportId
    });
    
    console.log('Export status:', exportStatus);
    
    // When status is 'completed', download from the provided URL
    if (exportStatus.status === 'completed') {
      console.log('Download URL:', exportStatus.downloadUrl);
    }
    
  } catch (error: unknown) {
    console.error('Export error:', error);
  }
}

exportIpBatchResults();
```

## About this package

This NodeJs package is a customization of the base generated by:

- [OpenAPI Generator](https://openapi-generator.tech) project.

