import { fluent, getStatsStepper } from '../../src';

const PRECISION = 1000000;
function round(value: number) {
  return Math.round(value * PRECISION) / PRECISION;
}

describe(getStatsStepper.name, () => {
  it('should calculate statistic metrics', () => {
    const sample = [10, 12, 23, 23, 16, 23, 21, 16];
    const stepper = getStatsStepper();

    sample.forEach((x) => stepper.step(x));

    expect(stepper.avg).toBe(fluent(sample).avg());
    expect(stepper.min).toBe(fluent(sample).min());
    expect(stepper.max).toBe(fluent(sample).max());
    expect(stepper.count).toBe(sample.length);
    expect(round(stepper.populationVariance)).toBe(24);
    expect(round(stepper.sampleVariance)).toBe(27.428571);
    expect(round(stepper.populationStdDev)).toBe(4.898979);
    expect(round(stepper.sampleStdDev)).toBe(5.237229);
  });

  it('should work with empty sample', () => {
    const sample: number[] = [];
    const stepper = getStatsStepper();

    sample.forEach((x) => stepper.step(x));

    expect(stepper.avg).toBeNaN();
    expect(stepper.min).toBe(Number.POSITIVE_INFINITY);
    expect(stepper.max).toBe(Number.NEGATIVE_INFINITY);
    expect(stepper.count).toBe(0);
    expect(round(stepper.populationVariance)).toBeNaN();
    expect(round(stepper.sampleVariance)).toBeNaN();
    expect(round(stepper.populationStdDev)).toBeNaN();
    expect(round(stepper.sampleStdDev)).toBeNaN();
  });

  it('should work with single sample', () => {
    const sample = [1];
    const stepper = getStatsStepper();

    sample.forEach((x) => stepper.step(x));

    expect(stepper.avg).toBe(1);
    expect(stepper.min).toBe(1);
    expect(stepper.max).toBe(1);
    expect(stepper.count).toBe(1);
    expect(round(stepper.populationVariance)).toBe(0);
    expect(round(stepper.sampleVariance)).toBeNaN();
    expect(round(stepper.populationStdDev)).toBe(0);
    expect(round(stepper.sampleStdDev)).toBeNaN();
  });

  it('should work with two-sized sample', () => {
    const sample = [1, 2];
    const stepper = getStatsStepper();

    sample.forEach((x) => stepper.step(x));

    expect(stepper.avg).toBe(1.5);
    expect(stepper.min).toBe(1);
    expect(stepper.max).toBe(2);
    expect(stepper.count).toBe(2);
    expect(round(stepper.populationVariance)).toBe(0.25);
    expect(round(stepper.sampleVariance)).toBe(0.5);
    expect(round(stepper.populationStdDev)).toBe(0.5);
    expect(round(stepper.sampleStdDev)).toBe(0.707107);
  });
});
