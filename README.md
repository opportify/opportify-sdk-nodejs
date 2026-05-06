[![Tests](https://img.shields.io/github/actions/workflow/status/opportify/opportify-sdk-nodejs/ci.yml?label=tests&style=for-the-badge&labelColor=115e5c)](https://github.com/opportify/opportify-sdk-nodejs/actions/workflows/ci.yml)
[![npm Downloads](https://img.shields.io/npm/dt/@opportify/sdk-nodejs?style=for-the-badge&labelColor=115e5c)](https://www.npmjs.com/package/@opportify/sdk-nodejs)
[![npm Version](https://img.shields.io/npm/v/@opportify/sdk-nodejs?style=for-the-badge&labelColor=115e5c)](https://www.npmjs.com/package/@opportify/sdk-nodejs)
[![License](https://img.shields.io/github/license/opportify/opportify-sdk-nodejs?color=9cf&style=for-the-badge&labelColor=115e5c)](https://github.com/opportify/opportify-sdk-nodejs/blob/main/LICENSE)

# Opportify-SDK-NodeJS

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
    - [Calling Email Insights](#calling-email-insights)
    - [Calling IP Insights](#calling-ip-insights)
    - [Calling Fraud Protection](#calling-fraud-protection)
- [Batch Analysis (Email & IP)](#batch-analysis-email--ip)
    - [Batch Email Analysis](#1-batch-email-analysis)
    - [Batch IP Analysis](#2-batch-ip-analysis)
- [Batch Export Jobs](#batch-export-jobs)
    - [Email Batch Exports](#email-batch-exports)
    - [IP Batch Exports](#ip-batch-exports)
- [Handling Errors](#handling-errors)
- [About this package](#about-this-package)

## Overview

The **Opportify SDK** gives your Node.js application access to the full Opportify platform:

| Product | Purpose |
|---------|---------|
| **Email Insights** | Validate, enrich, and score email addresses |
| **IP Insights** | Geolocate, enrich, and assess risk for IP addresses |
| **Fraud Protection** | Analyze form submissions for fraud risk across email, IP, geo, session, and velocity signals |

All products share a common API key and the same SDK installation.

[Sign Up Free](https://www.opportify.ai)

### Base URLs

| Product | Base URL |
|---------|----------|
| Email & IP Insights | `https://api.opportify.ai/insights/v1` |
| Fraud Protection | `https://api.opportify.ai/intel/v1` |

## Requirements

Requires Node.js [v20 or later](https://nodejs.org/en/blog/release/v20.0.0). Node v22.x.x is recommended.

## Getting Started

First, install Opportify via the npm package manager:

```shell
npm install --save @opportify/sdk-nodejs
```

### Calling Email Insights

```typescript
import { EmailInsights } from '@opportify/sdk-nodejs';

const emailInsights = new EmailInsights({ apiKey: 'YOUR-API-KEY-HERE' });

async function analyzeEmail() {
  try {
    const response = await emailInsights.analyze({
      email: 'test@gmial.com', // *gmial* — just an example to be auto-corrected
      enableAI: true,
      enableAutoCorrection: true,
      enableDomainEnrichment: true, // optional: include domain enrichment block
    });
    console.log('response', response);
  } catch (error: unknown) {
    console.error('error', error);
  }
}

analyzeEmail();
```

### Calling IP Insights

```typescript
import { IPInsights } from '@opportify/sdk-nodejs';

const ipInsights = new IPInsights({ apiKey: 'YOUR-API-KEY-HERE' });

async function analyzeIP() {
  try {
    const response = await ipInsights.analyze({
      ip: '8.8.8.8',
      enableAI: true, // only available on paid plans
    });
    console.log('response', response);
  } catch (error: unknown) {
    console.error('error', error);
  }
}

analyzeIP();
```

### Calling Fraud Protection

Analyze a form submission for fraud risk. The response provides an overall risk score with a breakdown by signal source (email, IP, geo, session, velocity).

```typescript
import { FraudProtection } from '@opportify/sdk-nodejs';

const fraudProtection = new FraudProtection({ apiKey: 'YOUR-API-KEY-HERE' });

async function analyzeFraud() {
  try {
    const response = await fraudProtection.analyzeFraud({
      // Identity
      email: 'user@example.com',
      firstName: 'Jane',
      lastName: 'Doe',
      username: 'jane_doe',
      companyName: 'Acme Corp',

      // Network
      userIp: '3.1.122.82',

      // Contact details
      phone1: '+18005550100',
      website: 'https://acme.example.com',

      // Submission context
      subject: 'Contact form submission',
      message: 'Hello, I am interested in your service.',
      submissionType: 'contact', // e.g. "contact", "signup", "checkout"
      origin: 'yoursite.com',   // hostname only — no protocol, path, or port

      // Address (all optional)
      address1: '123 Main St',
      city: 'Springfield',
      region: 'IL',
      country: 'US',
      postalCode: '62701',

      // Token & form tracking (optional)
      opportifyToken: 'opportify-generated-token',
      opportifyFormUUID: 'uuid-of-the-form',

      // Raw form fields as key-value pairs (optional)
      formData: { custom_field: 'value' },
    });
    // response.score   — integer 200–1000 (higher = riskier)
    // response.level   — "lowest" | "low" | "medium" | "high" | "highest"
    // response.factors — string[] of detected risk signals
    // response.sources — per-signal breakdown (email, IP, geo, session, velocity)
    console.log('response', response);
  } catch (error: unknown) {
    console.error('error', error);
  }
}

analyzeFraud();
```

## Batch Analysis (Email & IP)

You can submit multiple emails or IPs in a single request. Batch jobs are processed asynchronously; the response returns a job identifier (`jobId`) you can poll for status.

#### 1. Batch Email Analysis

```typescript
import { EmailInsights } from '@opportify/sdk-nodejs';

const emailInsights = new EmailInsights({ apiKey: 'YOUR-API-KEY-HERE' });

async function batchAnalyzeEmails() {
  try {
    // Submit batch analysis job
    const batchResponse = await emailInsights.batchAnalyze({
      emails: [
        'one@example.com',
        'two@example.org',
      ],
      name: 'Customer Email Validation', // optional: descriptive name for the job
      enableAI: true,
      enableAutoCorrection: true,
    });

    console.log('Batch job submitted:', batchResponse);
    const jobId = batchResponse.jobId;

    // Poll for status
    const statusResponse = await emailInsights.getBatchStatus({ jobId });
    // statusResponse.status — "QUEUED" | "PROCESSING" | "COMPLETED" | "ERROR"
    console.log('Batch status:', statusResponse);
  } catch (error: unknown) {
    console.error('error', error);
  }
}

batchAnalyzeEmails();
```

#### 2. Batch IP Analysis

```typescript
import { IPInsights } from '@opportify/sdk-nodejs';

const ipInsights = new IPInsights({ apiKey: 'YOUR-API-KEY-HERE' });

async function batchAnalyzeIPs() {
  try {
    // Submit batch analysis job
    const batchResponse = await ipInsights.batchAnalyze({
      ips: [
        '8.8.8.8',
        '1.1.1.1',
        '203.0.113.1',
      ],
      name: 'Network Security Audit', // optional: descriptive name for the job
      enableAI: true,
    });

    console.log('Batch job submitted:', batchResponse);
    const jobId = batchResponse.jobId;

    // Poll for status
    const statusResponse = await ipInsights.getBatchStatus({ jobId });
    // statusResponse.status — "QUEUED" | "PROCESSING" | "COMPLETED" | "ERROR"
    console.log('Batch status:', statusResponse);
  } catch (error: unknown) {
    console.error('error', error);
  }
}

batchAnalyzeIPs();
```

> **Notes**
> - Always wrap batch calls in a try-catch (see [Handling Errors](#handling-errors)).
> - Polling cadence depends on payload size; a short delay (1–3 s) between status checks is recommended.
> - `enableAutoCorrection` applies only to Email Insights.

## Batch Export Jobs

Use batch exports to materialize filtered results from a completed job. Exports run asynchronously and expose polling helpers similar to batch status checks.

### Email Batch Exports

```typescript
import { EmailInsights } from '@opportify/sdk-nodejs';

const emailInsights = new EmailInsights({ apiKey: 'YOUR-API-KEY-HERE' });

async function exportEmailBatchResults() {
  try {
    const jobId = 'your-batch-job-id'; // from a completed batch analysis

    // Trigger a new export
    const exportResponse = await emailInsights.createEmailBatchExport({
      jobId,
      exportRequest: {
        exportType: 'csv', // or 'json'
        columns: [
          'emailAddress',
          'emailProvider',
          'riskReport.score',
          'isDeliverable',
        ],
        filters: {
          isDeliverable: 'yes',
          'riskReport.score': { min: 400 },
        },
      },
    });

    console.log('Export created:', exportResponse);
    const exportId = exportResponse.exportId;

    // Poll for export status
    const exportStatus = await emailInsights.getEmailBatchExportStatus({ jobId, exportId });
    // exportStatus.status — "QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED"

    if (exportStatus.status === 'COMPLETED') {
      console.log('Download URL:', exportStatus.downloadUrl);
    }
  } catch (error: unknown) {
    console.error('error', error);
  }
}

exportEmailBatchResults();
```

### IP Batch Exports

```typescript
import { IPInsights } from '@opportify/sdk-nodejs';

const ipInsights = new IPInsights({ apiKey: 'YOUR-API-KEY-HERE' });

async function exportIpBatchResults() {
  try {
    const jobId = 'your-ip-batch-job-id'; // from a completed batch analysis

    // Trigger a new export
    const exportResponse = await ipInsights.createIpBatchExport({
      jobId,
      exportRequest: {
        exportType: 'json', // or 'csv'
        columns: [
          'result.ipAddress',
          'result.connectionType',
          'result.riskReport.score',
        ],
        filters: {
          'result.riskReport.level': ['low', 'medium'],
        },
      },
    });

    console.log('Export created:', exportResponse);
    const exportId = exportResponse.exportId;

    // Poll for export status
    const exportStatus = await ipInsights.getIpBatchExportStatus({ jobId, exportId });
    // exportStatus.status — "QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED"

    if (exportStatus.status === 'COMPLETED') {
      console.log('Download URL:', exportStatus.downloadUrl);
    } else if (exportStatus.status === 'FAILED') {
      console.error('Export failed:', exportStatus);
    }
  } catch (error: unknown) {
    console.error('error', error);
  }
}

exportIpBatchResults();
```

## Handling Errors

We strongly recommend wrapping all SDK calls in a try-catch. The SDK normalizes API errors into a typed `ErrorResponse` object:

```typescript
import { EmailInsights } from '@opportify/sdk-nodejs';
import type { ErrorResponse } from '@opportify/sdk-nodejs';

const emailInsights = new EmailInsights({ apiKey: 'YOUR-API-KEY-HERE' });

(async () => {
  try {
    const result = await emailInsights.analyze({ email: 'test@example.com' });
  } catch (error: unknown) {
    const err = error as ErrorResponse;
    // err.errorCode    — e.g. "HTTP_403", "HTTP_429", "REQUEST_ERROR"
    // err.errorMessage — human-readable description
    console.error(`[${err.errorCode}] ${err.errorMessage}`);
  }
})();
```

| Field | Type | Example |
|-------|------|---------|
| `errorCode` | `string` | `"HTTP_403"` |
| `errorMessage` | `string` | `"Your plan does not support AI features"` |

## About this package

This Node.js package is a customization of the base generated by:

- [OpenAPI Generator](https://openapi-generator.tech) project.

