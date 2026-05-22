export interface LoginPayload {

  email: string;

  password: string;
}

export interface RegisterPayload {

  email: string;

  password: string;

  full_name: string;

  organization_name: string;
}

export interface TokenResponse {

  access_token: string;

  token_type: string;
}

export interface AuthUser {

  id: string;

  email: string;

  full_name: string;

  role: string;

  organization_id: string;
}