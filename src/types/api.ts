/** Shared API response types */

export interface SensorMetric {
  value: number;
  unit: string;
  status: 'normal' | 'low' | 'high' | 'unknown';
}

export interface SensorCurrentResponse {
  success: boolean;
  data: {
    temperature: SensorMetric;
    humidity: SensorMetric;
    soil_moisture: SensorMetric;
    soil_temp: SensorMetric;
  };
  recorded_at: string;
  farm_code: string;
}

export interface SensorGraphResponse {
  success: boolean;
  period: 'day' | 'week' | 'month';
  labels: string[];
  data_count: number;
  my_farm: { farm_code: string; name: string; color: string };
  model_farm: { farm_code: string; name: string; color: string } | null;
  temperature: {
    my_farm: { avg: number[]; min: number[]; max: number[] };
    model_farm?: { avg: number[] };
    unit: string;
  };
  humidity: {
    my_farm: { avg: number[] };
    model_farm?: { avg: number[] };
    unit: string;
  };
  soil_moisture: {
    my_farm: { avg: number[] };
    model_farm?: { avg: number[] };
    unit: string;
  };
  comparison?: {
    temperature_diff: number;
    humidity_diff: number;
    insights: Array<{ type: string; message: string }>;
  };
}

export interface TodayDashboardResponse {
  date: string;
  farm_id: string;
  environment: {
    status: 'good' | 'caution' | 'danger';
    message: string;
    metrics: {
      temperature: SensorMetric;
      humidity: SensorMetric;
      soil_moisture: SensorMetric;
    };
  };
  growth: {
    stage: string;
    label: string;
    gdd: number;
  };
  health: {
    disease_risk: string;
    risk_score: number;
    alerts: Array<{ text: string; severity: string }>;
  };
  tasks: Array<{ text: string; priority: string; done: boolean }>;
  harvest_prediction?: {
    yield_kg: number;
    target_date: string;
  };
}

export interface QuickRiskResponse {
  farm_id: number;
  zone_id: number | null;
  risk_level: string;
  risk_score: number;
  color: string;
  message: string;
  updated_at: string;
}

export interface Notification {
  id: number;
  notification_type: string;
  title: string;
  body: string;
  is_read: boolean;
  data: Record<string, unknown>;
  created_at: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
