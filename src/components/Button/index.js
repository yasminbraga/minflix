import styled from 'styled-components'

const Button = styled.button`
 color: var(--white);
  border: 1px solid var(--white);
  padding: 16px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

  @media(max-width: 800px) {
    border-radius: 0;
    border: 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    color: var(--white);
    outline: 0;
    text-align: center;
  }
`

export default Button;