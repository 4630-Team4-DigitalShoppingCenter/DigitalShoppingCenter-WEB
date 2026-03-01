import React from "react";
import { Link } from "react-router-dom";
import data from "./data";

function Orders() {
  return (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Orders</h3>
      </div>

      <div className="order-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>USER</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {data.orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td>${order.totalPrice}</td>
                <td>{order.user.name}</td>
                <td>{order.isPaid ? order.paidAt : "No"}</td>
                <td>{order.isDelivered ? order.deliveredDate : "No"}</td>
                <td>
                  <Link to={`/orders/${order._id}`}>Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;