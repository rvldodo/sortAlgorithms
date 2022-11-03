console.log("Bubble Sort");
const randomArr = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.round(Math.random() * 1000);
  }
  return arr;
};

const swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

const bubble = (arr) => {
  let i = arr.length - 1;
  while (i > 0) {
    if (arr[i] < arr[i - 1]) {
      swap(arr, i, i - 1);
    }
    i--;
  }
};

const bubbleSort = (arr) => {
  console.log(arr.join(" "), "- before sorted");
  let i = 0;
  while (i < arr.length - 1) {
    bubble(arr);
    i++;
  }
  console.log(arr.join(" "), "- after sorted");
};

bubbleSort(randomArr(10));
