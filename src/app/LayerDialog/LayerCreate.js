import './LayerCreate.css';
import * as Components from 'Components/index.js';
import T from './strings.js';

export default class LayerCreate extends Components.Dialog {
    constructor() {
        super({title: T.translate('dialog.layer.create'), id: 'dlg', collapsible: false, modal: false, top: 200, left: 400});
    }
    _render(element, options) {
        super._render(element, options);
        this.content.innerHTML = `<div>
            <label>${T.translate('dialog.layer.name')}</label>
            <input class="name" type="text" value="" />
        </div>`;
        this._name = this.content.querySelector('.name');
        this.footer.innerHTML = `<button>${T.translate('dialog.ok')}</button>`;
        this.footer.querySelector('button').addEventListener('click', e => {
            e.stopPropagation();
            let event = document.createEvent('Event');
            event.initEvent('ok', false, false);
            this.dispatchEvent(event);
        });
    }    
    get name() {
        return this._name.value;
    }
};