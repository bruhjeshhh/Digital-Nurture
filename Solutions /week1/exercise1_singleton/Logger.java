package exercise1_singleton;

public class Logger {
    // Private static variable to hold the single instance
    private static Logger instance;

    // Private constructor to prevent instantiation from other classes
    private Logger() {
        // Preventing reflection from breaking the singleton
        if (instance != null) {
            throw new IllegalStateException("Cannot create another instance of Logger.");
        }
    }

    // Public static method to provide the global access point
    public static synchronized Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // A method to simulate logging functionality
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}
