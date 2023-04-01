import {render,screen} from '@testing-library/react';
import Home from './Home';
import {MemoryRouter} from "react-router-dom";


describe('The home page', () => {
    test('renders This is the home page', () => {
        render(<MemoryRouter><Home></Home></MemoryRouter>);

        const homePageElement = screen.getByText('This is the home of the card shop');
        expect(homePageElement).toBeInTheDocument();
    });

    test('renders Enter the card site', () => {
        render(<MemoryRouter><Home></Home></MemoryRouter>);

        const homePageElement = screen.getByText('Enter the card site');
        expect(homePageElement).toBeInTheDocument();
    });
})
