'use client';

import { useEffect } from 'react';
import { useFarmStore } from '@/stores/farm-store';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function HouseSelector() {
  const farms = useFarmStore((s) => s.farms);
  const selectedFarmId = useFarmStore((s) => s.selectedFarmId);
  const selectedHouseId = useFarmStore((s) => s.selectedHouseId);
  const selectFarm = useFarmStore((s) => s.selectFarm);
  const selectHouse = useFarmStore((s) => s.selectHouse);
  const fetchFarms = useFarmStore((s) => s.fetchFarms);
  const isLoading = useFarmStore((s) => s.isLoading);

  useEffect(() => {
    if (farms.length === 0) {
      fetchFarms();
    }
  }, [farms.length, fetchFarms]);

  const selectedFarm = farms.find((f) => f.id === selectedFarmId);
  const sectors = selectedFarm?.sectors || [];

  if (isLoading) {
    return <div className="h-9 w-48 animate-pulse rounded-md bg-muted" />;
  }

  return (
    <div className="flex items-center gap-2">
      {/* Farm selector */}
      {farms.length > 1 && (
        <Select
          value={selectedFarmId?.toString() || ''}
          onValueChange={(v) => selectFarm(Number(v))}
        >
          <SelectTrigger className="w-36 h-9">
            <SelectValue placeholder="농장 선택" />
          </SelectTrigger>
          <SelectContent>
            {farms.map((farm) => (
              <SelectItem key={farm.id} value={farm.id.toString()}>
                {farm.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {/* House/Sector selector */}
      <Select
        value={selectedHouseId?.toString() || ''}
        onValueChange={(v) => selectHouse(Number(v))}
        disabled={!selectedFarmId}
      >
        <SelectTrigger className="w-40 h-9">
          <SelectValue placeholder="동/구역 선택" />
        </SelectTrigger>
        <SelectContent>
          {sectors.map((sector) => (
            <SelectItem key={sector.id} value={sector.id.toString()}>
              {sector.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
