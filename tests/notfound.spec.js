import Enzyme, { mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import HomePage from '../src/pages/homepage';
import '@testing-library/jest-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('404 response', () => {
  const wrapper = mount(
    // <MemoryRouter initialEntries={[ '/random' ]}>
      <HomePage/>
    // </MemoryRouter>
    );
  it('sending 404 response', () => {
    // var link = wrapper.find('a').attributes('href')
    // expect(link).toEqual('/random');
    // render(<HomePage/>)
    expect(wrapper.find('a')).not.toContain('/random')
})
})