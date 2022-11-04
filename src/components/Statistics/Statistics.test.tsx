import { render } from '~/__helpers__/app-tests'
import { Statistics } from './Statistics'

describe('Statistics', () => {
  it('matches snapshot', () => {
    const { container } = render(<Statistics />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
