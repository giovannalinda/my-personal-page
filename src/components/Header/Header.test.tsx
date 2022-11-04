import { render } from '~/__helpers__/app-tests'
import { Header } from './Header'

describe('Header', () => {
  it('matches snapshot', () => {
    const { container } = render(<Header />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
