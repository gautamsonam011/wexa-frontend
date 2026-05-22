export interface Widget {

  id: string;

  title: string;

  widget_type: string;

  query: string;

  config: Record<string, any>;

  dashboard_id: string;
}

export interface WidgetCreatePayload {

  title: string;

  widget_type: string;

  query: string;

  config: Record<string, any>;
}