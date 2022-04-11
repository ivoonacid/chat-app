import "./styles/Footer.css";
import { useEffect, useState } from "react";

function Footer(props) {
  const [message, setMessage] = useState("");

  useEffect = () => {
    const handleKeypress = (e) => {
      //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        this.btn.click();
      }
    };
  };

  return (
    <div className="Footer">
      <input
        type="text"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(message);
          props.setMessages([...props.messages, message]);
        }}
        className="send-btn"
      >
        ➤
      </button>
    </div>
  );
}

export default Footer;
