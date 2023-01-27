package com.cardshop.CardShop;

import com.cardshop.CardShop.model.CartItem;
import com.cardshop.CardShop.model.MagicCard;
import com.cardshop.CardShop.model.User;
import com.cardshop.CardShop.repository.CartItemRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class ShoppingCartTest {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testAddOne(){
        MagicCard magicCard = entityManager.find(MagicCard.class, 1);
        User user = entityManager.find(User.class, 3);

        CartItem cartItem = new CartItem();
        cartItem.setUser(user);
        cartItem.setMagicCard(magicCard);
        cartItem.setQuantity(1);

        CartItem savecart =  cartItemRepository.save(cartItem);

        assertTrue(savecart.getId()> 0);
    }
}
