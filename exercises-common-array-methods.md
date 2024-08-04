Bài tập 1: Xoay Mảng
Nhiệm vụ: Viết một hàm rotateArray(arr, k) để xoay một mảng arr sang phải k bước. Ví dụ:

rotateArray([1, 2, 3, 4, 5], 2) sẽ trả về [4, 5, 1, 2, 3]. 

rotateArray([1, 2, 3, 4, 5], 7) sẽ trả về [4, 5, 1, 2, 3] (vì xoay 7 bước tương đương với xoay 2 bước).

Gợi ý: Sử dụng toán tử modulo(%) để xử lý các trường hợp khi k lớn hơn độ dài của mảng.

Bài tập 2: Ghép Mảng (Số nguyên) Đã Sắp Xếp
Nhiệm vụ: Cho hai mảng đã sắp xếp arr1 và arr2, hãy Ghép chúng thành một mảng đã sắp xếp duy nhất. Viết một hàm mergeSortedArrays(arr1, arr2) để thực hiện điều này. 
Ví dụ:

mergeSortedArrays([1, 3, 5], [2, 4, 6]) sẽ trả về [1, 2, 3, 4, 5, 6].

Bài tập 3: Tìm Số Bị Thiếu
Nhiệm vụ: Cho một mảng gồm n số phân biệt từ 0 đến n. Một số bị thiếu trong mảng. Viết một hàm findMissingNumber(arr) để tìm số bị thiếu. 

Ví dụ:

findMissingNumber([0, 1, 3]) sẽ trả về 2.

findMissingNumber([4, 0, 3, 1]) sẽ trả về 2.

Gợi ý: Sử dụng công thức tính tổng của n số tự nhiên đầu tiên để tìm số bị thiếu.

Bài tập 4: Nhóm Các Từ Có cùng các loại kí tự (ate = tea = aet )
Nhiệm vụ: Viết một hàm groupAnagrams(words) nhóm các từ Có cùng các loại kí tự lại với nhau từ một danh sách các từ. 

Ví dụ:

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) sẽ trả về [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]].

Gợi ý: Sắp xếp mỗi từ và sử dụng một bản đồ để nhóm chúng.

Bài tập 5: Tìm Phần Tử Lớn Thứ K
Nhiệm vụ: Viết một hàm findKthLargest(nums, k) trả về phần tử lớn nhất với số bước k trong một mảng nums. 

Ví dụ:

-> xét 1 3 5 7 i*2 ...
-> [2,5,4] => 5
findKthLargest([3, 2, 1, 5, 6, 4], 2) sẽ trả về 5.


Bài tập 6: Chuỗi Liên Tiếp
Nhiệm vụ: Cho một mảng số nguyên không được sắp xếp, viết một hàm longestConsecutiveSequence(nums) trả về độ dài của chuỗi các phần tử liên tiếp dài nhất. 

Ví dụ:

longestConsecutiveSequence([100, 4, 200, 1, 3, 2]) sẽ trả về 4 (chuỗi là [1, 2, 3, 4]).


Bài tập 7: Tổng Hai Số Với Chỉ Số
Nhiệm vụ: Viết một hàm twoSumWithIndices(nums, target) tìm hai số trong nums sao cho tổng của chúng là target, và trả về chỉ số của chúng. 

Ví dụ:

twoSumWithIndices([2, 7, 11, 15], 9) sẽ trả về [0, 1].

Gợi ý: Sử dụng một bản đồ băm để lưu trữ chỉ số của các phần tử khi bạn lặp qua mảng.

Bài tập 8: Di Chuyển Số 0
Nhiệm vụ: Viết một hàm moveZeros(nums) di chuyển tất cả các số 0 trong mảng vào cuối mảng trong khi duy trì thứ tự tương đối của các phần tử khác không. 

Ví dụ:

moveZeros([0, 1, 0, 3, 12]) sẽ trả về [1, 3, 12, 0, 0].

Gợi ý: Sử dụng phương pháp hai con trỏ để giải quyết hiệu quả bài toán này.


```js
Bài tập 1: Xoay Mảng


const rotateArray= (arr,=> k) {
    const n = arr.length;
    k = k % n;  // Sử dụng toán tử modulo
    return arr.slice(-k).concat(arr.slice(0, -k));
}

// Ví dụ
console.log(rotateArray([1, 2, 3, 4, 5], 2));  // [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 7));  // [4, 5, 1, 2, 3]
Bài tập 2: Trộn Mảng Đã Sắp Xếp


Copy code
const   mergeSortedArrays= (arr1, arr2)=> [...arr1,...arr2]

// Ví dụ
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));  // [1, 2, 3, 4, 5, 6]
Bài tập 3: Tìm Số Bị Thiếu


Copy code
const findMissingNumber= (arr)=> {
    const n = arr.length;
    const total = n * (n + 1) / 2;  // Tổng của n số tự nhiên đầu tiên
    const sum = arr.reduce((a, b) => a + b, 0);
    return total - sum;
}

// Ví dụ
console.log(findMissingNumber([0, 1, 3]));  // 2
console.log(findMissingNumber([4, 0, 3, 1]));  // 2
Bài tập 4: Nhóm Các Từ Đồng An


Copy code
const groupAnagrams= (words)=> {
    const anagrams = {};
    words.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        if (!anagrams[sortedWord]) {
            anagrams[sortedWord] = [];
        }
        anagrams[sortedWord].push(word);
    });
    return Object.values(anagrams);
}

// Ví dụ
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));  // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
Bài tập 5: Tìm Phần Tử Lớn Thứ K


Copy code
const findKthLargest= (nums, k)=> {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}

// Ví dụ
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));  // 5
Bài tập 6: Chuỗi Liên Tiếp


Copy code
const longestConsecutiveSequence= (nums)=> {
    const numSet = new Set(nums);
    let longestStreak = 0;

    numSet.forEach(num => {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    });

    return longestStreak;
}

// Ví dụ
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));  // 4
Bài tập 7: Tổng Hai Số Với Chỉ Số


Copy code
const twoSumWithIndices= (nums, target)=> {
    const numToIndex = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.hasOwnProperty(complement)) {
            return [numToIndex[complement], i];
        }
        numToIndex[nums[i]] = i;
    }
}

// Ví dụ
console.log(twoSumWithIndices([2, 7, 11, 15], 9));  // [0, 1]
Bài tập 8: Di Chuyển Số 0


Copy code
const moveZeros= (nums)=> {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++;
        }
    }
    return nums;
}

// Ví dụ
console.log(moveZeros([0, 1, 0, 3, 12]));  // [1, 3, 12, 0, 0]

```