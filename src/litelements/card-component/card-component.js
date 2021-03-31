import { LitElement } from 'lit-element';
import cardTemplate from './card-component.template';

class CardComponent extends LitElement {

    /**
     * component properties
     */
    static get properties() {
       return {
           item: {type: Object},
           addToCartAction: {type: Function}
       }
    }

    constructor() {
        super();
        this.isChecked = false;
    }
    /**
     * This function will trigger on click of checkbox
     * @param {*} $event - mouse event
     */
    toggleCheck($event) {
       this.isChecked = !this.isChecked
    }

    hanldeCompareButton() {
        console.log(`compare event to do`);
    }

    render() {
        return cardTemplate(this);
    }
}

window.customElements.define('card-component', CardComponent);
