export interface Event {

  id: string;

  event_name: string;

  event_type: string;

  source: string;

  properties: Record<string, any>;

  organization_id: string;

  created_at: string;
}

export interface EventCreatePayload {

  event_name: string;

  event_type: string;

  source: string;

  properties: Record<string, any>;
}