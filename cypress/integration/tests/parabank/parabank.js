import pageExample from "../../pages/mainPage";

const typesOfSelect = require("../../../fixtures/example.json");

const mainPage = new pageExample();
describe("Parabank", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    mainPage.login();
    mainPage.validateLogin();
  });

  it("Open New Account", () => {
    mainPage.createNewAccount(); //navego por elementos hasta llegar al que quiero y assert
    mainPage.selectType(typesOfSelect.savings); //uso datos de un json y Select
    mainPage.openNewAccount(); //uso trigger porque click normal no funciona
    mainPage.validateNewAccount();
  });
});
