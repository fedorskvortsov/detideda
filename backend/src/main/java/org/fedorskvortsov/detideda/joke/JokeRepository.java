package org.fedorskvortsov.detideda.joke;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface JokeRepository extends ReactiveCrudRepository<Joke, Integer> {
}
