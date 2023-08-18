export function animationsQuickSort(arr) {
    // animations array 
    let animations = []; 
    let helper = arr.slice();

    insertionSort(helper, animations);

    return animations;
  }
  
  function insertionSort(helper, animations) {
    const length = helper.length;

    for (let i = 1; i < length; i++) {
      let pos = helper[i];
      let j = i - 1;

      animations.push(["comp1", j, i]);
      animations.push(["comp2", j, i]);
      
      while (j >= 0 && helper[j] > pos) {

        animations.push(["overwrite", j + 1, helper[j]]);

        helper[j + 1] = helper[j];
        j = j - 1;

        if (j >= 0) {
          animations.push(["comp1", j, i]);
          animations.push(["comp2", j, i]);
        }
      }

      animations.push(["overwrite", j + 1, pos]);
      helper[j + 1] = pos;
    }
  }