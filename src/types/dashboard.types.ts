export interface Dashboard {

  id: string;

  name: string;

  description: string;

  organization_id: string;

  created_at?: string;
}

export interface DashboardCreatePayload {

  name: string;

  description: string;
}