import { useTranslation } from '~/lib'
import * as S from './MyServices.styled'

export function MyServices() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.Title>
        Design <span>&</span> {t('Development.')}
      </S.Title>
    </S.Container>
  )
}
