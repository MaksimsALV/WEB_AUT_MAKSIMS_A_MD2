export class HistoryPage {
    static validateEmptyHistory() {
        cy.contains('No appointment').should('be.visible');
    }
}