import styled from 'styled-components'

const StyledContainer = styled.div`
  padding-top: 80px;
`

const StyledNavbar = styled.nav`
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

const StyledSignIn = styled.form`
  margin: 50px auto;
  padding: 50px 0;
  max-width: 450px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.35);
  border-radius: 10px;

  h1 {
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #34495e;
  }
`

const StyledTextInput = styled.input`
  font-size: 1.5rem;
  margin: 5px;
  font-family: inherit;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  width: ${props => props.inputWidth || '100%'};
  display: border-box;
  transition: all 0.3s;
  :focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #55c57a;
    border-color: ${props => props.inputColor || '#55c57a'};
  }
  ::-webkit-input-placeholder {
    color: #999;
  }
  :focus:invalid {
    border-bottom: 3px solid #ff7730;
  }
`

const BodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  StyledContainer,
  StyledNavbar,
  StyledSignIn,
  StyledTextInput,
  BodyContainer
}
