import React, { useCallback, useState } from 'react'
import * as S from './Accordion.styles'

function Accordion(props) {
  const [toggle, setToggle] = useState(() => false)
  const { children, viewNode, className = '' } = props
  const onSetToggle = useCallback(() => {
    setToggle((prevToggle) => !prevToggle)
  }, [setToggle])
  return (
    <S.Container className={className}>
      <S.AccordionButton onClick={children && onSetToggle} toggle={toggle}>
        {viewNode}
      </S.AccordionButton>
      {children && toggle && <S.ChildrenWrapper>{children}</S.ChildrenWrapper>}
    </S.Container>
  )
}

export { Accordion }
