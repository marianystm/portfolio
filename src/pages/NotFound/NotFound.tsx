import { useNavigate } from "react-router-dom";
import { NotFoundWrapper, NotFoundContent, NotFoundTitle, BackButton } from "./NotFound.styled";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundWrapper>
      <NotFoundContent>
        <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
        <BackButton onClick={() => navigate("/")}>Go Back Home</BackButton>
      </NotFoundContent>
    </NotFoundWrapper>
  );
}; 