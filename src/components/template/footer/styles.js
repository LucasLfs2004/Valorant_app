import styled from 'styled-components';

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  height: 50px;
  background-color: black;
  color: var(--color-bege);
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;
  padding: 10px;
  font-size: 0.8rem;

  .icons img {
    margin: 0 20px;
    width: 32px !important;
  }
`;
