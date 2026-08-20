function pick<T>(arr: T[], ...indexes: number[]): T[] {
  const res: T[] = [];
  for (const idx of indexes) {
    res.push(arr[idx]);
  }

  return res;
}

function flatMap<T, R>(arr: T[], map: (t: T) => R[]): R[] {
  return arr.reduce((current, next) => current.concat(map(next)), [] as R[]);
}

enum Gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'NonBinary',
}

interface Person {
  name: string;
  gender?: Gender;
  emails: string[];
}

const data: Person[] = [
  {
    name: '0: w/o gender & 0 emails',
    emails: [],
  },
  {
    name: '1: w/o gender & 1 emails',
    emails: ['1@email.com'],
  },
  {
    name: '2: w/o gender & 2 emails',
    emails: ['2/1@email.com', '2/2@email.com'],
  },
  {
    name: '3: male & 0 emails',
    gender: Gender.Male,
    emails: [],
  },
  {
    name: '4: female & 0 emails',
    gender: Gender.Female,
    emails: [],
  },
  {
    name: '5: non-binary & 0 emails',
    gender: Gender.NonBinary,
    emails: [],
  },
  {
    name: '6: male & 1 emails',
    gender: Gender.Male,
    emails: ['6@email.com'],
  },
  {
    name: '7: female & 1 emails',
    gender: Gender.Female,
    emails: ['7@email.com'],
  },
  {
    name: '8: non-binary & 1 emails',
    gender: Gender.NonBinary,
    emails: ['8@email.com'],
  },
  {
    name: '9: male & 2 emails',
    gender: Gender.Male,
    emails: ['9/1@email.com', '9/2@email.com'],
  },
  {
    name: '10: female & 2 emails',
    gender: Gender.Female,
    emails: ['10/1@email.com', '10/2@email.com'],
  },
  {
    name: '11: non-binary & 2 emails',
    gender: Gender.NonBinary,
    emails: ['11/1@email.com', '11/2@email.com'],
  },
];

const picker = (...indexes: number[]): Person[] => pick(data, ...indexes);

function* generator(): Iterable<Person> {
  yield* data;
}

export { pick, flatMap, generator, picker, data, Person, Gender };
