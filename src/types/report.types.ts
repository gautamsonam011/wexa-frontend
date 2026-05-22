export interface Report {

  id: string;

  name: string;

  frequency: string;

  file_url: string;

  dashboard_id?: string;

  organization_id: string;
}

export interface ReportCreatePayload {

  name: string;

  frequency: string;
}