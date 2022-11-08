import { GoQuote } from 'react-icons/go'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import * as S from './Testimonial.styled'
import { useTranslation } from '~/lib'

export function Testimonial() {
  const { t } = useTranslation()

  return (
    <>
      <S.Title>{t('What they say')}</S.Title>
      <S.Container>
        <GoQuote size={28} />
        <Swiper
          slidesPerView={1}
          spaceBetween={80}
          slidesPerGroup={1}
          loop={true}
          pagination={{
            type: 'fraction',
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <S.Recommendation>
              {t(
                'Working with Giovanna was awesome! She is a very caring and dedicated person. She always tries her best to improve her results and add something more to the team, apart from her organization, which is something out of this world.',
              )}
            </S.Recommendation>
          </SwiperSlide>
          <SwiperSlide>
            <S.Recommendation>
              {t(
                'Giovanna is a great professional, always bringing new ideas to the team, very hardworking and intelligent.',
              )}
            </S.Recommendation>
          </SwiperSlide>
        </Swiper>
        <S.Paragraph>{t('Linkedin Recommendations')}</S.Paragraph>
      </S.Container>
    </>
  )
}
