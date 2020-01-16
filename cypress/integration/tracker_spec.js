describe('Index page test', function() {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });

    it('Should be able successfully load the index page', function() {
        cy.get('#div-1').should('be.visible');
    });

    it('Should be able to invoke enableAnalytics method', function() {
        cy.window().should('have.property', 'rivraddon');
        cy.window().then((win) => {
            cy.spy(win.console, "log");
            win.rivraddon.analytics.enableAnalytics();
            expect(win.console.log).to.be.called;
        });
    });

    it('Should be able to invoke trackPbjsEvent method', function() {
        const trackerUrl = 'https://tracker.simplaex-code-challenge.com';
        const eventType = 'test';

        cy.window().should('have.property', 'rivraddon');
        cy.server();
        cy.route({
            method: 'POST',
            url: trackerUrl,
            body: JSON.stringify({ eventType })
        }, {
            data: 'OK',
        }).as('postCheck');

        cy.window().then((win) => {
            win.rivraddon.analytics.trackPbjsEvent({ eventType });
            cy.wait('@postCheck');
        });
    });
});
