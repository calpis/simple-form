import React, { useState } from "react";
import NotificationPage from "./component/Page/NotificationPage";
import FormPage from "./component/Page/FormPage";
import LoadingPage from "./component/Page/LoadingPage";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [submitted, setSubmitted] = useState("");

  const handleSendEmail = input => {
    setShowLoading(true);
   setTimeout(() => {
     setShowLoading(false);
     setShowNotification(true);
     setSubmitted(uuidv4());
   }, 5000);
  };

  return (
    <Container>
      <FormPage submitted={submitted} handleSendEmail={handleSendEmail} />
      <LoadingPage show={showLoading} onHide={() => setShowLoading(false)} />
      <NotificationPage
        show={showNotification}
        onHide={() => setShowNotification(false)}
      />
    </Container>
  );
};

export default App;
