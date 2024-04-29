/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
  });
  afterEach(() => {
   //cy.screenshot() 
  });
  
    it('deve fazer login com sucesso', () => {
        cy.get('#username').type('marcio.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, marcio.teste')
    })
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('m.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });
    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('marcio.teste@teste.com.br')
        cy.get('#password').type('teste@000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });
    it('Deve fazer login usando uma massa de dados', () => {
      cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, marcio.teste')
    });
    it.only('Deve fazer login usando fixture', () => {
      cy.fixture('perfil').then( dados => {
        cy.get('#username').type(dados.usuario, {log:false})
        cy.get('#password').type(dados.senha, {log:false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, marcio.teste')
      
    });
      
    });
})