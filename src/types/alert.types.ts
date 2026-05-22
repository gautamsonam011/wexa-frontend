export interface Alert {

  id: string;

  name: string;

  metric_name: string;

  operator: string;

  threshold: number;

  is_active: boolean;

  organization_id: string;
}

export interface AlertCreatePayload {

  name: string;

  metric_name: string;

  operator: string;

  threshold: number;
}