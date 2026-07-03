package exercise7_recursion;

public class FinancialForecasting {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double currentValue, double growthRate, int years) {
        // 1. Base Case: If years remaining is 0, the future value is the current value
        if (years == 0) {
            return currentValue;
        }

        // Calculating value for the next year
        double nextYearValue = currentValue * (1 + growthRate);
        
        // Recursive call decrementing the years remaining
        return calculateFutureValue(nextYearValue, growthRate, years - 1);
    }
}