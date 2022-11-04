import { render } from '~/__helpers__/app-tests'
import { MyServices } from './MyServices'

describe('MyServices', () => {
  it('matches snapshot', () => {
    const { container } = render(<MyServices />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
