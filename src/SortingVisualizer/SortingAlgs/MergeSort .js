export function animationsMergeSort(arr){

    const animations = [];

    if (arr.length < 2) return arr;
    const helper = arr.slice();
    mergeSortHelper(arr, 0, arr.length - 1, helper, animations);

    return animations;
}

function mergeSortHelper(arr, start_index, end_index, helper, animations) {
    if (start_index === end_index) return arr; 
    const middle_index = Math.floor((start_index + end_index) / 2);

    mergeSortHelper(helper, start_index, middle_index, arr, animations);
    mergeSortHelper(helper, middle_index + 1, end_index, arr, animations);

    doMerge(arr, start_index, middle_index, end_index, helper, animations);
  }

  function doMerge(
    arr,
    start_index,
    middle_index,
    end_index,
    helper,
    animations
  ) {
    let k = start_index;
    let i = start_index;
    let j = middle_index + 1;
    while (i <= middle_index && j <= end_index) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (helper[i] <= helper[j]) {
        animations.push([k, helper[i]]);
        arr[k++] = helper[i++];
      } else {
        animations.push([k, helper[j]]);
        arr[k++] = helper[j++];
      }
    }
    while (i <= middle_index) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, helper[i]]);
      arr[k++] = helper[i++];
    }
    while (j <= end_index) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, helper[j]]);
      arr[k++] = helper[j++];
    }
  }