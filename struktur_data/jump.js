/**
 * Jump Search untuk array terurut (ascending).
 * @param {Array<number>} arr - array terurut
 * @param {number} target - nilai yang dicari
 * @returns {number} - indeks target di arr, atau -1 jika tidak ada
 */
function jumpSearch(arr, target) {
  const n = arr.length;
  if (n === 0) return -1;

  // ukuran langkah (best practice: floor(sqrt(n)))
  const step = Math.floor(Math.sqrt(n));

  // cari blok di mana target mungkin berada
  let prev = 0;
  let curr = step;
  while (prev < n && arr[Math.min(curr, n) - 1] < target) {
    prev = curr;
    curr += step;
    if (prev >= n) return -1; // melewati array, tidak ditemukan
  }

  // linear search di dalam blok [prev, min(curr, n))
  const last = Math.min(curr, n);
  for (let i = prev; i < last; i++) {
    if (arr[i] === target) return i;
  }

  return -1; // tidak ditemukan
}

const arr = [1, 3, 5, 7, 9, 12, 14, 18, 21, 25];
console.log(jumpSearch(arr, 7));  // output: 3
console.log(jumpSearch(arr, 2));  // output: -1
console.log(jumpSearch([], 5));   // output: -1
