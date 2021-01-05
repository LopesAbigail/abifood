package com.abiprojects.abifood.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.abiprojects.abifood.dto.OrderDTO;
import com.abiprojects.abifood.entities.Order;
import com.abiprojects.abifood.repositories.OrderRepository;

@Service
// Permite que a classe seja injetada em outros componentes
public class OrderService {

	@Autowired
	// Container para injeção de dependência desacoplada
	private OrderRepository ordertRepository;
	
	// Retorna DTO: objeto enxuto que carrega apenas o que for especificado (não tem relação com o banco de dados)
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> orderList = ordertRepository.findOrdersWithProducts();
		// Comento stream aceita operações de alta ordem (programação adicional, etc)
		// Cria nova lista
		return orderList.stream().map(order -> new OrderDTO(order)).collect(Collectors.toUnmodifiableList());
	}
	
}
