package com.abiprojects.abifood.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.abiprojects.abifood.dto.OrderDTO;
import com.abiprojects.abifood.services.OrderService;

// Controlador REST
// Controller-Service-Repository
@RestController
@RequestMapping(value="/orders")
public class OrderController {
	
	@Autowired
	private OrderService service;
	
	@GetMapping
	// Encapsula a resposta de um requst HTTP
	public ResponseEntity <List<OrderDTO>> findAll(){
		
		List<OrderDTO> list = service.findAll();
		// Retorna código 200 HTTP
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	// @RequestBody serve para converter JSON no nosso objeto JAVA DTO
	public ResponseEntity<OrderDTO> insert(@RequestBody OrderDTO dto) {
		dto = service.insert(dto);
		// Para retornar o status 201 - criado
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	
}
