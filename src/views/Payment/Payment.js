import React, { Fragment } from 'react'
import { ContentLayout } from '../../components'
import * as S from './Payment.styles'

function Payment() {
  return (
    <ContentLayout>
      <S.Title>Pagos</S.Title>
      <S.Subtitle>Métodos de pago</S.Subtitle>
      <S.Paragraph>
        Añade un método de pago a través de nuestro sistema de pago seguro y
        empieza a disfrutar de tu vehículo limpio, sin mover un dedo.
      </S.Paragraph>
      <S.AccordionWrapper>
        <S.Accordion
          viewNode={
            <Fragment>
              <S.CardPaymentTitle>
                Tarjeta de crédito o débito
              </S.CardPaymentTitle>
              <S.CardPaymentSubtitle>Visa, Mastercard</S.CardPaymentSubtitle>
            </Fragment>
          }
        >
          <S.PaymentFormTitle>
            Introduce los datos de tu tarjeta:
          </S.PaymentFormTitle>
          <S.Input label='Nº tarjeta de crédito/débito' />
          <S.Input label='Caducidad' />
          <S.InputCVV label='CVV' />
          <S.Line />
        </S.Accordion>
        <S.Accordion
          viewNode={
            <Fragment>
              <S.CardPaymentTitle>PayPal</S.CardPaymentTitle>
              <S.CardPaymentSubtitle>
                Conecta a tu cuenta PayPal
              </S.CardPaymentSubtitle>
            </Fragment>
          }
        />
      </S.AccordionWrapper>
      <S.Subtitle>Crédito Clinpify</S.Subtitle>
      <S.PriceTitle>Total</S.PriceTitle>
      <S.Price>0€</S.Price>
      <S.GiftLink>Añade el número de tu cheque regalo</S.GiftLink>
    </ContentLayout>
  )
}

export default Payment
