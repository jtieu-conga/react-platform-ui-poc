/* global moment */
import { LightningElement, wire } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import App from '@salesforce/resourceUrl/app';
import reactPOC2 from '@salesforce/resourceUrl/reactPOC2';

export default class LWCReactContainer extends LightningElement {
    connectedCallback() {
        Promise.all([
            // loadScript(this, App + '/bundle.js'),
            loadScript(this, reactPOC2 + '/static/js/2.63d64c03.chunk.js'),
            loadScript(this, reactPOC2 + '/static/js/main.89a42443.chunk.js'),
        ]).then(() => {
            mount(this.template.querySelector('div'));
        });
    }

}
