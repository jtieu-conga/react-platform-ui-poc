import { LitElement } from 'lit-element';
import listTemplate from './card-list-view-component.template';

class CardListViewComponent extends LitElement {
    static get properties() {
        return {
            item: { type: Object },
            addToCartAction: { type: Function }
        };
    }

    render() {
        return listTemplate(this);
    }
}

customElements.define('card-list-view-component', CardListViewComponent);
