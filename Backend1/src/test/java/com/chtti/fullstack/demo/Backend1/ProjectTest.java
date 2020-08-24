package com.chtti.fullstack.demo.Backend1;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ProjectTest {
    private static final Logger LOGGER =
            LoggerFactory.getLogger(ProjectTest.class.getSimpleName());

    @Test
    void test1() {
        System.out.println("Hello Test!");
        LOGGER.info("Hello Test again!");
        LOGGER.warn("Hello Test again2!");


    }
}