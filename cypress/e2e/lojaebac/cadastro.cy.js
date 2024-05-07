/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('funcionalidade: cadastro', () => {


    beforeEach(() => {
        cy.visit('minha-conta/');

    });

    it('Deve completar o cadastro com sucesso', () => {

        cy.get('#reg_email').type(faker.internet.email());
        cy.get('#reg_password').type('marcio@123');
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist');

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });
    it('Deve completar o cadastro com sucesso - usando variavel', () => {

        
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var sobrenome = faker.person.lastName()
        
        cy.get('#reg_email').type(email);
        cy.get('#reg_password').type('marcio@123');
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist');

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });
    it.only('deve completar cadastro com sucesso usando comando customizado', () => {
        cy.preCadastro(faker.internet.email(), 'marcio@123', faker.person.firstName(), faker.person.lastName())
        cy.get('.woocommerce-message').should('exist')
    });
});