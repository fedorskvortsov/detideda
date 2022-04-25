package org.fedorskvortsov.detideda.joke;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("jokes")
public class Joke {
    @Id
    private int id;
    private String message;
    private String author;
}
