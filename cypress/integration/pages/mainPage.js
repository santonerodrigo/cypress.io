class pageExample {
  constructor() {
    this.url = "/";
  }

  visit() {
    cy.visit(this.url);
    cy.clearCookies();
  }

  login() {
    cy.intercept("**/customers/**").as("loginReq");
    cy.get('[name="username"]').type("rodrisantone");
    cy.get('[name="password"]').type("rodrisantucho");
    cy.get('[value="Log In"]').click();
  }
  validateLogin() {
    cy.wait("@loginReq")
      .its("response")
      .then((response) => {
        cy.wrap(response)
          .its("headers")
          .should("have.property", "connection", "keep-alive");
        cy.wrap(response).its("statusCode").should("eq", 200);
      });
    cy.get("#mainPanel").should("exist");
    cy.get("#bodyPanel").should("exist");
  }
  createNewAccount() {
    cy.get("#leftPanel").find("ul>li").find("a").first().click();
    cy.get("#rightPanel")
      .find("div>div")
      .find("h1")
      .should("contain", "Open New Account");
  }
  selectType(type) {
    cy.get("select").first().select(type);
  }
  openNewAccount() {
    cy.wait("@loginReq");
    cy.get("#rightPanel > div > div > form > div > input")
      .trigger("mouseover")
      .click();
  }
  validateNewAccount() {
    cy.get("#newAccountId").then(function (elem) {
      expect(parseInt(elem.text())).to.be.an("number");
    });
  }
}
export default pageExample;
