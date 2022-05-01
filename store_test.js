let user = {
    
    firstName: 'Test',
    lastName: 'Automation',
    state: 'Alabama',
    city: 'Birmingham',
    address: '801 Tom Martin Dr.',
    phone: '+12163547758',
    postalCode: '35211',
    email: '12163547759@test31.com',
    password: 'passwordtest',
    days: '1',
    months: '1',    
    years: '2000',
}

Feature('Store');

Scenario('test something', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail('12163547759@test31.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    myAccountPage.waitForPageLoad(); 
    myAccountPage.checkMyAccountPageIsVisible();
    


    
    
});

After(({ I,  authPage, myAccountPage }) => {
    myAccountPage.clickSignOutButton();
    authPage.fillCurrentUserForm(user);
   pause(); 

    
    
    
});