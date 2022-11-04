import { render } from '~/__helpers__/app-tests'
import { Companies } from './Companies'

describe('Companies', () => {
  it('matches snapshot', () => {
    const { container } = render(<Companies />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
