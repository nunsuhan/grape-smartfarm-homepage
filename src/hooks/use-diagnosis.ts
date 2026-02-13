import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import { useFarmStore } from '@/stores/farm-store';

export interface DiagnosisResult {
  id: string;
  success: boolean;
  detection?: {
    symptoms: Array<{
      name: string;
      confidence: number;
      location: string;
      severity_level: string;
    }>;
    risk_score: number;
    risk_level: string;
    early_action: string;
  };
  diagnosis?: {
    disease_name: string;
    confidence: number;
    severity: string;
  };
  prescription?: {
    treatment_info: string;
    sources: Array<{ title: string; content?: string }>;
  };
  timestamp: string;
  imageUrl?: string;
}

export function useDiagnosis() {
  const selectedFarmId = useFarmStore((s) => s.selectedFarmId);
  const [results, setResults] = useState<DiagnosisResult[]>([]);

  const mutation = useMutation({
    mutationFn: async (file: File) => {
      const reader = new FileReader();
      const base64 = await new Promise<string>((resolve) => {
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });

      const { data } = await api.post('/diagnosis/hybrid/', {
        image: base64,
        farm_id: selectedFarmId,
        upload_type: 'diagnosis',
        include_prescription: true,
      });

      return {
        ...data,
        id: `diag-${Date.now()}`,
        imageUrl: URL.createObjectURL(file),
        timestamp: data.timestamp || new Date().toISOString(),
      } as DiagnosisResult;
    },
    onSuccess: (result) => {
      setResults((prev) => [result, ...prev]);
    },
  });

  return {
    results,
    diagnose: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
