import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  /* constructor(...args) {
        super(...args);
        this.isLarge = false;
      }*/
  // add @ to be tracked for state changes
  @tracked isLarge = false;

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
