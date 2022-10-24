import Modal from "react-bootstrap/Modal";
const NotificationPage = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        style={{
          backgroundColor: "#1C86EE	",
          color: "white",
        }}
        closeButton
      >
        <Modal.Title id="contained-modal-title-vcenter">Email Send</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Email is successfully sent, please check your inbox fo the form
          details.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default NotificationPage;
