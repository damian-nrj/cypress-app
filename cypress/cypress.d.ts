/// <reference types="cypress" />

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      getT(dataTestId: string): Chainable;
      findT(dataTestId: string): Chainable;
    }
  }
}
