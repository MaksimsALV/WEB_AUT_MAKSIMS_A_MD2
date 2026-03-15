export class MakeAppointmentPage {
    static selectFromFacilityDropdown() {
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    }
    static checkApplyForHospitalReadmission() {
        cy.get('#chk_hospotal_readmission').check();
    }
    static selectMedicareRadioButton() {
        cy.get('#radio_program_medicaid').check();
    }
    static setVisitDateFromCalendar() {
        cy.get('#txt_visit_date').click();
        cy.get('.day').contains('30').click();
    }
    static setComment() {
        cy.get('#txt_comment').type('CURA Healthcare Service');
    }
    static clickBookAppointmentButton() {
        cy.get('#btn-book-appointment').click();
    }
}