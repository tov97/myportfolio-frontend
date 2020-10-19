import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
const Contact = () => {
  return (
    <Container>
      <Header>Contact</Header>
      <PromptText>Have some questions or want to work together?</PromptText>
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormCard>
              <StyledField type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
              <StyledField type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
              <StyledField
                as="textarea"
                type="textarea"
                name="message"
                placeholder="Your message"
              />
              <ErrorMessage name="message" component="div" />
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </FormCard>
          </Form>
        )}
      </Formik>
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
  margin-top: 5%;
  margin-bottom: 0;
  font-family: "Norsebold";
  font-size: 54px;
`;
const PromptText = styled.p`
  font-size: 28px;
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
  font: inherit;
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

const Button = styled.button`
  font-family: "Norsebold";
  font-size: 26px;
  padding: 0.5rem 1.5rem;
  border: 0.05em solid #000000;
  border-radius: 0.12em;
  background: transparent;
  color: #000000;
  cursor: pointer;
  width: 75%;
  text-decoration: none;
  display: inline-block;
  &:hover {
    background-color: goldenrod;
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    color: #ffffff;
    border-color: #ffffff;
  }
`;
export default Contact;
