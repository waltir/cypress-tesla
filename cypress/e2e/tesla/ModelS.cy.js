/// <reference types="cypress" />
import Product from "../../pageobjects/components/Products";

describe("Model S Product Page", function () {
    const product = new Product();

    beforeEach(function (){
        cy.viewport(1440, 1000);
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
    })
    after(() => {
        cy.end();

    })

    it ("Should navigate to the Model S product page", () => {
        product.navigate(product.components.vehicles.allModels[0].models.slug);
        cy.url().should('include', product.getSource(product.components.vehicles.allModels[0].models.slug));
        cy.title().should('contain', 'Model S | Tesla');
    });

    it ( "Chat button is present and the svg is correct", () => {
        cy.get(product.components.vehicles.selectors.chatButton.selector, {timeout: 6000}).should('be.visible');
        cy.get(product.components.vehicles.selectors.chatButton.selector + " path", {timeout: 6000}).should('have.attr', 'd', product.components.vehicles.selectors.chatButton.svgPath);
    });

    product.checkPerformanceData("models");

});