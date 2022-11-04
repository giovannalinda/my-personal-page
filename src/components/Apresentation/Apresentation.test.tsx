import { render } from '~/__helpers__/app-tests'
import { Apresentation } from './Apresentation'

describe('Apresentation', () => {
  it('matches snapshot', () => {
    const { container } = render(<Apresentation />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
