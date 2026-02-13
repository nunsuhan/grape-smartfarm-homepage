import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '@/lib/api-client';

export interface Farm {
  id: number;
  name: string;
  address: string;
  total_area: number;
  latitude: number;
  longitude: number;
  farm_code?: string;
  sectors: Sector[];
}

export interface Sector {
  id: number;
  name: string;
  sector_type: 'open' | 'facility';
  area: number;
  variety?: string;
}

interface FarmState {
  farms: Farm[];
  selectedFarmId: number | null;
  selectedHouseId: number | null;
  isLoading: boolean;

  fetchFarms: () => Promise<void>;
  selectFarm: (farmId: number) => void;
  selectHouse: (houseId: number) => void;

  // Computed
  selectedFarm: () => Farm | undefined;
  selectedHouse: () => Sector | undefined;
  farmCode: () => string | undefined;
  isSelected: () => boolean;
}

export const useFarmStore = create<FarmState>()(
  persist(
    (set, get) => ({
      farms: [],
      selectedFarmId: null,
      selectedHouseId: null,
      isLoading: false,

      fetchFarms: async () => {
        set({ isLoading: true });
        try {
          const { data } = await api.get('/farms/');
          const farms = Array.isArray(data) ? data : data.results || [];
          set({ farms, isLoading: false });

          // Auto-select if only one farm
          if (farms.length === 1 && !get().selectedFarmId) {
            set({ selectedFarmId: farms[0].id });
            if (farms[0].sectors?.length === 1) {
              set({ selectedHouseId: farms[0].sectors[0].id });
            }
          }
        } catch {
          set({ isLoading: false });
        }
      },

      selectFarm: (farmId) => {
        set({ selectedFarmId: farmId, selectedHouseId: null });
      },

      selectHouse: (houseId) => {
        set({ selectedHouseId: houseId });
      },

      selectedFarm: () => get().farms.find((f) => f.id === get().selectedFarmId),
      selectedHouse: () => {
        const farm = get().farms.find((f) => f.id === get().selectedFarmId);
        return farm?.sectors.find((s) => s.id === get().selectedHouseId);
      },
      farmCode: () => {
        const farm = get().farms.find((f) => f.id === get().selectedFarmId);
        return farm?.farm_code || farm?.id?.toString();
      },
      isSelected: () => get().selectedFarmId !== null && get().selectedHouseId !== null,
    }),
    {
      name: 'farmsense-farm',
      partialize: (state) => ({
        selectedFarmId: state.selectedFarmId,
        selectedHouseId: state.selectedHouseId,
      }),
    }
  )
);
