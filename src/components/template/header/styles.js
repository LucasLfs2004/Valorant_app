import styled from 'styled-components';

export const Header = styled.header`
  font-family: Valorant-font;
  background-color: #111;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 20px;
  z-index: 2;
  color: #fff;
  min-height: 70px;

  a h1 {
    margin: 0px;
  }

  a {
    text-decoration: none;
  }

  .content-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 48px;
  }

  .content-bottom {
    /* position: relative; */
    display: flex;
    justify-content: center;
    color: var(--color-cabernet);
  }

  @media (max-width: 500px) {
    .content-top {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
`;

export const Logo = styled.div`
  width: 380px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 6px;
  align-items: center;

  a {
    color: #fff;
  }
`;

export const Title = styled.h1`
  color: var(--color-cabernet);
  line-height: 48px;
`;

export const Links = styled.div`
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    padding: 10px;
    border: none;
    margin: 0;
    font-size: 24px;
    position: relative;
    box-sizing: border-box;
    font-family: Valorant-font;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  a:hover {
    color: var(--color-cabernet);
  }

  @media (max-width: 500px) {
    a {
    }
  }
`;
