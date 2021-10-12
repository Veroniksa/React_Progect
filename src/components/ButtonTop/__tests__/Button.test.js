import React from "react"
import {render, fireEvent} from '@testing-library/react';
import ButtonTop from "../index";

describe('Button', () => {
    it.todo("matches snapshot");

/*     it('calls when cildren', () => {
        const hendelClick = jest.fn();
        const component = render(<ButtonTop onClick={hendelClick}><span>Hello Button</span></ButtonTop>)

        const clicked = component.getByRole('button');
        fireEvent(clicked, new MouseEvent('click', {bubbles: true}));

        expect(hendelClick).toHaveCalledTimes(1)
    }) */
})