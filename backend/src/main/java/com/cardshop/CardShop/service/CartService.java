package com.cardshop.CardShop.service;

import com.cardshop.CardShop.model.CartItem;
import com.cardshop.CardShop.repository.CartItemRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    Logger logger = LoggerFactory.getLogger(CartService.class);
    @Autowired
    CartItemRepository cartItemRepository;

    public void addToCart(Integer cID, String cName, Integer Quantity,
                          String cardName, String cardImage,Integer price ){

        CartItem cartItem = new CartItem();
        var test = cartItem.getCard_id();
        cartItem.setCard_id(cID);
        cartItem.setCust_name(cName);
        cartItem.setQuantity(Quantity);
        cartItem.setName(cardName);
        cartItem.setImage(cardImage);
        cartItem.setPrice(price);

        logger.info("Card id: {}", cartItem.getCard_id());
        logger.info("Cust name: {}", cartItem.getCust_name());
        logger.info("Quantity: {}", cartItem.getQuantity());
        logger.info("Price: {}", cartItem.getPrice());


        cartItemRepository.save(cartItem);
    }


}
