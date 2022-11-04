import { render } from '~/__helpers__/app-tests'
import { Contact } from './Contact'

describe('Contact', () => {
  it('matches snapshot', () => {
    const { container } = render(<Contact />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
