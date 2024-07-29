import { AverageStepper } from './../types/base';
import { getAverageStepper } from './utils';
import fluent from '../fluent';

/**
 * A structure to controls the calculation of iterative means
 */
export interface MinMaxStepper {
  /**
   * Return the current avg/mean
   */
  readonly min: number;
  /**
   * Return the current avg/mean
   */
  readonly max: number;
  /**
   * Advance one min/max step
   */
  step(y: number): number;
}

/**
 * A structure to controls the calculation of iterative means
 */
export interface StatsStepper extends AverageStepper, MinMaxStepper {
  /**
   * Return the current avg/mean
   */
  readonly populationStdDev: number;
  /**
   * Return the current avg/mean
   */
  readonly populationVariance: number;
  /**
   * Return the current avg/mean
   */
  readonly sampleStdDev: number;
  /**
   * Return the current avg/mean
   */
  readonly sampleVariance: number;
}

const SQUARE = 2;

export function getMinMaxStepper() {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  const wrapper: MinMaxStepper = {
    get min() {
      return min;
    },
    get max() {
      return max;
    },
    step(y: number): number {
      if (min > y) min = y;
      if (max < y) max = y;
      return y;
    },
  };

  return wrapper;
}

/**
 * Stepper to calculate many statistical measures, like
 * min, max, population standard deviation, population variance,
 * sample standard deviation and sample variance
 */
export function getStatsStepper() {
  const avgStepper = getAverageStepper();
  const minMaxStepper = getMinMaxStepper();
  let variance: number | undefined;
  let lastVarianceCount = 0;
  const items: number[] = [];
  const wrapper: StatsStepper = {
    get avg() {
      return avgStepper.avg;
    },
    get count() {
      return avgStepper.count;
    },
    get min() {
      return minMaxStepper.min;
    },
    get max() {
      return minMaxStepper.max;
    },
    get populationVariance() {
      if (variance === undefined || lastVarianceCount !== avgStepper.count) {
        variance = fluent(items)
          .map((x) => (x - avgStepper.avg) ** SQUARE)
          .avg();
        lastVarianceCount = avgStepper.count;
      }
      return variance;
    },
    get populationStdDev() {
      return Math.sqrt(this.populationVariance);
    },
    get sampleVariance() {
      return (
        (this.populationVariance * avgStepper.count) / (avgStepper.count - 1)
      );
    },
    get sampleStdDev() {
      return Math.sqrt(this.sampleVariance);
    },
    step: (y: number) => {
      items.push(y);
      avgStepper.step(y);
      return minMaxStepper.step(y);
    },
  };

  return wrapper;
}
