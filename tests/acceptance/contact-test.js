import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals contact', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /contact', async function (assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Super Car Rentals');
    assert.dom('h2').hasText('Contact Us');
    assert.dom('.jumbo a.button').hasText('About Us');
  });

  test('jump to /about', async function (assert) {
    await visit('/getting-in-touch');
    assert.equal(currentURL(), '/getting-in-touch');

    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });
});
