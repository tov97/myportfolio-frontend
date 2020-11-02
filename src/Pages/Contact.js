import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHttpContact } from "../Components/hooks/contact-hook";
import StyledButton from "../Components/ui/StyledButton";
import LoadingSpinner from "../Components/ui/LoadingSpinner";
const Contact = () => {
  const { sendRequest } = useHttpContact();
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <Header>Contact</Header>
      <PromptText>Have some questions or want to work together?</PromptText>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
            try {
              setLoading(true);
              const responseData = await sendRequest(
                process.env.REACT_APP_BACKEND_URL + "/contact/send",
                "POST",
                JSON.stringify({
                  name: values.name,
                  email: values.email,
                  message: values.message,
                }),
                { "Content-Type": "application/json" }
              );
              setSubmitting(false);
              setStatus({ success: true });
              setLoading(false);
              alert("Message sent!");
              resetForm();
            } catch (err) {
              setStatus({ success: false });
              setLoading(false);
              alert("Message failed. Please try again!");
              resetForm();
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormCard>
                <ErrorMessage name="name" component="div" />
                <StyledField type="text" name="name" placeholder="Name" />
                <ErrorMessage name="email" component="div" />
                <StyledField type="email" name="email" placeholder="Email" />
                <ErrorMessage name="message" component="div" />
                <StyledField
                  component="textarea"
                  type="text"
                  name="message"
                  placeholder="Your message"
                />
                <StyledButton type="submit" disabled={isSubmitting}>
                  Submit
                </StyledButton>
              </FormCard>
            </Form>
          )}
        </Formik>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.p`
  margin-top: 3%;
  margin-bottom: 0;
  font-family: "Norsebold";
  font-size: 48px;
`;
const PromptText = styled.p`
  font-size: 28px;
  font-family: Georgia, serif;
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  min-height: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1.5rem;
  overflow: hidden;
  background: white;
`;

const StyledField = styled(Field)`
  min-width: 450px;
  width: 100%;
  font-family: Georgia, serif;
  border: 1px solid #ccc;
  background: #f8f8f8;
  padding: 0.15rem 0.25rem;
  margin-bottom: 35px;
  &:focus {
    outline: none;
    background: #ebebeb;
    border-color: #510077;
  }
`;

export default Contact;
