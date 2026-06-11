export type Gender = 'L' | 'P';

// Simple Linear Interpolation for WHO M (Median) values
// Data points at 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60 months
const WHO_M_DATA = {
  L: {
    height: [50.5, 67.6, 75.7, 82.3, 87.8, 91.9, 96.1, 99.9, 103.3, 106.7, 110.0],
    weight: [3.3, 7.9, 9.6, 10.9, 12.2, 13.3, 14.3, 15.3, 16.3, 17.3, 18.3]
  },
  P: {
    height: [49.1, 65.7, 74.0, 80.7, 86.4, 90.7, 95.1, 99.0, 102.7, 106.2, 109.4],
    weight: [3.2, 7.3, 8.9, 10.2, 11.5, 12.7, 13.9, 15.0, 16.1, 17.2, 18.2]
  }
};

// Simplified S (Coefficient of variation) and L (Skewness)
const S_HEIGHT = 0.04; // ~4% variance
const S_WEIGHT = 0.12; // ~12% variance

export function interpolateMedian(gender: Gender, ageInMonths: number, type: 'height' | 'weight'): number {
  if (ageInMonths <= 0) return WHO_M_DATA[gender][type][0];
  if (ageInMonths >= 60) return WHO_M_DATA[gender][type][10];
  
  const index = Math.floor(ageInMonths / 6);
  const remainder = ageInMonths % 6;
  
  const startVal = WHO_M_DATA[gender][type][index];
  const endVal = WHO_M_DATA[gender][type][index + 1];
  
  // Linear interpolation
  return startVal + ((endVal - startVal) * (remainder / 6));
}

export function calculateZScore(value: number, median: number, s: number): number {
  // Simplified LMS formula assuming L=1 (Normal distribution approximation)
  // Z = (Value / M - 1) / S
  return (value / median - 1) / s;
}

export interface AnthroResult {
  zScore: number;
  status: string;
  categoryCode: 'normal' | 'risk' | 'stunting' | 'severe';
}

export function getTBUStatus(height: number, gender: Gender, ageInMonths: number): AnthroResult {
  const median = interpolateMedian(gender, ageInMonths, 'height');
  const zScore = calculateZScore(height, median, S_HEIGHT);
  
  let status = "Normal";
  let categoryCode: 'normal' | 'risk' | 'stunting' | 'severe' = 'normal';
  
  if (zScore < -3) {
    status = "Stunting Berat";
    categoryCode = 'severe';
  } else if (zScore < -2) {
    status = "Stunting";
    categoryCode = 'stunting';
  } else if (zScore < -1) {
    status = "Risiko Stunting";
    categoryCode = 'risk';
  }
  
  return { zScore: parseFloat(zScore.toFixed(2)), status, categoryCode };
}

export function getBBUStatus(weight: number, gender: Gender, ageInMonths: number): AnthroResult {
  const median = interpolateMedian(gender, ageInMonths, 'weight');
  const zScore = calculateZScore(weight, median, S_WEIGHT);
  
  let status = "Gizi Baik (Normal)";
  let categoryCode: 'normal' | 'risk' | 'stunting' | 'severe' = 'normal';
  
  if (zScore < -3) {
    status = "Gizi Buruk";
    categoryCode = 'severe';
  } else if (zScore < -2) {
    status = "Gizi Kurang";
    categoryCode = 'stunting';
  } else if (zScore > 2) {
    status = "Gizi Lebih";
    categoryCode = 'risk'; // Just mapping to yellow
  }
  
  return { zScore: parseFloat(zScore.toFixed(2)), status, categoryCode };
}
