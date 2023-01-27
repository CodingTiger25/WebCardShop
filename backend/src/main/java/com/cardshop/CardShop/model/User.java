package com.cardshop.CardShop.model;

import jakarta.persistence.Entity;
import lombok.*;
/*import javax.persistence.*;
import javax.persistence.Id;*/
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

//import javax.persistence.Entity;
@Entity
@Table(name="users")
@Data
public class User {

    @Id
    @Column(name="user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter
    private Long id;

    @Getter @Setter
    private String email;

    @Getter @Setter
    private String password;

    @ManyToOne
    @JoinColumn(name ="fk_role_id")
    private Role role;
}
