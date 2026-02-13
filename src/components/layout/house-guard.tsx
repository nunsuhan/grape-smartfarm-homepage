'use client';

import { useEffect } from 'react';
import { useFarmStore } from '@/stores/farm-store';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export function HouseGuard({ children }: { children: React.ReactNode }) {
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

  const isSelected = selectedFarmId !== null && selectedHouseId !== null;
  const selectedFarm = farms.find((f) => f.id === selectedFarmId);
  const sectors = selectedFarm?.sectors || [];

  // Don't show guard while loading or if already selected
  if (isLoading || isSelected) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <Dialog open={!isSelected}>
        <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>농장 / 동 선택</DialogTitle>
            <DialogDescription>
              데이터를 조회하려면 먼저 농장과 동(구역)을 선택해주세요.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Farm select */}
            <div className="space-y-2">
              <label className="text-sm font-medium">농장</label>
              <Select
                value={selectedFarmId?.toString() || ''}
                onValueChange={(v) => selectFarm(Number(v))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="농장을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {farms.map((farm) => (
                    <SelectItem key={farm.id} value={farm.id.toString()}>
                      {farm.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sector select */}
            <div className="space-y-2">
              <label className="text-sm font-medium">동 / 구역</label>
              <Select
                value={selectedHouseId?.toString() || ''}
                onValueChange={(v) => selectHouse(Number(v))}
                disabled={!selectedFarmId}
              >
                <SelectTrigger>
                  <SelectValue placeholder="동을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {sectors.map((sector) => (
                    <SelectItem key={sector.id} value={sector.id.toString()}>
                      {sector.name} ({sector.sector_type === 'facility' ? '시설' : '노지'})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button disabled={!selectedFarmId || !selectedHouseId} className="w-full">
            선택 완료
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
