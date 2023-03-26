package com.cardshop.CardShop.controller;

import com.cardshop.CardShop.model.Cart;
import com.cardshop.CardShop.model.CartItem;
import com.cardshop.CardShop.model.CartList;
import com.cardshop.CardShop.model.CartQ;
import com.cardshop.CardShop.repository.CartItemRepository;
import com.cardshop.CardShop.repository.CartRepository;
import com.cardshop.CardShop.service.CartQService;
import com.cardshop.CardShop.service.CartService;
import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController{

    private final CartService cartService;
    private final CartQService cartQService;
    @Autowired
    private final CartItemRepository cartItemRepository;
    @Autowired
    private final CartRepository cartRepository;

    public CartController(CartService cartService, CartQService cartQService,
                          CartItemRepository cartItemRepository, CartRepository cartRepository) {
        this.cartService = cartService;
        this.cartQService = cartQService;
        this.cartItemRepository = cartItemRepository;
        this.cartRepository = cartRepository;
    }


    Logger logger = LoggerFactory.getLogger(CartController.class);

    @PostMapping("/cart")
    public void addToCart(@RequestBody CartList cartList){
        /*logger.info("Card id from cont: {}", cartList.card_id());
        logger.info("Cust name from cont: {}", cartList.cust_name());
        logger.info("Quantity from cont: {}", cartList.quantity());*/

        cartService.addToCart(cartList.card_id(),cartList.cust_name(),
                cartList.quantity(), cartList.name(), cartList.image(),cartList.price());

        }

    @GetMapping("/cart")
    public List<CartItem> numItems(String name){
        List<CartItem>  cartItems = cartItemRepository.findByEmail(name);
        //logger.info("From Cart Get controller {}", name);
        return cartItems;
    }

    @CrossOrigin(origins = "http://localhost:8080/")
    @DeleteMapping("/cart/{id}")
    public void deleteItem(@PathVariable Integer id)
    {
            cartItemRepository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:8080/")
    @Transactional
    @PutMapping("/cartamounts")
    public void amountToCart(@RequestBody CartQ cartQ)
    {
        logger.info("Customer name: {}",cartQ.cust_name());
        logger.info("Amount in PUT cart: {}", cartQ.items());

        cartQService.amountInCart(cartQ.items(),cartQ.cust_name());
    }

    @GetMapping("/cartamount")
    public Integer numCarts(String name)
    {
        Integer cartItems = cartRepository.findByEmail(name);
        logger.info("From Cart Get controller {}", name);
        return cartItems;
    }

}
