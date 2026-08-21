export interface SemaOptions {
  maxConcurrency: number;
  initFn?: () => unknown;
  pauseFn?: () => void;
  resumeFn?: () => void;
  capacity?: number;
}
