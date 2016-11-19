module.exports = {
    'Basic HTML test': function (client) {
        client
            .url(client.launch_url)
            .setHtml("<b>jsbin")
            .selectOutputFrame()
            .assert.containsText('body', 'jsbin')
            .assert.urlMatch(/\/\w+\/edit\?html,output$/)
            .end();
    }
};
