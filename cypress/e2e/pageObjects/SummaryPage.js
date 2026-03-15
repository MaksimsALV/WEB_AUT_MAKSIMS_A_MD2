export class SummaryPage {
    static validateFacility() {
        cy.get('#facility').should('contain.text', 'Seoul CURA Healthcare Center');
    }
    static validateHospitalReadmissionCheckbox() {
        cy.get('#hospital_readmission').should('contain.text', 'Yes');
    }
    static validateMedicaid() {
        cy.get('#program').should('contain.text', 'Medicaid');
    }
    static validateVisitDate() {
        cy.get('#visit_date').should('contain.text', '30');
    }
    static validateComment() {
        cy.get('#comment').should('contain.text', 'CURA Healthcare Service');
    }
}