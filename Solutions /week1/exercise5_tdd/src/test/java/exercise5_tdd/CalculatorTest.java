package exercise5_tdd;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    @Test
    public void testAddMethod() {
        // 1. Arrange
        Calculator calc = new Calculator();
        
        // 2. Act
        int result = calc.add(10, 5);
        
        // 3. Assert
        assertEquals(15, result, "10 + 5 should equal 15");
    }
}