import pageExample from "../../pages/mainPage";

const typesOfSelect = require("../../../fixtures/example.json"); //me guardo los datos de un json a una variable

const mainPage = new pageExample();
describe("Parabank", () => {
  beforeEach(() => {
    // Antes de cada It se ejecuta el codigo que este aca adentro
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    mainPage.login(); //Hago un intercept para agarrar un request que se manda al abrir la URL, y me guardo el Alias
    mainPage.validateLogin(); // Uso el Alias para hacer aserciones con la api /Pruebo un elemento del header y el response status
  });

  it("Open New Account", () => {
    mainPage.createNewAccount(); //navego por elementos hasta llegar al que quiero y assert
    mainPage.selectType(typesOfSelect.savings); //uso datos de un json y Select
    mainPage.openNewAccount(); //uso trigger porque click normal no funciona
    mainPage.validateNewAccount(); // uso funcion para validar el contenido de un elemento
  });
});
