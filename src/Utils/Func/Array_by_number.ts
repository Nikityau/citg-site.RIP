export const Array_by_number = (num: number): number[] => {
  const arr: number[] = [];

  for (let i = 0; i < num; ++i) {
    arr.push(i);
  }

  return arr;
};
