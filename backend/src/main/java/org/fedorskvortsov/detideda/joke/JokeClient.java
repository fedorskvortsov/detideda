package org.fedorskvortsov.detideda.joke;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class JokeClient {

    private final WebClient webClient;

    public JokeClient(WebClient.Builder builder) {
        this.webClient = builder.baseUrl("http://localhost:8080").build();
    }

    public Mono<Joke> getJoke(int id) {
        return this.webClient.get().uri("jokes/" + id).accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(Joke.class);
    }
}
