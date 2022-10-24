import { Modal, Spinner } from "react-bootstrap";
const LoadingPage = (props) => {
  return (
    <Modal {...props} size="md" backdrop="static" keyboard={false} centered>
      <Modal.Body className="text-center">
        <span style={{ fontSize: "20px " }}>Uploading Form ... </span>
        <Spinner animation="border" role="status" size="sm" />
      </Modal.Body>
    </Modal>
  );
};

export default LoadingPage;
