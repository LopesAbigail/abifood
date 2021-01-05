package com.abiprojects.abifood.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.abiprojects.abifood.dto.OrderDTO;
import com.abiprojects.abifood.dto.ProductDTO;
import com.abiprojects.abifood.entities.Order;
import com.abiprojects.abifood.entities.OrderStatus;
import com.abiprojects.abifood.entities.Product;
import com.abiprojects.abifood.repositories.OrderRepository;
import com.abiprojects.abifood.repositories.ProductRepository;

@Service
// Permite que a classe seja injetada em outros componentes
public class OrderService {

	@Autowired
	// Container para injeção de dependência desacoplada
	private OrderRepository ordertRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	// Retorna DTO: objeto enxuto que carrega apenas o que for especificado (não tem relação com o banco de dados)
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> orderList = ordertRepository.findOrdersWithProducts();
		// Comento stream aceita operações de alta ordem (programação adicional, etc)
		// Cria nova lista
		return orderList.stream().map(order -> new OrderDTO(order)).collect(Collectors.toUnmodifiableList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto){
	
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(),
				Instant.now(), OrderStatus.PENDING);
		
		for(ProductDTO p: dto.getProducts()) {
			// Instanciando produto SEM acessar o banco de dados
			// Cria entidade gerenciável pelo JPA
			/* Ao salvar o pedido, as associações de quais produtos são pertencentes
			 * a ele também são salvas */
			// Instanciando produto com base no Id do 'p' atual
			// Preenche tabela de associação
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		
		order = ordertRepository.save(order);
		
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id){
		Order order = ordertRepository.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = ordertRepository.save(order);
		return new OrderDTO(order);
		
	}
}
