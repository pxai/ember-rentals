import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals about', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Super Car Rentals');
    assert.dom('h2').hasText('About Super Rentals');
    assert.dom('.jumbo a.button').hasText('Contact Us');
  });

  test('jump to /contact', async function (assert) {
    await visit('/about');
    assert.equal(currentURL(), '/about');

    await click('.jumbo a.button');

    assert.equal(currentURL(), '/getting-in-touch');
  });
});
