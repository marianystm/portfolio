import {
  ContactWrapper,
  ContactContent,
  ContactTitle,
  ContactLinks,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <ContactWrapper>
      <ContactContent>
        <ContactTitle>Get in Touch</ContactTitle>
        <ContactLinks>
          <a href="mailto:your.email@example.com">Email</a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </ContactLinks>
      </ContactContent>
    </ContactWrapper>
  );
};
