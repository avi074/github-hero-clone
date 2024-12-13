import styled from "styled-components"

const Button = styled.button`
  margin: 0.25rem;
  padding: .5rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.375rem;
  color: white;
  min-height: 3rem;
  background-color: ${(props) => (props.color ? props.color : "blue")};

  &:hover{
    opacity: .8;
    translate: 0 1px;
  }

  &:active{
    scale: .95;
  }
`

export default Button
