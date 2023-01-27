package com.cardshop.CardShop.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.web.WebProperties;

@Entity
@Table(name="cart_items")
@Getter
@Setter
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @JoinColumn(name = "card_id")
    private Integer card_id;

    @JoinColumn(name = "name")
    private String name;


    /*@JoinColumn(name ="customer_id")
    private Integer customer_id;*/
    @JoinColumn(name = "cust_name", referencedColumnName = "email")
    private String cust_name;

    private Integer quantity;

    private String image;
}
