module.exports = {
    'Test hide and show top panel': function (client) {
        client
            .url(client.launch_url)
            .click(".toppanel-hide");
        client.expect.element(".toppanel-hide").to.be.not.visible;
        client.click(".toppanel-logo");
        client.expect.element(".toppanel-hide").to.be.visible;
        client.assert.urlMatch(/\/\?html,output$/)
            .end();
    }
};