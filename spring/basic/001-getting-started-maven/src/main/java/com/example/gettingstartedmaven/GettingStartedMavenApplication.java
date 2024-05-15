package com.example.gettingstartedmaven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class GettingStartedMavenApplication {

	public static void main(String[] args) {
		SpringApplication.run(GettingStartedMavenApplication.class, args);
	}

}
