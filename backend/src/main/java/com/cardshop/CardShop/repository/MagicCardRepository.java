package com.cardshop.CardShop.repository;


import com.cardshop.CardShop.model.MagicCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MagicCardRepository extends JpaRepository<MagicCard,Integer> {
    List<MagicCard> findAll();
}

