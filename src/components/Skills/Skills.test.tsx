import { render } from '~/__helpers__/app-tests'
import { Skills } from './Skills'

describe('Skills', () => {
  it('matches snapshot', () => {
    const { container } = render(<Skills />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
