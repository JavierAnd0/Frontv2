import React, { useState } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; // Asegúrate de importar el CSS

function Overlay() {
  return (
    <div style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      height: "100vh",
      width: "100%",
      zIndex: 1000,
    }} />
  );
}

function HamIcon({ onClick }) {
  return (<i className="big bars icon inverted" onClick={onClick} />);
}

function CloseIcon({ onClick }) {
  return (<i className="big close red icon" onClick={onClick} />);
}

function HamburgerMenu() {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  return (
    <>
      <HamIcon onClick={toggleSidebar} />
      {visible && <Overlay />}
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(true)}
        vertical
        visible={visible}
        width='thin'
      >
        <Menu.Item as='a'>Home</Menu.Item>
        <Menu.Item as='a'>About</Menu.Item>
        <Menu.Item as='a'>Contact</Menu.Item>
        <CloseIcon onClick={toggleSidebar} />
      </Sidebar>
    </>
  );
}

export default HamburgerMenu;
