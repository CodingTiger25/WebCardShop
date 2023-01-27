package com.cardshop.CardShop.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Table(name = "role", schema = "public")
public class Role {
    @Id
    @Column(name="role_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter
    private Integer id;

    @Getter @Setter
    private String rolename;
}
