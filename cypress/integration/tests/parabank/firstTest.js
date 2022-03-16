import pageExample from "../../pages/mainPage";

const typesOfSelect = require("../../../fixtures/example.json");

describe("meli", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("pruebo login ", () => {
    const mainPage = new pageExample();
    mainPage.login();
    mainPage.validateLogin();
    mainPage.createNewAccount();
    mainPage.selectType(typesOfSelect.savings);
    mainPage.openNewAccount();
  });
});
