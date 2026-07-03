package exercise1_singleton;

public class Main {
    public static void main(String[] args) {
        // Get two instances of the Logger
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("This is the first log message.");
        logger2.log("This is the second log message.");

        System.out.println("\n--- Verification ---");
        if (logger1 == logger2) {
            System.out.println("SUCCESS: Both logger1 and logger2 point to the SAME instance.");
            System.out.println("Instance 1 HashCode: " + logger1.hashCode());
            System.out.println("Instance 2 HashCode: " + logger2.hashCode());
        } else {
            System.out.println("FAILURE: Different instances exist! The Singleton pattern failed.");
        }
    }
}
