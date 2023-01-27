package com.cardshop.CardShop.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name="magic_the_gathering",schema = "public")

public class MagicCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Integer price;
    private String condition;
    private String image;
}