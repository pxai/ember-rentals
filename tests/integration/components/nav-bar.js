import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the navbar', async function (assert) {
    await render(hbs`<NavBar />`);

    assert.dom('.menu').exists();
  });

  test('it links to other pages', async function (assert) {
    assert.dom('nav a.menu-index').hasText('Super Car Rentals');
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-contact').hasText('Contact');
  });
});
