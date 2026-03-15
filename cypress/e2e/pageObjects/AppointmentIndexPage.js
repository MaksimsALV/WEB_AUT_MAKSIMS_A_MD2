export class AppointmentIndexPage {
    static clickOnMakeAppointmentButton() {
        cy.get('#btn-make-appointment').click();
    }
}