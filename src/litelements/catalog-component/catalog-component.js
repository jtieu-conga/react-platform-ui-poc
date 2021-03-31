import { LitElement, html } from 'lit-element';
import '../card-component/card-component';
import '../card-list-view-component/card-list-view-component';

class CatalogComponent extends LitElement {
    static get properties() {
        return {
            view: { type: String },
            btnName: { type: String },
            data: { type: Array }
        };
    }

    constructor() {
        super();
        this.view = 'Grid';
        this.btnName = 'Change View';
        this.data = [{
            id:'1',
            productTitle:"Auto_Config_BP_A_23697",
            isChecked: false,
            productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
        },{
            id:'2',
            productTitle:"Auto_Config_BP_B_23697",
            isChecked: false,
            productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
        },{
            id:'3',
            productTitle:"Auto_Config_B_21145",
            isChecked: false,
            productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
        },{
            id:'4',
            productTitle:"Auto_Config_B_21146",
            isChecked: false,
            productDescription: "A product description is the marketing copy used to describe a product's value proposition to potential customers"
        }];
    }

    render() {
        return html`
            <style>
            .catalog-items {
                display: grid;
                grid-template-columns: 100%;
                grid-template-rows: repeat(auto-fit, 150px);
                grid-auto-flow: row;
                grid-gap: 20px;
                justify-content: center;
                border: 1px solid #e5e7ef;
                padding: 20px;
                margin-top: 10px;
            }
            </style>
            <button @click="${this.changeView}">${this.btnName}</button>
            ${this.view === 'Grid' ?
                html`
                    <div>
                        ${this.data.map(obj => html`
                            <card-component .item=${obj} .addToCartAction=${this.handleAction.bind(this, obj)}></card-component>
                        `)}
                    </div>
                `
                :
                html`
                    <div class="catalog-items">
                        ${this.data.map(obj => html`
                            <card-list-view-component .item=${obj} .addToCartAction=${this.handleAction.bind(this, obj)}></card-list-view-component>
                        `)}
                    </div>
                `
            }
        `;
    }

    changeView() {
        this.view = this.view === 'Grid' ? this.view = 'List' : this.view = 'Grid';
    }

    handleAction(product) {
        console.log(product);
    }
}

customElements.define('catalog-component', CatalogComponent);
export default CatalogComponent;