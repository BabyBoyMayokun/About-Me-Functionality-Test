///<reference types='cypress'/>

import aboutMe from "../pageObjects/aboutMe"
import applicationForm from "../pageObjects/ApplicationForm"

const data = require('../../fixtures/aboutMe.json')

describe('Victor About me UI Functonality',()=>{
    it('About Me Functionality',()=>{
        const AboutMe=new aboutMe
        const ApplicationForm=new applicationForm


        cy.visit(Cypress.env('url'))
        AboutMe.getJoinAltSchool().click()
        ApplicationForm.getFirstNamePlaceholder().type(data.firstName)
        ApplicationForm.getLastNamePlaceholder().type(data.lastName)
        ApplicationForm.getGenderPlaceholder().select('Male')
        ApplicationForm.getDateOfBirthPlaceholder().type('2002-04-22')
        ApplicationForm.getEMailPlaceholder().type(data.eMail)
        ApplicationForm.getCountryPlaceholder().select('Monaco')
        ApplicationForm.getEducationLevelPlaceholder().select('Bsc')
        ApplicationForm.getCityOfResidencePlaceholder().type(data.cityOfResidence)
        ApplicationForm.getEmploymentStatusPlaceholder().select('Employed')
        ApplicationForm.getChooseSchoolPlaceholder().select('School of Business')
        ApplicationForm.getCourseOfStudyPlaceholder().select('High Impact Selling: From Prospecting to Closing')
        ApplicationForm.getPhoneNumberPlaceholder().type("09026856801")
        ApplicationForm.getHowDidYouHearPlaceholder().type('Instagram')
        ApplicationForm.getProceedButton().click()
    })
})