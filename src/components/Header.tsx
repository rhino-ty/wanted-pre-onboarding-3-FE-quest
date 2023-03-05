import styled from "styled-components";

const HeaderContainer = styled.div`
  border-bottom: 0.5px solid #000;
  padding: 20px;
  align-items: center;

  h1 {
    font-style: italic;
    font-weight: 500;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Wanted Pre-onboarding course</h1>
    </HeaderContainer>
  );
}
