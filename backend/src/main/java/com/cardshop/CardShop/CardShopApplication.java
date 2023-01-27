package com.cardshop.CardShop;

import com.cardshop.CardShop.config.RsaKeyProperties;
import com.cardshop.CardShop.model.Cart;
import com.cardshop.CardShop.model.CartItem;
import com.cardshop.CardShop.model.MagicCard;
import com.cardshop.CardShop.model.User;
import com.cardshop.CardShop.repository.CartItemRepository;
import com.cardshop.CardShop.repository.CartRepository;
import com.cardshop.CardShop.repository.MagicCardRepository;
import com.cardshop.CardShop.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.concurrent.TimeUnit;

@SpringBootApplication
@EnableConfigurationProperties(RsaKeyProperties.class)
@EnableJpaRepositories(basePackageClasses = {UserRepository.class, MagicCardRepository.class,
		CartItemRepository.class, CartRepository.class})
@EntityScan(basePackageClasses = {User.class, MagicCard.class, CartItem.class, Cart.class})
@EnableWebMvc
public class CardShopApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(CardShopApplication.class, args);
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {

		// Register resource handler for images
		registry.addResourceHandler("/images/**").addResourceLocations("/WEB-INF/images/")
				.setCacheControl(CacheControl.maxAge(2, TimeUnit.HOURS).cachePublic());
	}

}
