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

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Abominable Hoodie')
        cy.get('.product_title').should('contain', 'Abominable Hoodie')
    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
       let qtd = 7
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('L', 'Blue', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
       cy.fixture('produtos').then(dados =>{
    
        produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[1].tamanho,
             dados[1].cor,
              dados[1].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
       })
        
     });
});