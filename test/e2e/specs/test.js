// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .click('nav a[href="/counter"]')
      .pause(500)
      .assert.containsText('h2', 'Count: 0')
      .click('.counter h2+button')
      .assert.containsText('h2', 'Count: 1')
      .click('.counter button:last-child')
      .assert.containsText('h2', 'Count: 0')
      .end()
  }
}
