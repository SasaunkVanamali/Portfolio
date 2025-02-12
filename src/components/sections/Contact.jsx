import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 28px;
  text-align: center;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me through any of the following platforms:</Desc>
        <ContactInfo>
          <ContactItem href="mailto:sasaunk2001@gmail.com">
            <FaEnvelope /> sasaunk2001@gmail.com
          </ContactItem>
          <ContactItem href="tel:+15107071430">
            <FaPhone /> +1 510 707 1430
          </ContactItem>
          <ContactItem href="https://www.linkedin.com/in/vanamali-sasaunk/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> Sasaunk/Vanamali
          </ContactItem>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;
