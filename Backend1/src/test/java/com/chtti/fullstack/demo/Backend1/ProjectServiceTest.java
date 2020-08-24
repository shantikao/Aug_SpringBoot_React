package com.chtti.fullstack.demo.Backend1;

import com.chtti.fullstack.demo.Backend1.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ProjectServiceTest {
    @Autowired
    private ProjectService service;
}