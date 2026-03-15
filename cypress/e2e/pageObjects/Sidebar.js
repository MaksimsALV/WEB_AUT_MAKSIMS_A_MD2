export class Sidebar {
    static clickOnBurger() {
        cy.get('#menu-toggle').click();
    }
    static validateSidebar() {
        cy.get('#sidebar-wrapper').should('have.class', 'active');
    }
    static clickOnHistory() {
        cy.contains('a', 'History').click();
    }
}