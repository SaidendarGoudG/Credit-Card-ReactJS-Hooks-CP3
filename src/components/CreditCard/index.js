import {useState} from 'react'

import {
  MainContainer,
  CreditCardDetailsContainer,
  CreditCardHeadingContainer,
  CreditCardHeading,
  HorizontalLine,
  CardContainer,
  Card,
  CardNumber,
  CardholderNameText,
  CardholderName,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardholderName] = useState('')
  const cardholderNameUpperCase = cardholderName.toUpperCase()

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardholderName = event => {
    setCardholderName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardDetailsContainer>
        <CreditCardHeadingContainer>
          <CreditCardHeading>CREDIT CARD</CreditCardHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardholderNameText>CARDHOLDER NAME</CardholderNameText>
            <CardholderName>{cardholderNameUpperCase}</CardholderName>
          </Card>
        </CardContainer>
      </CreditCardDetailsContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardholderName}
            onChange={onChangeCardholderName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </MainContainer>
  )
}
export default CreditCard
