console.log("Simple Sort");
const randomArr = (n) => {
  let i = 0;
  let arr = [];
  while (i < n) {
    arr[i] = Math.round(Math.random() * 1000);
    i++;
  }
  return arr;
};

const simpleSort = (arr) => {
  console.log(arr.join(" "), "- before sorted");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr.join(" "), "- after sorted");
};

simpleSort(randomArr(10));
