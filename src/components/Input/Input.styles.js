import styled from 'styled-components'

const Container = styled.div``

const Label = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.188;
  color: ${(props) => props.theme.colors.secondaryText};
  margin-bottom: 10px;
`

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.borderGray};
  width: 100%;
  height: 2.875rem;
  border-radius: 6px;
  padding: 8px 16px;
`
export { Label, Input, Container }
