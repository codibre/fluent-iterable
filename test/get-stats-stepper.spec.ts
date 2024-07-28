import { expect } from 'chai';
import { fluent, getStatsStepper } from '../src';

const PRECISION = 1000000;
function round(value: number) {
  return Math.round(value * PRECISION) / PRECISION;
}

describe(getStatsStepper.name, () => {
  it('should calculate statistic metrics', () => {
    const sample = [10, 12, 23, 23, 16, 23, 21, 16];
    const stepper = getStatsStepper();

    sample.forEach((x) => stepper.step(x));

    expect(stepper.avg).to.be.eq(fluent(sample).avg());
    expect(stepper.min).to.be.eq(fluent(sample).min());
    expect(stepper.max).to.be.eq(fluent(sample).max());
    expect(stepper.count).to.be.eq(sample.length);
    expect(round(stepper.populationVariance)).to.be.eq(24);
    expect(round(stepper.sampleVariance)).to.be.eq(27.428571);
    expect(round(stepper.populationStdDev)).to.be.eq(4.898979);
    expect(round(stepper.sampleStdDev)).to.be.eq(5.237229);
  });

  it('should work with empty sample', () => {
    const sample: number[] = [];
    const stepper = getStatsStepper();

    sample.forEach((x) => stepper.step(x));

    expect(stepper.avg).to.be.NaN;
    expect(stepper.min).to.be.eq(Number.POSITIVE_INFINITY);
    expect(stepper.max).to.be.eq(Number.NEGATIVE_INFINITY);
    expect(stepper.count).to.be.eq(0);
    expect(round(stepper.populationVariance)).to.be.NaN;
    expect(round(stepper.sampleVariance)).to.be.NaN;
    expect(round(stepper.populationStdDev)).to.be.NaN;
    expect(round(stepper.sampleStdDev)).to.be.NaN;
  });

  it('should work with single sample', () => {
    const sample = [1];
    const stepper = getStatsStepper();

    sample.forEach((x) => stepper.step(x));

    expect(stepper.avg).to.be.eq(1);
    expect(stepper.min).to.be.eq(1);
    expect(stepper.max).to.be.eq(1);
    expect(stepper.count).to.be.eq(1);
    expect(round(stepper.populationVariance)).to.be.eq(0);
    expect(round(stepper.sampleVariance)).to.be.NaN;
    expect(round(stepper.populationStdDev)).to.be.eq(0);
    expect(round(stepper.sampleStdDev)).to.be.NaN;
  });

  it('should work with two-sized sample', () => {
    const sample = [1, 2];
    const stepper = getStatsStepper();

    sample.forEach((x) => stepper.step(x));

    expect(stepper.avg).to.be.eq(1.5);
    expect(stepper.min).to.be.eq(1);
    expect(stepper.max).to.be.eq(2);
    expect(stepper.count).to.be.eq(2);
    expect(round(stepper.populationVariance)).to.be.eq(0.25);
    expect(round(stepper.sampleVariance)).to.be.eq(0.5);
    expect(round(stepper.populationStdDev)).to.be.eq(0.5);
    expect(round(stepper.sampleStdDev)).to.be.eq(0.707107);
  });
});
