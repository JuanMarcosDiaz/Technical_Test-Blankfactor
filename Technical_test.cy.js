describe ('Navigate from homepage to Contact through Retirement and Wealth section', () => {
    it ('Extract content from Retirement and Wealth and verify Contact page', () => {
        cy.visit('https://blankfactor.com/');
        cy.contains('button', 'Accept All').click();
        cy.get('li[id="menu-item-4871"]').trigger('mouseover');
        cy.contains('a', 'Retirement and wealth').click({force:true});
        cy.contains('Powering innovation in retirement services').scrollIntoView();
        cy.contains('.swiper-slide', 'Machine learning').trigger('mouseover').invoke('text').then((texto) => {cy.log(texto);});
        cy.scrollTo('bottom');
        cy.contains('a', "Let's get started").click();
        cy.url().should('include', '/contact');
        cy.title().should('include', 'Contact').then((title) => {cy.log(title);})
    });
})