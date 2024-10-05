import { useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EmailForm.css";
const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_smmu6w8";
    const templateId = "template_7f31p1h";
    const publicKey = "OA-Hv_BH84tRrttoq";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Move the emailjs.send() call inside handleSubmit
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <>
      <h1>Send Mail</h1>
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card p-4" style={{ width: "400px" }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="to email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                cols={30}
                rows={10}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailForm;
