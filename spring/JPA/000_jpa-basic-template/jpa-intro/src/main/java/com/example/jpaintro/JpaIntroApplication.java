package com.example.jpaintro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@EnableJpaAuditing
//이걸 붙여야 UserEntity의 CreatedDate등을 사용할 수 있다.
public class JpaIntroApplication {

	public static void main(String[] args) {
		SpringApplication.run(JpaIntroApplication.class, args);
	}

}
