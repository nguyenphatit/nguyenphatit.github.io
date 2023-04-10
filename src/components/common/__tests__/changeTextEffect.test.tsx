import { fireEvent, render, screen } from '@testing-library/react';
import ChangeTextEffect from '../changeTextEffect';

describe('Change text effect ', () => {
    test('should render text and apply change text effect on hover', () => {
        const text = 'Hello world';
        render(<ChangeTextEffect text={text} />);
        const element = screen.getByTestId('text-hover-effect');
        expect(element).toHaveTextContent(text);

        fireEvent.mouseOver(element);
        expect(element).toHaveTextContent(text);
    });

    test('should match snapshot', () => {
        const { container } = render(<ChangeTextEffect text="Hello, world!" />);
        expect(container.firstChild).toMatchSnapshot();
    })
})
