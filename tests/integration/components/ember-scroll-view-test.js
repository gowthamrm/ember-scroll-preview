import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-scroll-view', 'Integration | Component | ember scroll view', {
  integration: true
});

test('Rendering scroll preivew with default and custom positions', function(assert) {
  assert.expect(7);

  // Template block usage:
  this.render(hbs`
    {{#ember-scroll-view}}
      A simple Ember Addon
    {{/ember-scroll-view}}
  `);

  assert.equal(this.$().text().trim(), 'A simple Ember Addon', 'Component Renders successfully.');

  // Default Value
  assert.equal(this.$('#em-preview-container').css('top'), '0px', 'Scroll preivew by default renders in the top position.');
  assert.equal(this.$('#em-preview-container').css('right'), '0px', 'Scroll preivew by default renders in the right corner.');

  this.render(hbs`
    {{#ember-scroll-view position="bottom-left"}}
      A simple Ember Addon
    {{/ember-scroll-view}}
  `);

  assert.equal(this.$('#em-preview-container').css('bottom'), '0px', 'Scroll preivew by renders at bottom as specified.');
  assert.equal(this.$('#em-preview-container').css('left'), '0px', 'Scroll preivew by renders in the left corner as specified.');

  this.render(hbs`
    {{#ember-scroll-view position="top"}}
      A simple Ember Addon
    {{/ember-scroll-view}}
  `);

  assert.equal(this.$('#em-preview-container').css('top'), '0px', 'Scroll preivew by renders at top corner as specified.');
  assert.equal(this.$('#em-preview-container').css('left'), '0px', 'Scroll preivew by renders in the left corner as specified.');
});
