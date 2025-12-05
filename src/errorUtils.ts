import { ErrorResponse } from './types';

const DEFAULT_ERROR_MESSAGE = 'Request failed';

const isErrorResponse = (payload: unknown): payload is ErrorResponse => {
  if (!payload || typeof payload !== 'object') {
    return false;
  }
  const record = payload as Record<string, unknown>;
  return typeof record.errorCode === 'string' && typeof record.errorMessage === 'string';
};

const pickField = (payload: Record<string, unknown>, candidates: string[]): string | undefined => {
  for (const field of candidates) {
    const value = payload[field];
    if (typeof value === 'string' && value.trim().length > 0) {
      return value;
    }
  }
  return undefined;
};

const normalizeFallbackCode = (status?: number): string => {
  if (typeof status === 'number' && Number.isFinite(status)) {
    return `HTTP_${status}`;
  }
  return 'HTTP_UNKNOWN';
};

const normalizeJsonPayload = (
  payload: unknown,
  fallbackCode: string,
  fallbackMessage: string,
): ErrorResponse | undefined => {
  if (isErrorResponse(payload)) {
    return payload;
  }
  if (payload && typeof payload === 'object') {
    const record = payload as Record<string, unknown>;
    const errorCode = pickField(record, ['errorCode', 'code']) || fallbackCode;
    const errorMessage = pickField(record, ['errorMessage', 'message', 'detail', 'description']);
    if (errorMessage) {
      return { errorCode, errorMessage };
    }
    try {
      const serialized = JSON.stringify(payload);
      if (serialized && serialized !== '{}') {
        return { errorCode, errorMessage: serialized };
      }
    } catch (serializationError) {
      // no-op; fall through to fallback response
    }
  }
  if (typeof payload === 'string' && payload.trim().length > 0) {
    return { errorCode: fallbackCode, errorMessage: payload };
  }
  return undefined;
};

const parseJsonSafely = async (response: Response): Promise<unknown | undefined> => {
  try {
    return await response.clone().json();
  } catch (error) {
    return undefined;
  }
};

const parseTextSafely = async (response: Response): Promise<string | undefined> => {
  try {
    const text = await response.clone().text();
    return text.trim().length > 0 ? text : undefined;
  } catch (error) {
    return undefined;
  }
};

export const toErrorResponse = async (error: unknown): Promise<ErrorResponse> => {
  if (error && typeof error === 'object') {
    const response = (error as { response?: Response }).response;
    if (response) {
      const fallback: ErrorResponse = {
        errorCode: normalizeFallbackCode(response.status),
        errorMessage: response.statusText?.trim().length ? response.statusText : DEFAULT_ERROR_MESSAGE,
      };

      const jsonPayload = await parseJsonSafely(response);
      const normalizedFromJson = normalizeJsonPayload(jsonPayload, fallback.errorCode, fallback.errorMessage);
      if (normalizedFromJson) {
        return normalizedFromJson;
      }

      const textPayload = await parseTextSafely(response);
      if (textPayload) {
        return { errorCode: fallback.errorCode, errorMessage: textPayload };
      }

      return fallback;
    }

    if (error instanceof Error) {
      return {
        errorCode: 'REQUEST_ERROR',
        errorMessage: error.message || DEFAULT_ERROR_MESSAGE,
      };
    }
  }

  return {
    errorCode: 'UNKNOWN_ERROR',
    errorMessage: DEFAULT_ERROR_MESSAGE,
  };
};
