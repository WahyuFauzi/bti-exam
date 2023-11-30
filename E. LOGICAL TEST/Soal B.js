// nums is inputted array
// this code problem is same as leetcode problem, https://leetcode.com/problems/maximum-difference-between-increasing-elements/
// leetcode profile https://leetcode.com/WahyuWardana/

var maximumDifference = function (nums) {
	let max = 0;

	for (let i = 0, min = nums[0]; i < nums.length; i++) {
		min = Math.min(min, nums[i]);
		max = Math.max(max, nums[i] - min);
	}

	return max === 0 ? -1 : max;
};
