import { useState } from "react";
import "./form.css";
import emailjs from "@emailjs/browser";

const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const user_id = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

// const service_id = "import.meta.env.VITE_EMAILJS_SERVICE_ID";
// const template_id = "import.meta.env.VITE_EMAILJS_TEMPLATE_ID";
// const user_id = "import.meta.env.VITE_EMAILJS_PUBLIC_ID";

const Form = () => {
  const [formSubmitIsActive, setFormSubmitIsActive] = useState(false);
  const [formSent, setFormSent] = useState("Failed to send!");
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  let data = {
    service_id,
    template_id,
    user_id,
    template_params: {
      name_to: formValue.name,
      message: formValue.message,
      email_to: formValue.email,
    },
  };

  const handleFormResponse = (message: string) => {
    // console.log(message);
    setFormSent(message);
    setFormSubmitIsActive(true);
    setTimeout(() => {
      setFormSubmitIsActive(false);
    }, 1000);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        data.service_id,
        data.template_id,
        data.template_params,
        data.user_id
      )
      .then(
        function (response) {
          console.log("Success!", response.status, response.text);
          handleFormResponse("Sent!");
        },
        function (error) {
          console.log("Failed!", error.status, error.text);
          handleFormResponse("Failed to send!");
        }
      );
  };

  return (
    <div className="form__container">
      <div className="form__body">
        <form onSubmit={handleSubmit}>
          <div className="form__field-container">
            <label>Name</label>
            <input
              type="text"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormValue({ ...formValue, name: e.target.value })
              }
              value={formValue.name}
            />
          </div>
          <div className="form__field-container">
            <label>Email</label>
            <input
              type="text"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormValue({ ...formValue, email: e.target.value })
              }
              value={formValue.email}
            />
          </div>
          <div className="form__field-container">
            <label>Message</label>
            <textarea
              required
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setFormValue({ ...formValue, message: e.target.value })
              }
              value={formValue.message}
            ></textarea>
          </div>
          <button className="form__submit" type="submit">
            Send
            <div
              className={
                formSubmitIsActive
                  ? "form__submit-tooltip activeSubmit"
                  : "form__submit-tooltip"
              }
            >
              {formSent}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
