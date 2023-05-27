export interface Error {
  kind: 'Error';
  message: string;
}

export interface Success<T> {
  kind: 'Success';
  response: T;
}

export interface NotFound {
  kind: 'NotFound';
}

export interface Empty {
  kind: 'Empty';
}

export type ApiResult<T> = Error | Success<T> | NotFound | Empty;

interface PaginatedResponse<T> {
  results: {
    items: T[];
    count: number;
  };
  pagination: {
    limit: number;
    offset: number;
    total: number;
  };
}

export type PaginatedApiResult<T> = ApiResult<PaginatedResponse<T>>;
