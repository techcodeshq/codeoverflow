import React from "react";
import { Container, FormGroup } from "@styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@components";
import { SectionWrapper, Area, Circles, Title, FormWrapper, SmallText } from "./style";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email field is required"),
  fname: Yup.string().required("First name is required"),
  lname: Yup.string().required("Last name is required"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

const SignupForm = () => {
  return (
    <>
      <SectionWrapper>
        <Container>
          <Title>Register</Title>
          <FormWrapper>
            <Formik
              initialValues={{
                email: undefined,
                fname: undefined,
                lname: undefined,
                phoneNumber: undefined,
              }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                const body = {
                  name: values.fname + " " + values.lname,
                  email: values.email,
                  phoneNumber: values.phoneNumber,
                };

                fetch("http://form-api-techcodes.vercel.app", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify(body),
                })
                  .then()
                  .catch();
              }}>
              {({ isSubmitting, isValid, dirty }) => (
                <Form>
                  <FormGroup>
                    <label htmlFor="fname">First name</label>
                    <Field
                      type="text"
                      name="fname"
                      placeholder="First name"
                      autocomplete="given-name"
                    />
                    <ErrorMessage component="span" name="fname" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="fname">Last name</label>
                    <Field
                      type="text"
                      name="lname"
                      placeholder="Last name"
                      autocomplete="family-name"
                    />
                    <ErrorMessage component="span" name="lname" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" placeholder="Email" autocomplete="email" />
                    <ErrorMessage component="span" name="email" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="phoneNumber">Phone</label>
                    <Field
                      type="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone"
                      autocomplete="phone"
                    />
                    <ErrorMessage component="span" name="phoneNumber" />
                  </FormGroup>
                  <SmallText>
                    By signing up for Code Overflow you agree to consent to have your pictures taken
                    and adhere to all the rules of TechCodes.
                  </SmallText>
                  <Button disabled={!isValid || !dirty || isSubmitting} type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </FormWrapper>
        </Container>
      </SectionWrapper>
      <Area>
        <Circles>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </Circles>
      </Area>
    </>
  );
};

export default SignupForm;
