export interface ApiResponse<T> {

  data: T;

  message?: string;

  success?: boolean;
}

export interface PaginationResponse<T> {

  items: T[];

  total: number;

  page: number;

  limit: number;
}