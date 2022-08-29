/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
 import store from '../../store'

import Header from '.';

describe("Header component", () => {

    it("Displays an H1 with appropriate text", () => {

        render(<Provider store={store}><BrowserRouter><Header /></BrowserRouter></Provider>);

        const heading = screen.queryByRole("heading");

        expect(heading).toBeInTheDocument();

    })

})