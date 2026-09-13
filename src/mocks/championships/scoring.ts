const scoringTable: Record<number, number> = {
  1: 100,
  2: 80,
  3: 65,
  4: 55,
  5: 50,
  6: 45,
  7: 40,
  8: 35,
  9: 30,
  10: 25,
  11: 20,
  12: 15,
};

export function getPointsByPlacement(placement: number): number {
  return scoringTable[placement] ?? 0;
}
