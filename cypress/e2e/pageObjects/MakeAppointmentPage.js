export class MakeAppointmentPage {
    static selectFromFacilityDropdown() {
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    }
}