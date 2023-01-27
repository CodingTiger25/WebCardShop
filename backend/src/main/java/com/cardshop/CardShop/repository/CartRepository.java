package com.cardshop.CardShop.repository;

import com.cardshop.CardShop.model.Cart;
import com.cardshop.CardShop.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart,Integer> {


    @Query("SELECT items FROM Cart  WHERE cust_name = ?1")
    Integer findByEmail(String cust_name);

   // @Query("UPDATE Cart SET items = ?1 where cust_name =?2")
    @Modifying
    @Query("UPDATE Cart c SET c.items = ?1 where c.cust_name = ?2")
    Integer updateCart( Integer items, String cust_name);
}
