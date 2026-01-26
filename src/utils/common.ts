/**
 * 
 * @param n {number} the length of the array
 * @returns an array of numbers with values from 1 to n.
 */
export const getToNArray = (n: number) =>
  Array.from({ length: n }, (_, i) => i + 1);
