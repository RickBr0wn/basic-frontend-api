import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  line-height: 1.6;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border: 1px solid #a2a2a2;
  background-color: #f4f4f4;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  position: fixed;
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    color: #34495e;
    margin-top: 5px;
  }

  a {
    text-decoration: none;
    color: #34495e;
  }

  h1 {
    margin: 0;
    font-size: 1.45em;
  }

  h1 a,
  ul a {
    padding: 10px 15px;
    text-transform: uppercase;
    text-align: center;
    display: block;
  }

  ul a {
    color: #34495e;
    font-size: 0.99em;
  }

  ul a:hover {
    color: #718daa;
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      display: flex;
    }
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
