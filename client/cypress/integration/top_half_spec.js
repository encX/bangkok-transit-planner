describe('SearchPanel', () => {

	it('Go button should be disabled when some of selector is empty', () => {

		cy.on('uncaught:exception', () => false);

		cy.visit('/');

		cy.get('#origin-selector').as('originSelector');
		cy.get('#destination-selector').as('destinationSelector');
		cy.get('#get-routes-button').as('getRoutesButton');


		cy.get('@getRoutesButton').should('be.disabled');


		cy.get('@originSelector').parent().click(); // Click for expanding selector options
		cy.get('@originSelector').type('{enter}'); // Press enter for select first option


		cy.get('@getRoutesButton').should('be.disabled');


		cy.get('#destination-selector').parent().click(); // Click for expanding selector options
		cy.get('#destination-selector').type('{enter}'); // Press enter for select first option


		cy.get('@getRoutesButton').should('be.enabled');


	});

});
