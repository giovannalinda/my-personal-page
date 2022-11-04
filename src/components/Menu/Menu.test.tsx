import { render } from '~/__helpers__/app-tests'
import { Menu } from './Menu'

describe('Menu', () => {
  it('matches snapshot', () => {
    const { container } = render(<Menu />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
