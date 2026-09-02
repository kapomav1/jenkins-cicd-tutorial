package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AppTest {

    @Test
    public void testGetGreeting() {
        assertEquals("Hello, Jenkins CI/CD Pipeline!", App.getGreeting());
    }

    @Test
    public void testAddNumbers() {
        assertEquals(5, App.addNumbers(2, 3));
        assertEquals(0, App.addNumbers(-1, 1));
    }
}
