describe('Fleek', function () {

    it('Verify URL of the Page!', () => {
        cy.visit('https://app.fleek.co/#/auth/sign-up')
        cy.url().should("eq" ,'https://app.fleek.co/#/auth/sign-up')
        cy.location('protocol').should('contains', 'https')

    })

    it('Validate UI Elements and asserts', () => {
        cy.get('[alt="fleek-logo"]').should('be.visible')
        cy.contains('Blog').should('be.visible')
        cy.contains('Community').should('be.visible')
        cy.contains('Docs').should('be.visible')
        cy.contains('Sign up').should('be.visible')
        cy.contains('Ethereum').should('be.visible')
        cy.contains('Git Provider').should('be.visible')
        cy.contains('Email').should('be.visible')
        cy.contains('Terms of Service').should('be.visible')
        cy.contains('Privacy Policy').should('be.visible')
        cy.contains('By using the Fleek platform you agree to our').should('be.visible')

    })

      it('Verify Footer URL of the Page!', () => {
        cy.get('a[href="https://fleek.co/terms-of-service"]').click()
        cy.contains('Terms of Service').should('be.visible')
        cy.visit('https://app.fleek.co/#/auth/sign-up')
        cy.get('a[href="https://fleek.co/privacy-policy"]').click()
        cy.contains('Privacy Policy').should('be.visible')
        cy.visit('https://app.fleek.co/#/auth/sign-up')
    
    
    })
  
      it('Validate Error messages on Sign in Page and asserts', ()  => {
        cy.contains('Email').click()
        cy.contains('Sign up with Email').should('be.visible')
        cy.get('[type="Submit"]').should('be.visible').click()
        cy.contains('p', 'Please enter your email address').should('be.visible')
        cy.contains('p', 'Please enter your password.').should('be.visible')
      
    })
 
      it('Validate NAV URL', () => {
      cy.get('a[href="https://blog.fleek.co/"]').click()
      cy.get('a[href="https://discord.gg/psychedelic"]').click()
      cy.get('a[href="https://docs.fleek.co/"]').click()
      
    
   
   
       })
   


  })