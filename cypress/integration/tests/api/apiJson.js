import apiPage from "../../pages/apiPage.js";
const apiMain = new apiPage();
const apiBody = require("../../../fixtures/examplesApi.json");
describe("Scenarios for api testing", () => {
  beforeEach(() => {
    cy.request(Cypress.env("apiEndPoint")).then((response) => {
      console.log(response);
      expect(response.status).to.equal(200);
    });
  });

  it("check /posts", () => {
    apiMain.vvalidateEndpoint("posts");
    apiMain.createObject(apiBody.posts);
  });
  it("check /comments", () => {
    apiMain.vvalidateEndpoint("comments");
  });
  it("check /albums", () => {
    apiMain.vvalidateEndpoint("albums");
  });
  it("check /photos", () => {
    apiMain.vvalidateEndpoint("photos");
  });
  it("check /todos", () => {
    apiMain.vvalidateEndpoint("todos");
  });
  it("check /users", () => {
    apiMain.vvalidateEndpoint("users");
  });
});
