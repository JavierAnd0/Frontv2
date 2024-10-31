import React, { useState } from 'react';
import { Form, Message, Button } from 'semantic-ui-react';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = () => {
    // Lógica de envío del formulario
    setFormSuccess(true); // Muestra el mensaje de éxito cuando el formulario se envía
  };

  return (
    <Form success={formSuccess} onSubmit={handleSubmit}>
      <Form.Field>
        <label>E-mail</label>
        <input 
          type="email" 
          placeholder="joe@schmoe.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </Form.Field>

      {formSuccess && (
        <Message success>
          <Message.Header>Form Completed</Message.Header>
          <p>You're all signed up for the newsletter.</p>
        </Message>
      )}

      <Button type="submit" primary>
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
