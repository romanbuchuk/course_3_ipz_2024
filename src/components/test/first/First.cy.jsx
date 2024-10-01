import React from 'react';

import First from './First';

describe('<First />', () => {
    it('should render default ActionBar', () => {
        cy.mount(<First />);
        cy.get('[data-testid="cy-first"]').should('exist').and('be.visible').and('have.text', 'First Component');
    });
});
