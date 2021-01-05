package com.abiprojects.abifood.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.abiprojects.abifood.dto.ProductDTO;
import com.abiprojects.abifood.entities.Product;
import com.abiprojects.abifood.repositories.ProductRepository;

@Service
// Permite que a classe seja injetada em outros componentes
public class ProductService {

	@Autowired
	// Container para injeção de dependência desacoplada
	private ProductRepository productRepository;
	
	// Retorna DTO: objeto enxuto que carrega apenas o que for especificado (não tem relação com o banco de dados)
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll(){
		List<Product> productList = productRepository.findAllByOrderByNameAsc();
		// Comento stream aceita operações de alta ordem (programação adicional, etc)
		// Cria nova lista
		return productList.stream().map(product -> new ProductDTO(product)).collect(Collectors.toUnmodifiableList());
	}
	
}
