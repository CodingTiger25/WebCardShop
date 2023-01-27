package com.cardshop.CardShop.service;

import com.cardshop.CardShop.controller.AuthController;
import com.cardshop.CardShop.model.User;
import com.cardshop.CardShop.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email); //3:46
        SecurityUser securityUser = new SecurityUser(user);
        return securityUser;
    }

    public User registerUser(User user){
        return userRepository.save(user);
    }
}
