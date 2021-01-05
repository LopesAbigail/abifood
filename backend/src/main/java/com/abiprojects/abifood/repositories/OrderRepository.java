package com.abiprojects.abifood.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abiprojects.abifood.entities.Order;

// 	Interface para classe que já traz um padrão CRUD para a aplicação
public interface OrderRepository extends JpaRepository<Order, Long>{

}
