package com.abiprojects.abifood.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abiprojects.abifood.dto.ProductDTO;
import com.abiprojects.abifood.services.ProductService;

// Controlador REST
// Controller-Service-Repository
@RestController
@RequestMapping(value="/products")
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@GetMapping
	// Encapsula a resposta de um requst HTTP
	public ResponseEntity <List<ProductDTO>> findAll(){
		
		List<ProductDTO> list = service.findAll();
		// Retorna código 200 HTTP
		return ResponseEntity.ok().body(list);
	}
}
