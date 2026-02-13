/** FarmSense Design Tokens - Single Source of Truth */

export const tokens = {
  colors: {
    brand: {
      primary: '#2D5A27',
      primaryDark: '#1E3A1A',
      primaryLight: '#E8F5E8',
    },
    status: {
      good: { bg: '#ECFDF5', text: '#059669', border: '#A7F3D0' },
      caution: { bg: '#FFFBEB', text: '#D97706', border: '#FDE68A' },
      danger: { bg: '#FEF2F2', text: '#DC2626', border: '#FECACA' },
      info: { bg: '#EFF6FF', text: '#2563EB', border: '#BFDBFE' },
    },
    sensor: {
      temperature: '#EF4444',
      humidity: '#3B82F6',
      soilMoisture: '#8B5CF6',
      co2: '#F59E0B',
      light: '#FBBF24',
      rainfall: '#06B6D4',
    },
    risk: {
      safe: '#10B981',
      low: '#34D399',
      moderate: '#F59E0B',
      high: '#F97316',
      critical: '#EF4444',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  radius: {
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 30,
  },
} as const;

export type StatusLevel = 'good' | 'caution' | 'danger' | 'info';
export type RiskLevel = 'safe' | 'low' | 'moderate' | 'high' | 'critical';

export function getStatusColor(level: StatusLevel) {
  return tokens.colors.status[level];
}

export function getRiskColor(level: RiskLevel) {
  return tokens.colors.risk[level];
}
