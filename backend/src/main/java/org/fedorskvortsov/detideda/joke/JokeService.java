package org.fedorskvortsov.detideda.joke;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class JokeService {
    private final JokeRepository jokeRepository;

    @Autowired
    public JokeService(JokeRepository jokeRepository) {
        this.jokeRepository = jokeRepository;
    }

    public Mono<Joke> findJokeById(int id) {
        return jokeRepository.findById(id);
    }

    public Flux<Joke> findAll() {
        return jokeRepository.findAll();
    }

    public Mono<Joke> addNewJoke(Joke joke) {
        return jokeRepository.save(joke);
    }

    public Mono<Joke> updateJoke(int id, Joke joke) {
        return jokeRepository.findById(id).flatMap(j -> {
            joke.setId(j.getId());
            return jokeRepository.save(joke);
        });
    }

    public Mono<Void> deleteJoke(Joke joke) {
        return jokeRepository.delete(joke);
    }
}
