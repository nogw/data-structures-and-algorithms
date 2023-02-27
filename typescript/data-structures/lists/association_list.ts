type Pair<T> = [string, T];

const key = <T>([k, _]: Pair<T>): string => k;
const val = <T>([_, v]: Pair<T>): T => v;

type Assoc<T> = Pair<T>[];

const empty = <T>(): Assoc<T> => [];

const insert = <T>(key: string, value: T, assoc: Assoc<T>): Assoc<T> => {
  const newAssoc = assoc.slice();
  newAssoc.push([key, value]);
  return newAssoc;
};

const lookup = <T>(k: string, assoc: Assoc<T>): T | undefined => {
  const pair = assoc.find(([key]) => key === k);
  return pair ? val(pair) : undefined;
};

const exists = <T>(k: string, assoc: Assoc<T>): boolean =>
  assoc.some(([key]) => key === k);

const remove = <T>(k: string, assoc: Assoc<T>): Assoc<T> =>
  assoc.filter(([key]) => key !== k);
