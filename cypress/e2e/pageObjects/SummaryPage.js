export class SummaryPage {
    static validateFacility() {
        cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
    }
    static validateHospitalReadmissionCheckbox() {
        cy.get('#hospital_readmission').should('have.text', 'Yes');
    }
    static validateMedicaid() {
        cy.get('#program').should('have.text', 'Medicaid');
    }
    static validateVisitDate() {
        cy.get('#visit_date').should('contain.text', '30');
    }
    static validateComment() {
        cy.get('#comment').should('have.text', 'CURA Healthcare Service');
    }
}