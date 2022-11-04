import { render } from '~/__helpers__/app-tests'
import { About } from './About'

describe('About', () => {
  it('matches snapshot', () => {
    const { container } = render(<About />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
