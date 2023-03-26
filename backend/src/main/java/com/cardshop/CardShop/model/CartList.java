package com.cardshop.CardShop.model;

public record CartList(Integer card_id, String name, String cust_name,
                       Integer quantity, String image, Integer price) {
}
