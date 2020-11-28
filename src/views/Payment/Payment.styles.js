import styled from 'styled-components'
import {
  Accordion as BaseAccordion,
  ContentLayout,
  Input as BaseInput
} from '../../components'

const Title = styled(ContentLayout.Title)`
  margin-bottom: 24px;
`
const Subtitle = styled(ContentLayout.Subtitle)`
  margin-bottom: 16px;
`
const Paragraph = styled(ContentLayout.Paragraph)`
  margin-bottom: 32px;
`
const CardPaymentTitle = styled.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.188;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primaryText};
`
const CardPaymentSubtitle = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.167;
  color: ${(props) => props.theme.colors.primaryText};
`

const PaymentTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.188;
  color: ${(props) => props.theme.colors.primaryText};
`

const Accordion = styled(BaseAccordion)`
  margin-bottom: 16px;
`

const AccordionWrapper = styled.div`
  & > div:last-child {
    margin-bottom: 40px;
  }
`
const PaymentFormWrapper = styled.div``

const PaymentFormTitle = styled(PaymentTitle)`
  font-weight: 400;
  margin-bottom: 16px;
`

const PriceTitle = styled.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.188;
  color: ${(props) => props.theme.colors.primaryText};
  margin-bottom: 8px;
`

const Price = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.188;
  color: ${(props) => props.theme.colors.primaryText};
  margin-bottom: 16px;
`
const GiftLink = styled.a`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.188;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`

const Line = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  margin-top: 40px;
  margin-bottom: 32px;
`

const Input = styled(BaseInput)`
  margin-bottom: 16px;
`

const InputCVV = styled(BaseInput)`
  width: 165px;
`

export {
  Title,
  Subtitle,
  Paragraph,
  CardPaymentTitle,
  CardPaymentSubtitle,
  Accordion,
  AccordionWrapper,
  PaymentFormWrapper,
  PaymentTitle,
  PriceTitle,
  PaymentFormTitle,
  Price,
  GiftLink,
  Input,
  InputCVV,
  Line
}
