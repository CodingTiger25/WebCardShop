package com.cardshop.CardShop.service;

import com.cardshop.CardShop.model.Cart;
import com.cardshop.CardShop.model.CartQ;
import com.cardshop.CardShop.repository.CartRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartQService {

    Logger logger = LoggerFactory.getLogger(CartQService.class);

    @Autowired
    CartRepository cartRepository;

    public void amountInCart(Integer items, String cust_name)
    {
        Cart cart = new Cart();

        cart.setItems(items);
        cart.setCust_name(cust_name);

        //cartRepository.save(cart);
        cartRepository.updateCart(items, cust_name);
    }
}
