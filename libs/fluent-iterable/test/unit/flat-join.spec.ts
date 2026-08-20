import { fluent, fluentAsync, head, tail } from '../../src';
import { flatJoinAsync } from '../../src/async';

describe('flatJoin', () => {
  it('should flat join the specified path', () => {
    const source0 = {
      field1: {
        field2: [
          {
            field3: {
              field1: [1, 2, 3],
            },
          },
          {
            field3: {
              field1: 4,
            },
          },
        ],
      },
    };
    const source1 = {
      field1: [
        {
          field2: {
            field3: {
              field1: ['value1', 5],
            },
          },
        },
      ],
    };
    const source2 = [
      [
        [
          {
            field1: {
              field2: [{ field3: [{ field1: 6 }] }],
            },
          },
        ],
      ],
    ];
    const source = [source0, source1, source2];

    const result = fluent(source)
      .flatJoin('field1', 'field2', 'field3', 'field1')
      .toArray();

    expect(result).toEqual([
      {
        field1: source0.field1,
        field2: source0.field1.field2[0],
        field3: source0.field1.field2[0].field3,
        [tail]: expect.anything(),
        [head]: expect.anything(),
      },
      {
        field1: source0.field1,
        field2: source0.field1.field2[0],
        field3: source0.field1.field2[0].field3,
        [tail]: expect.anything(),
        [head]: expect.anything(),
      },
      {
        field1: source0.field1,
        field2: source0.field1.field2[0],
        field3: source0.field1.field2[0].field3,
        [tail]: expect.anything(),
        [head]: expect.anything(),
      },
      {
        field1: source0.field1,
        field2: source0.field1.field2[1],
        field3: source0.field1.field2[1].field3,
        [tail]: expect.anything(),
        [head]: expect.anything(),
      },
      {
        field1: source1.field1[0],
        field2: source1.field1[0].field2,
        field3: source1.field1[0].field2.field3,
        [tail]: expect.anything(),
        [head]: expect.anything(),
      },
      {
        field1: source1.field1[0],
        field2: source1.field1[0].field2,
        field3: source1.field1[0].field2.field3,
        [tail]: expect.anything(),
        [head]: expect.anything(),
      },
      {
        field1: source2[0][0][0].field1,
        field2: source2[0][0][0].field1.field2[0],
        field3: source2[0][0][0].field1.field2[0].field3[0],
        [tail]: expect.anything(),
        [head]: expect.anything(),
      },
    ]);
    expect(result[0][tail]).toBe(source0);
    expect(result[0][head]).toBe(
      (source0.field1.field2[0].field3.field1 as number[])[0],
    );
    expect(result[1][tail]).toBe(source0);
    expect(result[1][head]).toBe(
      (source0.field1.field2[0].field3.field1 as number[])[1],
    );
    expect(result[2][tail]).toBe(source0);
    expect(result[2][head]).toBe(
      (source0.field1.field2[0].field3.field1 as number[])[2],
    );
    expect(result[3][tail]).toBe(source0);
    expect(result[3][head]).toBe(source0.field1.field2[1].field3.field1);
    expect(result[4][tail]).toBe(source1);
    expect(result[4][head]).toBe(source1.field1[0].field2.field3.field1[0]);
    expect(result[5][tail]).toBe(source1);
    expect(result[5][head]).toBe(source1.field1[0].field2.field3.field1[1]);
    expect(result[6][tail]).toBe(source2[0][0][0]);
    expect(result[6][head]).toBe(
      source2[0][0][0].field1.field2[0].field3[0].field1,
    );
  });
});

describe(flatJoinAsync.name, () => {
  describe('fluent...flatJoinAsync', () => {
    it('should flat join the specified path', async () => {
      const source0 = {
        field1: {
          field2: [
            {
              field3: {
                field1: [1, 2, 3],
              },
            },
            {
              field3: {
                field1: 4,
              },
            },
          ],
        },
      };
      const source1 = {
        field1: [
          {
            field2: {
              field3: {
                field1: ['value1', 5],
              },
            },
          },
        ],
      };
      const source2 = [
        [
          [
            {
              field1: {
                field2: [{ field3: [{ field1: 6 }] }],
              },
            },
          ],
        ],
      ];
      const source = [source0, source1, source2];

      const result = await fluent(source)
        .flatJoinAsync('field1', 'field2', 'field3', 'field1')
        .toArray();

      expect(result).toEqual([
        {
          field1: source0.field1,
          field2: source0.field1.field2[0],
          field3: source0.field1.field2[0].field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source0.field1,
          field2: source0.field1.field2[0],
          field3: source0.field1.field2[0].field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source0.field1,
          field2: source0.field1.field2[0],
          field3: source0.field1.field2[0].field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source0.field1,
          field2: source0.field1.field2[1],
          field3: source0.field1.field2[1].field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source1.field1[0],
          field2: source1.field1[0].field2,
          field3: source1.field1[0].field2.field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source1.field1[0],
          field2: source1.field1[0].field2,
          field3: source1.field1[0].field2.field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source2[0][0][0].field1,
          field2: source2[0][0][0].field1.field2[0],
          field3: source2[0][0][0].field1.field2[0].field3[0],
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
      ]);
      expect(result[0][tail]).toBe(source0);
      expect(result[0][head]).toBe(
        (source0.field1.field2[0].field3.field1 as number[])[0],
      );
      expect(result[1][tail]).toBe(source0);
      expect(result[1][head]).toBe(
        (source0.field1.field2[0].field3.field1 as number[])[1],
      );
      expect(result[2][tail]).toBe(source0);
      expect(result[2][head]).toBe(
        (source0.field1.field2[0].field3.field1 as number[])[2],
      );
      expect(result[3][tail]).toBe(source0);
      expect(result[3][head]).toBe(source0.field1.field2[1].field3.field1);
      expect(result[4][tail]).toBe(source1);
      expect(result[4][head]).toBe(source1.field1[0].field2.field3.field1[0]);
      expect(result[5][tail]).toBe(source1);
      expect(result[5][head]).toBe(source1.field1[0].field2.field3.field1[1]);
      expect(result[6][tail]).toBe(source2[0][0][0]);
      expect(result[6][head]).toBe(
        source2[0][0][0].field1.field2[0].field3[0].field1,
      );
    });
    it('should work with just one field mapped', async () => {
      const source0 = {
        field1: {
          field2: [
            {
              field3: {
                field1: [1, 2, 3],
              },
            },
            {
              field3: {
                field1: 4,
              },
            },
          ],
        },
      };
      const source1 = {
        field1: [
          {
            field2: {
              field3: {
                field1: ['value1', 5],
              },
            },
          },
        ],
      };
      const source2 = [
        [
          [
            {
              field1: {
                field2: [{ field3: [{ field1: 6 }] }],
              },
            },
          ],
        ],
      ];
      const source = [source0, source1, source2];

      const result = await fluent(source).flatJoinAsync('field1').toArray();

      expect(result).toEqual([
        {
          field1: source0.field1,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source1.field1[0],
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source2[0][0][0].field1,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
      ]);
      expect(result[0][tail]).toBe(source0);
      expect(result[0][head]).toBe(source0.field1);
      expect(result[1][tail]).toBe(source1);
      expect(result[1][head]).toBe(source1.field1[0]);
      expect(result[2][tail]).toBe(source2[0][0][0]);
      expect(result[2][head]).toBe(source2[0][0][0].field1);
    });
  });

  describe('fluentAsync...flatJoin', () => {
    it('should flat join the specified path', async () => {
      const source0 = {
        field1: {
          field2: [
            {
              field3: {
                field1: [1, 2, 3],
              },
            },
            {
              field3: {
                field1: 4,
              },
            },
          ],
        },
      };
      const source1 = {
        field1: [
          {
            field2: {
              field3: {
                field1: ['value1', 5],
              },
            },
          },
        ],
      };
      const source2 = [
        [
          [
            {
              field1: {
                field2: [{ field3: [{ field1: 6 }] }],
              },
            },
          ],
        ],
      ];
      const source = [source0, source1, source2];

      const result = await fluentAsync(source)
        .map((x) => Promise.resolve(x))
        .flatJoin('field1', 'field2', 'field3', 'field1')
        .toArray();

      expect(result).toEqual([
        {
          field1: source0.field1,
          field2: source0.field1.field2[0],
          field3: source0.field1.field2[0].field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source0.field1,
          field2: source0.field1.field2[0],
          field3: source0.field1.field2[0].field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source0.field1,
          field2: source0.field1.field2[0],
          field3: source0.field1.field2[0].field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source0.field1,
          field2: source0.field1.field2[1],
          field3: source0.field1.field2[1].field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source1.field1[0],
          field2: source1.field1[0].field2,
          field3: source1.field1[0].field2.field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source1.field1[0],
          field2: source1.field1[0].field2,
          field3: source1.field1[0].field2.field3,
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
        {
          field1: source2[0][0][0].field1,
          field2: source2[0][0][0].field1.field2[0],
          field3: source2[0][0][0].field1.field2[0].field3[0],
          [tail]: expect.anything(),
          [head]: expect.anything(),
        },
      ]);
      expect(result[0][tail]).toBe(source0);
      expect(result[0][head]).toBe(
        (source0.field1.field2[0].field3.field1 as number[])[0],
      );
      expect(result[1][tail]).toBe(source0);
      expect(result[1][head]).toBe(
        (source0.field1.field2[0].field3.field1 as number[])[1],
      );
      expect(result[2][tail]).toBe(source0);
      expect(result[2][head]).toBe(
        (source0.field1.field2[0].field3.field1 as number[])[2],
      );
      expect(result[3][tail]).toBe(source0);
      expect(result[3][head]).toBe(source0.field1.field2[1].field3.field1);
      expect(result[4][tail]).toBe(source1);
      expect(result[4][head]).toBe(source1.field1[0].field2.field3.field1[0]);
      expect(result[5][tail]).toBe(source1);
      expect(result[5][head]).toBe(source1.field1[0].field2.field3.field1[1]);
      expect(result[6][tail]).toBe(source2[0][0][0]);
      expect(result[6][head]).toBe(
        source2[0][0][0].field1.field2[0].field3[0].field1,
      );
    });
  });
});
