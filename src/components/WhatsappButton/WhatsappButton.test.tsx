import { render } from '~/__helpers__/app-tests'
import { WhatsappButton } from './WhatsappButton'

describe('WhatsappButton', () => {
  it('matches snapshot', () => {
    const { container } = render(<WhatsappButton />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
