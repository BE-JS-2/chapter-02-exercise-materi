const arr = [1, 2, 5, 1, 6, 7, 2, 3]

// Output
// [1, 2, 3, 5, 6, 7]

const unique = a => [... new Set(a)]

console.log(unique(arr).sort())