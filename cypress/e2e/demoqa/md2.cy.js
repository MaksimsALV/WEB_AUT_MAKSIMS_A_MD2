import {VisitBasePage} from "../pageObjects/VisitBasePage";
import {AppointmentIndexPage} from "../pageObjects/AppointmentIndexPage";
import {LoginPage} from "../pageObjects/LoginPage";
import {MakeAppointmentPage} from "../pageObjects/MakeAppointmentPage";

describe('md2 - Maksims A', () => {
    context('MD2 test scenario', () => {
        afterEach(function () {
            cy.task('log', 'test result state: ' + this.currentTest.state)
        });

        it('Test scenario 1 - making an appointment', () => {
            VisitBasePage.visit();
            AppointmentIndexPage.clickOnMakeAppointmentButton();
            LoginPage.loginWithDemoAccount();
            MakeAppointmentPage.selectFromFacilityDropdown();
            MakeAppointmentPage.checkApplyForHospitalReadmission();
            MakeAppointmentPage.selectMedicareRadioButton();
            MakeAppointmentPage.setVisitDateFromCalendar();
            MakeAppointmentPage.setComment();
            MakeAppointmentPage.clickBookAppointmentButton();
        });
    });
});