import { useState } from "react";
import { FloatButton } from "antd";
// import "antd/dist/antd.css";
import { CaretUpOutlined } from "@ant-design/icons";
function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    const scrolledDistance = document.documentElement.scrollTop;
    if (scrolledDistance > 700) {
      setVisible(true);
    } else if (scrolledDistance <= 300) {
      setVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", toggleVisible);

  return (
    <FloatButton
      icon={<CaretUpOutlined />}
      onClick={() => scrollToTop()}
    ></FloatButton>
  );
}

export default ScrollUpButton;
