import { render } from '~/__helpers__/app-tests'
import { Adjectives } from './Adjectives'

describe('Adjectives', () => {
  it('matches snapshot', () => {
    const { container } = render(<Adjectives />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
