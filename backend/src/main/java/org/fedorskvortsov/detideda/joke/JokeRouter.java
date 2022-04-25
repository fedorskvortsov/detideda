package org.fedorskvortsov.detideda.joke;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;

@Configuration(proxyBeanMethods = false)
public class JokeRouter {

    @Bean
    public RouterFunction<ServerResponse> route(JokeHandler jokeHandler) {
        return RouterFunctions
                .route(GET("jokes/{id:[0-9]+}").and(accept(MediaType.APPLICATION_JSON)),
                        jokeHandler::getJoke)
                .andRoute(GET("jokes").and(accept(MediaType.APPLICATION_JSON)),
                        jokeHandler::listJokes)
                .andRoute(POST("jokes").and(accept(MediaType.APPLICATION_JSON)),
                        jokeHandler::addNewJoke)
                .andRoute(PUT("jokes/{id:[0-9]+}").and(accept(MediaType.APPLICATION_JSON)),
                        jokeHandler::updateJoke)
                .andRoute(DELETE("jokes/{id:[0-9]+}").and(accept(MediaType.APPLICATION_JSON)),
                        jokeHandler::deleteJoke);
    }
}
