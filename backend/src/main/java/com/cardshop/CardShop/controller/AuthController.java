package com.cardshop.CardShop.controller;

import com.cardshop.CardShop.model.LoginRequest;
import com.cardshop.CardShop.model.Role;
import com.cardshop.CardShop.model.User;
import com.cardshop.CardShop.repository.RoleRepository;
import com.cardshop.CardShop.repository.UserRepository;
import com.cardshop.CardShop.service.SecurityUser;
import com.cardshop.CardShop.service.TokenService;
//import com.cardshop.CardShop.service.UserDetailsServiceImpl;
import com.cardshop.CardShop.service.UserDetailsServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;
@RestController
public class AuthController {
    private static final Logger LOG = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private final TokenService tokenService;
    @Autowired
    private final AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    RoleRepository roleRepository;

    public AuthController(TokenService tokenService, AuthenticationManager authenticationManager) {
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
    }

    //Register user
    @PostMapping("/register")
    public User addUser(@RequestBody User user){
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return userDetailsService.registerUser(user);
    }


    //Seperate endpoint for login and token?/*Authentication authentication*/
    @CrossOrigin(origins = {"http://localhost:3000"})
    @PostMapping("/token")
    public String token( @RequestBody LoginRequest userLogin) throws AuthenticationException {
        Authentication authentication = authenticationManager.authenticate(
                                        new UsernamePasswordAuthenticationToken
                                                (userLogin.email(), userLogin.password()));
        return tokenService.generateToken(authentication);
    }

    @PostMapping("/addrole")
    public Role addRole(@RequestBody Role role){
        return roleRepository.save(role);
    }
/*LOG.debug("User requested token, {}", authentication.getName());
    String token = tokenService.generateToken(authentication);
        LOG.debug("Token granted: {}", token);
        return token;
*/
}
