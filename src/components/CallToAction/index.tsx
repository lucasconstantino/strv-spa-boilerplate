import styled from 'styled-components'

const CallToAction = styled.a`
  display: inline-block;
  font-size: 16px;
  background-color: #61dafb;
  color: black;
  padding: 10px 25px;
  white-space: nowrap;
  transition: background-color 0.2s ease-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`

export default CallToAction
