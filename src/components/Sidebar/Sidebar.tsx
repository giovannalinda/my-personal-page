import { Menu } from 'components/Menu'

import { useTranslation } from '~/lib'
import { SocialNetworks } from '../SocialNetworks'

import * as S from './Sidebar.styled'

export type SidebarProps = {
  onClose?: () => void
}

export function Sidebar({ onClose }: SidebarProps) {
  const { t } = useTranslation()

  return (
    <S.Overlay onClick={onClose}>
      <S.Container
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.4,
        }}
      >
        <S.CloseButton onClick={onClose}>{t('Close')}</S.CloseButton>
        <S.Content>
          <Menu />
          <SocialNetworks />
        </S.Content>
      </S.Container>
    </S.Overlay>
  )
}
