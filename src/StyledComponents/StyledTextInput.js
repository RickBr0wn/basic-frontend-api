import styled from 'styled-components'

export const StyledTextInput = styled.input`
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
