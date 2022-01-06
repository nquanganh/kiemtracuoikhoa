function alternatingSums(arr) {
    return arr.reduce((acc, n, i) => {
      acc[i % 2] += n;
      return acc;},
     [0, 0]);
  } 
  const nums = [10, 20, 30, 49, 84, 90];
  const result = alternatingSums(nums);
  console.log("result: ", result)