import { $ } from '@core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || []
  }

  getNode() {
    const $node = $.create('div', 'excel')

    this.components = this.components.map(Component => {
      const $root = $.create('div', Component.className);

      const component = new Component($root);
      if (component.name) {
        window['c' + component.name] = component
      }
      $root.html(component.toHTML())
      $node.append($root)

      return component
    });

    return $node
  }

  render() {
    this.$el.append(this.getNode());
    
    this.components.forEach(component => component.init())
  }
}
