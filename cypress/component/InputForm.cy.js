import Form from "../../src/Components/InputForm/InputForm.js";

const inputField='[data-testid="test-input"]';
const submitButton='[ data-testid="test-submit"]';

describe('<Form>', () => {
    it('Typing and adding', () => {
        cy.mount(<Form/>);
        expect(inputField).toBeInTheDocument;
    })
  })