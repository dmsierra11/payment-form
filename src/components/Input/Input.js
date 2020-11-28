import React, { useCallback } from 'react'
import * as S from './Input.styles'

function Input(props) {
  const { label, inputText, onChange, className = '' } = props
  const onChangeText = useCallback(
    (event) => {
      onChange?.(event)
    },
    [onChange]
  )
  return (
    <S.Container className={className}>
      <S.Label>{label}</S.Label>
      <S.Input onChange={onChangeText}>{inputText}</S.Input>
    </S.Container>
  )
}

export { Input }
