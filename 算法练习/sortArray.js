var array = [7, 2, 8, 4, 9, 6, 1, 3, 5];
function sortArray() {
  //   // 直接用sort
  //   return array.sort((a, b) => a - b);
  //   冒泡排序
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}
console.log(sortArray());
