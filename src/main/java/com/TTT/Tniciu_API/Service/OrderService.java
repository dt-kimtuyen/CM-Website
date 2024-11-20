package com.TTT.Tniciu_API.Service;

import com.TTT.Tniciu_API.Model.Account;
import com.TTT.Tniciu_API.Model.Order;
import com.TTT.Tniciu_API.Model.OrderDetail;
import com.TTT.Tniciu_API.Repository.AccountRepository;
import com.TTT.Tniciu_API.Repository.OrderRepository;
import com.TTT.Tniciu_API.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    private Map<String, Order> temporaryOrders = new HashMap<>();

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public List<Order> getOrdersByAccountId(String accountId) {
        return orderRepository.findByAccountId(accountId);
    }

    public Order createOrder(Order order) {
        // Fetch the Account object based on accountId provided in Order
        Optional<Account> accountOptional = accountRepository.findById(order.getAccount().getId());

        if (accountOptional.isPresent()) {
            Account account = accountOptional.get();
            order.setAccount(account);

            // Set thời gian hiện tại cho đơn hàng
            order.setDate(LocalDateTime.now());

            // Set the order for each order detail and ensure product is fetched
            for (OrderDetail orderDetail : order.getOrderDetails()) {
                orderDetail.setOrder(order);
                productRepository.findById(orderDetail.getProduct().getId())
                        .ifPresent(orderDetail::setProduct);
            }

            return orderRepository.save(order);
        } else {
            // Handle case where account is not found
            throw new RuntimeException("Account not found with id: " + order.getAccount().getId());
        }
    }

    public void saveTemporaryOrder(Order order) {
        temporaryOrders.put(order.getVnpTxnRef(), order);
    }

    public Order getOrderByTxnRef(String vnpTxnRef) {
        return temporaryOrders.get(vnpTxnRef);
    }
    public Order updateOrder(Long id, Order orderDetails) {
        Optional<Order> order = orderRepository.findById(id);
        if (order.isPresent()) {
            Order existingOrder = order.get();
            existingOrder.setCustomerName(orderDetails.getCustomerName());
            existingOrder.setDate(orderDetails.getDate());
            existingOrder.setAddress(orderDetails.getAddress());
            existingOrder.setTotal(orderDetails.getTotal());
            existingOrder.setPayment(orderDetails.getPayment());
            existingOrder.setPaymentStatus(orderDetails.getPaymentStatus());
            existingOrder.setShippingStatus(orderDetails.getShippingStatus());
            existingOrder.setAccount(orderDetails.getAccount());
            return orderRepository.save(existingOrder);
        }
        return null;
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    public double calculateTotalRevenue() {
        List<Order> orders = orderRepository.findAll();
        double totalRevenue = 0;

        for (Order order : orders) {
            // Chỉ tính doanh thu cho các đơn hàng đã thanh toán
            if (order.getPaymentStatus().equals("Đã thanh toán")) {
                totalRevenue += order.getTotal();
            }
        }

        return totalRevenue;
    }
    public long countTotalOrders() {
        return orderRepository.count();
    }


}

