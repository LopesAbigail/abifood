package com.abiprojects.abifood.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.abiprojects.abifood.entities.Order;

// 	Interface para classe que já traz um padrão CRUD para a aplicação
public interface OrderRepository extends JpaRepository<Order, Long>{

	// Linguagem JPQL
	// FROM nomeClasse
	// INNER JOIN
	// products é a coleção de produtos dentro da classe Order 
	// obj.status = 0 é o mesmo que PENDING
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
			+ "WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List<Order> findOrdersWithProducts();
}
