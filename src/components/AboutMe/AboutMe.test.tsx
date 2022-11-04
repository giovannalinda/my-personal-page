import { render } from '~/__helpers__/app-tests'
import { AboutMe } from './AboutMe'

describe('AboutMe', () => {
  it('matches snapshot', () => {
    const { container } = render(<AboutMe />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
