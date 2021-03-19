package naughtytao.apigateway.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Bean;

import naughtytao.apigateway.demo.filters.ErrorFilter;
import naughtytao.apigateway.demo.filters.PostFilter;
import naughtytao.apigateway.demo.filters.PreFilter;
import naughtytao.apigateway.demo.filters.RouteFilter;

@SpringBootApplication
@EnableAutoConfiguration(exclude = { RabbitAutoConfiguration.class })
@EnableZuulProxy
@ComponentScan("naughtytao.apigateway.demo")
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}