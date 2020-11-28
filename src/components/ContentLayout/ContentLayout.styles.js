import styled from 'styled-components'

const Layout = styled.div`
  padding: 24px 16px;
  @media(min-width: 769px) {
    margin: 0 auto;
    max-width: 768px;
  }
`
const Title = styled.div`
  font-weight: 500;
  font-size: 1.625rem;
  line-height: 1.15;
  color: ${(props) => props.theme.colors.primaryText};
`
const Subtitle = styled.div`
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 1.188;
  color: ${(props) => props.theme.colors.primaryText};
`
const Paragraph = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.188;
  color: ${(props) => props.theme.colors.primaryText};
`
export { Layout, Title, Subtitle, Paragraph }
