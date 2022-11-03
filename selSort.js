console.log("Selection Sort");
const randomArr = (n) => {
  let arr = [];
  let i = 0;
  while (i < n) {
    arr[i] = Math.round(Math.random() * 1000);
    i++;
  }
  return arr;
};

const swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

const locOfSmallest = (arr, s, e) => {
  let i = s;
  let j = i;
  while (i <= e) {
    if (arr[i] < arr[j]) {
      j = i;
    }
    i++;
  }
  return j;
};

const selSort = (arr) => {
  console.log(arr.join(" "), "- before sorted");
  let i = 0;
  while (i < arr.length - 1) {
    let j = locOfSmallest(arr, i, arr.length - 1);
    swap(arr, i, j);
    i++;
  }
  console.log(arr.join(" "), "- after sorted");
};

selSort(randomArr(10));
