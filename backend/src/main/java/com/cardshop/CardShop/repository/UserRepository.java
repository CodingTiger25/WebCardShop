package com.cardshop.CardShop.repository;

import com.cardshop.CardShop.model.User;
import com.cardshop.CardShop.service.SecurityUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    User findByEmail(String email);
    //public User findByEmail(String email);
    //public User findByEmail (String email);
    Boolean existsByEmail(String email);
}
