package com.cardshop.CardShop.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name ="num_in_cart")
@Getter
@Setter
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="items")
    private int items;

    private String cust_name;

}
