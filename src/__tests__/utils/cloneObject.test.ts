import cloneObject from '../../utils/cloneObject';

describe('clone', () => {
  it('should clone object and not mutate the original object', () => {
    const fileData = new File([''], 'filename');
    const data = {
      items: [],
      test: {
        date: new Date('2020-10-15'),
        test0: 12,
        test1: '12',
        test2: [1, 2, 3, 4],
        deep: {
          date: new Date('2020-10-15'),
          test0: 12,
          test1: '12',
          test2: [
            1,
            2,
            3,
            4,
            {
              file: fileData,
            },
          ],
          file: fileData,
        },
      },
      file: fileData,
      test2: new Set([1, 2]),
      test1: new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
      ]),
    };

    const copy = cloneObject(data);
    expect(cloneObject(data)).toEqual(copy);

    // @ts-expect-error
    copy.test.what = '1243';
    copy.test.date = new Date('2020-10-16');
    // @ts-expect-error
    copy.items[0] = 2;

    expect(data).toEqual({
      items: [],
      test: {
        date: new Date('2020-10-15'),
        test0: 12,
        test1: '12',
        test2: [1, 2, 3, 4],
        deep: {
          date: new Date('2020-10-15'),
          test0: 12,
          test1: '12',
          test2: [
            1,
            2,
            3,
            4,
            {
              file: fileData,
            },
          ],
          file: fileData,
        },
      },
      file: fileData,
      test2: new Set([1, 2]),
      test1: new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
      ]),
    });

    // @ts-expect-error
    data.items = [1, 2, 3];

    expect(copy.items).toEqual([2]);
  });

  it('should skip clone if a node is instance of function', () => {
    function testFunction() {}

    const data = {
      test: {
        testFunction,
        test: 'inner-string',
        deep: {
          testFunction,
          test: 'deep-string',
        },
      },
      testFunction,
      other: 'string',
    };

    const copy = cloneObject(data);
    data.test.deep.test = 'changed-deep-string';

    expect(copy).toEqual({
      test: {
        test: 'inner-string',
        deep: {
          testFunction,
          test: 'deep-string',
        },
        testFunction,
      },
      testFunction,
      other: 'string',
    });
  });
});
