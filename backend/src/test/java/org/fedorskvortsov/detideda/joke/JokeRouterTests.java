package org.fedorskvortsov.detideda.joke;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class JokeRouterTests {

    private final WebTestClient webTestClient;

    @Autowired
    JokeRouterTests(WebTestClient webTestClient) {
        this.webTestClient = webTestClient;
    }

    @Test
    void testJoke() {
        int id = 1;
        webTestClient.get().uri("jokes/" + id)
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .expectStatus().isOk()
                .expectBody(Joke.class).value(joke -> {
                   assertThat(joke.getId()).isEqualTo(1);
                   assertThat(joke.getAuthor()).isEqualTo("Алексей Журавлев");
                   assertThat(joke.getMessage()).isEqualTo("Детский сад восьмое марта");
                });
    }
}
