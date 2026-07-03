package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private final BookRepository bookRepository;

    // Constructor for Dependency Injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("[CONTAINER] BookService instantiated via Constructor Injection!");
    }

    public void runBusinessLogic() {
        System.out.println("[SERVICE] Triggering core library business operations...");
        bookRepository.dataAccessExecution();
    }
}