package org.fedorskvortsov.detideda.joke;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Component
public class JokeHandler {

    private final JokeService jokeService;

    @Autowired
    public JokeHandler(JokeService jokeService) {
        this.jokeService = jokeService;
    }

    public Mono<ServerResponse> getJoke(ServerRequest serverRequest) {
        int id = Integer.parseInt(serverRequest.pathVariable("id"));
        Mono<Joke> jokeMono = jokeService.findJokeById(id);
        return jokeMono.flatMap(joke -> ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromValue(joke))
                .switchIfEmpty(ServerResponse.notFound().build()));
    }


    public Mono<ServerResponse> listJokes(ServerRequest serverRequest) {
        return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
                .body(jokeService.findAll(), Joke.class);
    }

    public Mono<ServerResponse> addNewJoke(ServerRequest serverRequest) {
        Mono<Joke> jokeMono = serverRequest.bodyToMono(Joke.class);
        return jokeMono.flatMap(joke -> ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(jokeService.addNewJoke(joke), Joke.class));
    }

    public Mono<ServerResponse> updateJoke(ServerRequest serverRequest) {
        final int jokeId = Integer.parseInt(serverRequest.pathVariable("id"));
        Mono<Joke> jokeMono = serverRequest.bodyToMono(Joke.class);
        return jokeMono.flatMap(joke -> ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(jokeService.updateJoke(jokeId, joke), Joke.class));
    }

    public Mono<ServerResponse> deleteJoke(ServerRequest serverRequest) {
        final int jokeId = Integer.parseInt(serverRequest.pathVariable("id"));
        return jokeService.findJokeById(jokeId)
                .flatMap(joke -> ServerResponse.noContent().build(jokeService.deleteJoke(joke)))
                .switchIfEmpty(ServerResponse.notFound().build());
    }
}
