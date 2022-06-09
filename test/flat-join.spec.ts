import { flatJoin } from './../src/sync/flat-join';
import { expect } from 'chai';
import { fluent, head, tail } from '../src';
import 'chai-callslike';

describe(flatJoin.name, () => {
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

    expect(result).to.be.like([
      {
        field1: source0.field1,
        field2: source0.field1.field2[0],
        field3: source0.field1.field2[0].field3,
      },
      {
        field1: source0.field1,
        field2: source0.field1.field2[0],
        field3: source0.field1.field2[0].field3,
      },
      {
        field1: source0.field1,
        field2: source0.field1.field2[0],
        field3: source0.field1.field2[0].field3,
      },
      {
        field1: source0.field1,
        field2: source0.field1.field2[1],
        field3: source0.field1.field2[1].field3,
      },
      {
        field1: source1.field1[0],
        field2: source1.field1[0].field2,
        field3: source1.field1[0].field2.field3,
      },
      {
        field1: source1.field1[0],
        field2: source1.field1[0].field2,
        field3: source1.field1[0].field2.field3,
      },
      {
        field1: source2[0][0][0].field1,
        field2: source2[0][0][0].field1.field2[0],
        field3: source2[0][0][0].field1.field2[0].field3[0],
      },
    ]);
    expect(result[0][tail]).to.be.eq(source0);
    expect(result[0][head]).to.be.eq(source0.field1.field2[0].field3.field1[0]);
    expect(result[1][tail]).to.be.eq(source0);
    expect(result[1][head]).to.be.eq(source0.field1.field2[0].field3.field1[1]);
    expect(result[2][tail]).to.be.eq(source0);
    expect(result[2][head]).to.be.eq(source0.field1.field2[0].field3.field1[2]);
    expect(result[3][tail]).to.be.eq(source0);
    expect(result[3][head]).to.be.eq(source0.field1.field2[1].field3.field1);
    expect(result[4][tail]).to.be.eq(source1);
    expect(result[4][head]).to.be.eq(source1.field1[0].field2.field3.field1[0]);
    expect(result[5][tail]).to.be.eq(source1);
    expect(result[5][head]).to.be.eq(source1.field1[0].field2.field3.field1[1]);
    expect(result[6][tail]).to.be.eq(source2[0]);
    expect(result[6][head]).to.be.eq(
      source2[0][0][0].field1.field2[0].field3[0].field1,
    );
  });
});
