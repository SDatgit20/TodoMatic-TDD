import Header from "../../src/Components/Header.js"

const headerText='[data-testid="Title"]';
describe('<Header>', () => {
    it('mounts', () => {
      cy.mount(<Header/>);
      cy.get(headerText).should('have.text',"Welcome To TODOmatic");
    })
  })