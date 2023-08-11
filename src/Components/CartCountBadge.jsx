import React from "react";
import { Badge, Space } from "antd";
import CartIcon from "./CartIcon";

function CartCountBadge(props) {
  const number = props.number;
  return (
    <Space size="middle">
      <Badge count={number}>
        <CartIcon />
      </Badge>
    </Space>
  );
}

export default CartCountBadge;
