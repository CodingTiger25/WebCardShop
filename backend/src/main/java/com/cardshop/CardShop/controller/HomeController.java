package com.cardshop.CardShop.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class HomeController {

    @CrossOrigin(origins = {"http://localhost:3000"})
    @GetMapping("/main")
    public String home(Principal principal){
        return principal.getName();
    }


    @PreAuthorize("hasAuthority('SCOPE_read')")
    @GetMapping("/secure")
    public String secure() {
        return "This is secured!";
    }
}
