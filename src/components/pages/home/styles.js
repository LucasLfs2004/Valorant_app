import styled from 'styled-components';

export const Home = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(90deg, var(--color-1) 50%, var(--color-3) 100%);
  min-height: 90vh;

  @media (max-width: 500px) {
    background: linear-gradient(0deg, var(--color-1) 50%, var(--color-3) 100%);
    padding-top: 20px;
    max-width: 100%;
    flex-direction: column-reverse;
    height: 100%;
  }
`;

export const AgentBanner = styled.section`
  width: 1000px;
  height: auto;
  background-repeat: no-repeat;
  background-image: url('https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/background.png');
  background-size: 70%;

  img {
    width: 100%;
  }
`;
