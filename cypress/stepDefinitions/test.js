/// <reference types="Cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("merhaba",()=>{

    cy.log("merhaba dünya")
    cy.log("merhaba dünya tekrar")
    cy.log("merhaba dünya tekrar")
})