const identity = <T>(t: T) => t;
const identityAsync = async <T>(t: T) => t;
const truth = () => true;
const truthAsync = async () => true;

function* interval(fromInclusive: number, count?: number): Iterable<number> {
  for (let offset = 0; count ? offset < count : true; ++offset) {
    yield fromInclusive + offset;
  }
}

export { identity, identityAsync, truth, truthAsync, interval };
