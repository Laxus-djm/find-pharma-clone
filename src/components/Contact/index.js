import React from "react";
import { Container } from "./../reusable";
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import {
  ContactWrapper,
  ContactH4,
  ContactHeading,
  ContactIcon,
  ContactInfo,
  ContactItem,
} from "./ContactElements";

function Contact() {
  return (
    <Container>
      <ContactWrapper>
        <ContactItem>
          <ContactIcon Icon={GoLocation} />
          <ContactInfo>
            <ContactHeading>Our Address</ContactHeading>
            <ContactH4>Drive Chicago, IL 60607</ContactH4>
          </ContactInfo>
        </ContactItem>
        <ContactItem>
          <ContactIcon Icon={AiOutlinePhone} />
          <ContactInfo>
            <ContactHeading>Call Us</ContactHeading>
            <ContactH4>360-779-2228</ContactH4>
          </ContactInfo>
        </ContactItem>
        <ContactItem>
          <ContactIcon Icon={AiOutlineMail} />
          <ContactInfo>
            <ContactHeading>Our Mail</ContactHeading>
            <ContactH4>example@example.com</ContactH4>
          </ContactInfo>
        </ContactItem>
      </ContactWrapper>
    </Container>
  );
}

export default Contact;
