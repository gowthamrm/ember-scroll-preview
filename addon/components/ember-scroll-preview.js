import layout from '../templates/components/ember-scroll-preview';
import Component from '@ember/component';
import { run } from '@ember/runloop';

const html2canvas = window.html2canvas;

const availPositions = {
  'top': { top: '0px', left: '0px' },
  'left': { top: '0px', left: '0px' },
  'top-left': { top: '0px', left: '0px' },
  'left-top': { top: '0px', left: '0px' },
  'bottom': { bottom: '0px', left: '0px' },
  'bottom-left': { bottom: '0px', left: '0px' },
  'left-bottom': { bottom: '0px', left: '0px' },
  'right': { top: '0px', right: '0px' },
  'top-right': { top: '0px', right: '0px' },
  'right-top': { top: '0px', right: '0px' },
  'bottom-right': { bottom: '0px', right: '0px' },
  'right-bottom': { bottom: '0px', right: '0px' }
};

export default Component.extend({
  layout,
  imageUrl: '',
  canShowPreview: false,
  scrollCounter: 0,

  initScrollContainer() {
    let $scrollContainer = this.$('#em-scroll-view-container');
    let $windowContainer = this.$(window);

    let contentWidth = $scrollContainer && $scrollContainer.width() || 0;
    let contentHeight = $scrollContainer && $scrollContainer.height() || 0;
    let windowWidth = $windowContainer && $windowContainer.width() || 0;
    let windowHeight = $windowContainer && $windowContainer.height() || 0;

    let offsetTop = this.get('offsetTop') || 0;
    windowHeight = windowHeight - offsetTop;

    let windowRatio = windowHeight / windowWidth;
    let contentRatio = contentHeight / contentWidth;

    //Maximum allowd preview width is 15%(fixed) of the window width
    let previewWidth = windowWidth * 0.15;

    //maxAllowedPreviewHeight will be windowHeight
    let previewHeight = contentRatio * previewWidth;

    // When the preview height is goes beyond the screen height
    if (previewHeight > windowHeight) {
      previewHeight = windowHeight;
      previewWidth = previewHeight / contentRatio;
    }

    // previewSelectorWidth will be same as previewWidth
    let previewSelectorHeight = windowRatio * previewWidth;

    let $previewContainer = this.$('#em-preview-container');
    let $preivewSelector = this.$('#em-preview-selector');

    let previewPosition = availPositions[this.get('position')] || availPositions['top-right'];

    $previewContainer.css({
      width: previewWidth,
      height: previewHeight
    });
    $preivewSelector.css({
      width: previewWidth,
      height: previewSelectorHeight
    });
    // Set preview container position
    $previewContainer.css(previewPosition);

    this.setProperties({
      contentDimensions: {
        width: contentWidth,
        height: contentHeight
      },
      widowDimensions: {
        width: windowWidth,
        height: windowHeight
      },
      previewDimensions: {
        width: previewWidth,
        height: previewHeight
      },
      selectorDimensions: {
        width: previewWidth,
        height: previewSelectorHeight
      },
      previewPosition,
      windowRatio,
      contentRatio
    });
  },

  didRender() {
    this._super(...arguments);
    this.initScrollContainer();
    html2canvas(this.$('#em-scroll-view-container'), {
      onrendered: (canvas) => {
        let imageUrl = canvas.toDataURL('image/png');
        this.set('imageUrl', imageUrl);
      }
    });
  },

  didInsertElement() {
    this._super(...arguments);

    run.schedule('afterRender', () => {
      this.bindEvents();
    });
  },

  willDestroyElement() {
    this._super(...arguments);

    this.unbindEvents();
  },

  /**
   * Binds scroll events to function
   */
  bindEvents() {
    this.$(window).on('scroll', () => {
      this.incrementProperty('scrollCounter');
      this.setScrollSelector();

      this.$('.em-preview-container').show();
      run.later(this, () => {
        this.decrementProperty('scrollCounter');
        if (!this.get('scrollCounter')) {
          this.$('.em-preview-container').fadeOut('slow');
        }
      }, 500);
    });
  },

  // scroll() {
  //   run.debounce(this, () => {
  //     this.$('.em-preview-container').css('display', 'block').fadeOut('slow');
  //   }, 300);
  // },
  unbindEvents() {
    this.$(window).off('scroll');
  },

  setScrollSelector() {
    let content = this.$('#em-scroll-view-container');

    let contentHeight = content && content.height();
    let previewHeight = this.get('previewDimensions.height');
    // let offsetTop = this.get('offsetTop');
    let scrollTop = this.$(window).scrollTop();
    // let maxScroll = contentHeight - windowHeight + offsetTop;

    let selectorTop = scrollTop * previewHeight / contentHeight;
    let $preivewSelector = this.$('#em-preview-selector');

    $preivewSelector.css({
      top: selectorTop
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
