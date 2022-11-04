import { render } from '~/__helpers__/app-tests'
import { SocialNetworks } from './SocialNetworks'

describe('SocialNetworks', () => {
  it('matches snapshot', () => {
    const { container } = render(<SocialNetworks />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
