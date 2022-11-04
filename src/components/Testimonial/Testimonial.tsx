import { GoQuote } from 'react-icons/go'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import * as S from './Testimonial.styled'

export function Testimonial() {
  return (
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
          <S.Title>
            Trabalhar com a Giovanna foi demais! Ela é uma pessoa super
            atenciosa e dedicada. Sempre se esforça ao máximo para melhorar o
            seus resultados e agregar algo a mais ao time, fora a sua
            organização, que é coisa de outro mundo.
          </S.Title>
        </SwiperSlide>
        <SwiperSlide>
          <S.Title>
            A Giovanna é uma ótima profissional, sempre trazendo novas ideias ao
            time, muito esforçada e inteligente.
          </S.Title>
        </SwiperSlide>
      </Swiper>
      <S.Paragraph>Recomendações do Linkedin</S.Paragraph>
    </S.Container>
  )
}
