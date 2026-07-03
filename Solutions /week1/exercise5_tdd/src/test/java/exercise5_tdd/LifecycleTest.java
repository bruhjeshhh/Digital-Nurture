package exercise5_tdd;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class LifecycleTest {

    // Test Fixture
    private List<String> sampleList;

    // Setup Method
    @BeforeEach
    public void setUp() {
        sampleList = new ArrayList<>();
        sampleList.add("Initial Item");
        System.out.println("[SETUP] Fresh test fixture initialized.");
    }

    // Teardown Method
    @AfterEach
    public void tearDown() {
        sampleList.clear();
        sampleList = null;
        System.out.println("[TEARDOWN] Test fixture resource cleared safely.\n");
    }

    @Test
    public void testListElementAddition() {
        System.out.println("[RUNNING TEST] Executing testListElementAddition...");
        
        String newItem = "Deepskilling";

        sampleList.add(newItem);

        assertEquals(2, sampleList.size(), "List size should increment to 2 after addition.");
        assertEquals("Deepskilling", sampleList.get(1), "The secondary element must match the inserted string.");
    }
}
