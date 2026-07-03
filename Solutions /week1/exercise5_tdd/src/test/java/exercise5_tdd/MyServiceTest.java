package exercise5_tdd;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.when;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // 1. Mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // 2. Stub
        when(mockApi.getData()).thenReturn("Mock Data");

        // 3. Act
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // 4. Assert
        assertEquals("Mock Data", result, "The service should return data provided by the stubbed API configuration.");
    }
}
