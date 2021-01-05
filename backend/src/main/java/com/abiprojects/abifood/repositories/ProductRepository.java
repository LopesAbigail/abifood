package com.abiprojects.abifood.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abiprojects.abifood.entities.Product;

// 	Interface para classe que já traz um padrão CRUD para a aplicação
public interface ProductRepository extends JpaRepository<Product, Long>{

	// nota: "name" é o mesmo da variável 'name' presente em Product
	List<Product> findAllByOrderByNameAsc();
}
