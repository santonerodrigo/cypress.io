class apiPage {
  vvalidateEndpoint(method) {
    cy.request(Cypress.env("apiEndPoint") + `${method}`).then((response) => {
      // Get es el metodo default, no hace falta ponerlo
      expect(response.body).to.not.be.null;
      expect(response.status).to.equal(200);
      //expect(response).to.have.property("status", 200); Otra forma de probar el response
    });
  }
}

export default apiPage;
