package io.example.core.math;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class SumTest {

    @Test
    public void test_1_1() {
        assertEquals(2, Sum.sum(1, 1));
    }
}
