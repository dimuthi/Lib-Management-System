package com.example.demo.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String book_name;
    @NotBlank
    private String author_name;
    @NotBlank
    private String isbn;
    @NotBlank
    private String type;

    public Book() {
        super();
    }

    public Book(@NotBlank String book_name, @NotBlank String author_name, @NotBlank String isbn, @NotBlank String type) {
        this.book_name = book_name;
        this.author_name = author_name;
        this.isbn = isbn;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBook_name() {
        return book_name;
    }

    public void setBook_name(String book_name) {
        this.book_name = book_name;
    }

    public String getAuthor_name() {
        return author_name;
    }

    public void setAuthor_name(String author_name) {
        this.author_name = author_name;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}