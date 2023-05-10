package com.cardshop.CardShop.controller;

import com.cardshop.CardShop.model.MagicCard;
import com.cardshop.CardShop.repository.MagicCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MagicController {

    @Autowired
    private final MagicCardRepository magicCardRepository;

    public MagicController(MagicCardRepository magicCardRepository)
    {
        this.magicCardRepository = magicCardRepository;
    }

    @CrossOrigin(origins = "http://localhost:8080/")
    @GetMapping("/magic")
    public List<MagicCard> findCards()
    {
        return magicCardRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:8080/")
    @GetMapping("/cardview/{id}")
    public Optional<MagicCard> findCard(@PathVariable Integer id){

        Optional<MagicCard> magicCard = magicCardRepository.findById(id);
        return magicCard;
    }

}
