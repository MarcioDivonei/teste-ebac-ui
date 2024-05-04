/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos,page";

describe('funcionalidade: produtos', () => {
    beforeEach(() => {
          produtosPage.visitarUrl()
    });
    
    it('deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Apollo Running Short')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it.only('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Abominable Hoodie')
        cy.get('.product_title').should('contain', 'Abominable Hoodie')
    });

    it('Deve visitar a pagina do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});