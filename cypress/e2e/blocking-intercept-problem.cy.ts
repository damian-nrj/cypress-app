describe('E2E: Intercept', () => {
  it('Can intercept player related requests without getting blocked', () => {
    cy.visit('https://energy.ch/on-air');
    cy.wait(5000);
    cy.visit('https://energy.ch/on-air');
    cy.wait(5000);

    cy.intercept({
      url: 'https://api.energy.ch/sts/energych-player',
    }).as('audioStreamRelatedRequest');

    cy.get('button.flex-shrink-0.w-12.h-12.p-2.cursor-pointer')
      .filter(':visible')
      .click();

    // This randomly causes https://energyzuerich.mp3.energy.ch/energyzuerich-high.mp3?ua=energy+website+desktop
    //  request to hang and consecutive awaited @audioStreamRelatedRequest request never fires, then timeout happens
    cy.wait('@audioStreamRelatedRequest')
      .its('response.statusCode')
      .should('eq', 200);

    cy.wait(3000);
  });
});
