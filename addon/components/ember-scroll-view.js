import Ember from 'ember';
import layout from '../templates/components/ember-scroll-view';

const { Component } = Ember;
const html2canvas = window.html2canvas;

export default Component.extend({
  layout,
  imageUrl: '',
  didRender() {
    this._super(...arguments);
    html2canvas(this.$('#scroll-view-container'), {
      onrendered: (canvas) => {
        let imageUrl = canvas.toDataURL('image/png');
        this.set('imageUrl', imageUrl);
      }
    });
  },
  actions: {
    screenShot() {
      let domElement = this.$();
      html2canvas(domElement, {
        onrendered: (canvas) => {
          domElement[0].appendChild(canvas);
        }
      });
    }
  }
});
