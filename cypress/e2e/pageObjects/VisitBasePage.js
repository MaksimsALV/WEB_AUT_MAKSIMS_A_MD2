export class VisitBasePage {
    static get url() {
        return '/';
    }
    static visit() {
        cy.visit(this.url);
    }
}