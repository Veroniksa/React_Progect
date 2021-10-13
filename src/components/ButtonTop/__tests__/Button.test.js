import React from "react";
import {render, fireEvent} from '@testing-library/react';
import {ButtonTop} from '..';

describe('Button', () => {
    it.todo("matches snapshot");

    it('calls when clicked', () => {
        const handleClick = jest.fn();
        const component = render(<ButtonTop onClick={handleClick}><span>Hello Button</span></ButtonTop>);
    
        const clickable = component.getByRole('button');
        fireEvent(clickable, new MouseEvent('click', { bubbles: true }));
    
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
})