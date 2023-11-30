public class SoalB {
  public static int maximumDifference(int[] nums) {
    int maxDifference = 0;
    int min = nums[0];

    for (int num : nums) {
        min = Math.min(min, num);
        maxDifference = Math.max(maxDifference, num - min);
    }

    return maxDifference == 0 ? -1 : maxDifference;
  }

  public static void main(String[] args) {
      int[] nums = {7, 1, 5, 3, 2};
      int maxDifference = maximumDifference(nums);
      System.out.println(maxDifference);
  }
}
