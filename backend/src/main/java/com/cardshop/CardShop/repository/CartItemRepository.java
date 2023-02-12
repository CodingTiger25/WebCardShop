package com.cardshop.CardShop.repository;

import com.cardshop.CardShop.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.security.Principal;
import java.util.List;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Integer> {

    @Query("SELECT c FROM CartItem c WHERE c.cust_name = ?1")
     List<CartItem> findByEmail(String cust_name);

   /* @Query("DELETE FROM CartItem where id=?1")
    List<CartItem> deleteByCardId(Integer id);*/


}
