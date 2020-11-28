import styled from 'styled-components'

const Container = styled.div``

const AccordionButton = styled.button`
  border: 1px solid
    ${({ theme, toggle }) =>
      toggle ? theme.colors.borderBlack : theme.colors.borderGray};
  border-width: ${({ toggle }) => toggle && '2px'};
  padding: 16px 12px;
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  text-align: left;
  border-radius: 6px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`
const ChildrenWrapper = styled.div`
  margin-top: 24px;
`

export { AccordionButton, Container, ChildrenWrapper }
