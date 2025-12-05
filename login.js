describe('Проверка авторизации', function () {

    it('Проверка логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio');
     })
 }) 
    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

// План
// 1) Нажать «Забыли пароль»
// 2) Ввести любой имейл
// 3) Проверка, что получили нужный текст и есть кнопка крестика