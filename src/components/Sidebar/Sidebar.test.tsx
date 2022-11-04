import { render } from '~/__helpers__/app-tests'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('matches snapshot', () => {
    const { container } = render(<Sidebar />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
