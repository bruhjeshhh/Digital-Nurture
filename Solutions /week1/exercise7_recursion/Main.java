package exercise7_recursion;

public class Main {
    public static void main(String[] args) {
        double principalInvestment = 1000.0; 
        double annualGrowthRate = 0.05;      
        int forecastingPeriod = 5;          

        System.out.println("--- Financial Forecasting Engine ---");
        System.out.println("Initial Investment: $" + principalInvestment);
        System.out.println("Expected Growth Rate: " + (annualGrowthRate * 100) + "%");
        System.out.println("Forecasting Window: " + forecastingPeriod + " years\n");

        // Execute prediction
        double predictedValue = FinancialForecasting.calculateFutureValue(
            principalInvestment, 
            annualGrowthRate, 
            forecastingPeriod
        );

        System.out.printf("Predicted Future Value: $%.2f%n", predictedValue);
    }
}
