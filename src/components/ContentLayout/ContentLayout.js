import React from 'react'
import * as S from './ContentLayout.styles'

function ContentLayout(props) {
  const { children } = props
  return <S.Layout>{children}</S.Layout>
}

ContentLayout.Title = S.Title
ContentLayout.Subtitle = S.Subtitle
ContentLayout.Paragraph = S.Paragraph

export { ContentLayout }
