import { Counter } from "../index";

import { render } from '@testing-library/react';

describe('Counster', () => {
    it('matches snapshot', ()=> {
        const component = render(<Counter />)

        expect(component).toMatchSnapshot();
    });

/*     it('render count', ()=> {
        const counts = 5;
        const component = render(<Counter count={counts} />)

        component.getByText(`${count}`);
    }) */
})