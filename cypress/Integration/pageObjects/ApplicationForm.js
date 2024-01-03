class applicationForm
{
    getFirstNamePlaceholder(){
        return cy.get('#firstName')
    }
    getLastNamePlaceholder(){
        return cy.get('#lastName')
    }
    getEMailPlaceholder(){
        return cy.get('#email')
    }
    getGenderPlaceholder(){
        return cy.get('#gender')
    }
    getDateOfBirthPlaceholder(){
        return cy.get('#dob')
    }
    getCountryPlaceholder(){
        return cy.get('#country')
    }
    getEducationLevelPlaceholder(){
        return cy.get('#education')
    }
    getEmploymentStatusPlaceholder(){
        return cy.get('#employmentStatus')
    }
    getCityOfResidencePlaceholder(){
        return cy.get('#stateCity')
    }
    getChooseSchoolPlaceholder(){
        return cy.get('#school')
    }
    getPhoneNumberPlaceholder(){
        return cy.get('#phone')
    }
    getCourseOfStudyPlaceholder(){
        return cy.get('#course')
    }
    getHowDidYouHearPlaceholder(){
        return cy.get('#howDidYouHear')
    }
    getDiscountCodePlaceholder(){
        return cy.get('#discountCode')
    }
    getProceedButton(){
        return cy.get('input[type="submit"]')
    }
}
export default applicationForm