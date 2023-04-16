import { forwardRef } from "react";
import { Form, Locations } from "../../components";

import "./contacts.css";

const Contacts = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div className="contacts__container" id="contacts">
      <div className="contacts__texts">
        <h2>Contacts</h2>
        <p>
          Mat Rock Special Ayam Goreng Kunyit offers great catering services for
          your functions and events. Contact us today to enjoy a delicious
          turmeric fried meal at an affordable price!
        </p>
      </div>
      <div className="contacts__body">
        <Form />
        <Locations />
      </div>
    </div>
  );
});

export default Contacts;
