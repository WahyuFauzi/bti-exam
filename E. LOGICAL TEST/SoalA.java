
public class SoalA  {
  public static void addedStar(int n) {
      StringBuilder output = new StringBuilder(); // Use StringBuilder for efficient string concatenation

      for (int i = 1; i <= n; i++) {
          for (int j = 0; j <= n + 2; j++) {
              if (j == i || j == i + 1) {
                  output.append('*');
              } else {
                  output.append(j + 1);
              }
          }
          output.append('\n'); // Add a new line after each row
      }

      System.out.println(output.toString());
  }

  public static void main(String[] args) {
    int n = 5; // Replace with desired number of rows
    addedStar(n);
  }

}
