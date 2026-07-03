package exercise5_tdd;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        System.out.println("--- Starting Logger Engine ---");
        
        // Logging an ERROR level event
        logger.error("This is an error message");
        
        // Logging a WARN level event
        logger.warn("This is a warning message");
        
        // info log to verify normal system flow execution
        logger.info("Logging runtime sequence completed successfully.");
    }
}
