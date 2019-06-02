console.log('lection_27');


class TagValidator {
    static validate(templateType, tag) {
        if (!['list', 'dropdown', 'form'].includes(templateType)){
            return false;
        }

        switch (templateType) {
            case 'list': 
                return this._getList.includes(tag);
            case 'dropdown': 
                return this._getDropdown.includes(tag);
            case 'form': 
                return this._getForm.includes(tag);
        }
    }

    static get _getList() {
        return ['ul', 'ol'];
    }

    static get _getDropdown() {
        return ['select'];
    }

    static get _getForm() {
        return ['input', 'textarea', 'button'];
    }
}

class RenderSerice extends TagValidator {
    static _fragment(template) {
        let fragment = document.createElement('div');
        fragment.innerHTML = template;

        return fragment;
    }

    static _combineClassNames(array) {
        if (Array.isArray(array)) {
            return array.join(' ');
        }

        return Array.prototype.join.call(arguments, ' ');
    }
}

class Render extends RenderSerice {
    static list({target = null, type = 'ul', classNames = {container: [], item: [], lastItem: [], additional: []}}, list = []) {
        const VALIDATION_TYPE = 'list';
        if (!list || !list.length) return ``;
        if (!this.validate(VALIDATION_TYPE, type)) return ``;

        let containerClass = this._combineClassNames(classNames.container);
        let finalClassNames = this._combineClassNames(
            this._combineClassNames(classNames.item), 
            this._combineClassNames(classNames.additional)
        );
        let lastItemClass = this._combineClassNames(classNames.lastItem);

        let template = 
            `<${type} class="${containerClass}">
                ${list.map((li, pos, source) => {
                    let liClassName = pos === source.length - 1 ? 
                        this._combineClassNames(finalClassNames, lastItemClass) : 
                        finalClassNames;
                        
                    return `<li class="${liClassName}">
                                ${li}
                            </li>`
                }).join('')}
            </${type}>`;

        target !== null && target.append(this._fragment(template));   
    }
    static dropdown({type = 'select', target = null, optionSelected = [], optionDisabled = [], settings = {name: '', size: 1, required: false, multiple: false}, classNames = {container: [], item: [], lastItem: [], additional: []}}, list = []){
        const VALIDATION_TYPE = 'dropdown';
        if (!list || !list.length) return ``;
        if (!this.validate(VALIDATION_TYPE, type)) return ``;

        let containerClass = this._combineClassNames(classNames.container);
        let finalClassNames = this._combineClassNames(
            this._combineClassNames(classNames.item), 
            this._combineClassNames(classNames.additional)
        );
        let lastItemClass = this._combineClassNames(classNames.lastItem);

        let size = settings.size;
        let required = !(settings.required) ?
            '' : 'required';
        let multiple = !(settings.multiple) ?
            '' : 'multiple';
        let nameList = settings.name;

        let template = 
            `<${type} class="${containerClass}" size="${size}" name="${nameList}" ${required} ${multiple}>
                ${list.map((option, pos, source) => {
                    let selectClassName = pos === source.length - 1 ? 
                        this._combineClassNames(finalClassNames, lastItemClass) : 
                        finalClassNames;
                    let optionSelect = optionSelected.includes(pos + 1) ? 
                        'selected' : '';
                    let optionDisable = optionDisabled.includes(pos + 1) ? 
                        'disabled' : '';
                        
                    return `<option name="${option}" ${optionSelect} ${optionDisable} class="${selectClassName}">
                                ${option}
                            </option>`
                }).join('')}
            </${type}>`;

        target !== null && target.append(this._fragment(template)); 
    }
    static form({target = null, type = 'textarea', settingsButton = {type: 'submit', value: 'button'}, settingsText = {name: '', value: '', placeholder: '', disabled: false, readonly: false, required: false, rows: 5}, settingsCheckbox = {checked: [], name: ''}, classNames = {container: [], item: [], lastItem: [], additional: []}}, list){

        const VALIDATION_TYPE = 'form';
        if (!this.validate(VALIDATION_TYPE, type)) return ``;
        let template = '';
        let containerClass = this._combineClassNames(classNames.container);

        if (list && list.length) {
            let finalClassNames = this._combineClassNames(
                this._combineClassNames(classNames.item), 
                this._combineClassNames(classNames.additional)
            );

            let lastItemClass = this._combineClassNames(classNames.lastItem);
            template = list.map((li, pos, source) => {
                let liClassName = pos === source.length - 1 ? 
                    this._combineClassNames(finalClassNames, lastItemClass) : 
                    finalClassNames;
                let checked = settingsCheckbox.checked.includes(pos + 1) ?
                    'checked' : '';    
                return `<${type} type="checkbox" name = ${settingsCheckbox.name} value="${li}" class="${containerClass} ${liClassName}" ${checked}>
                            ${li} </br>
                        `;
            }).join('');
        };
        if (type === 'textarea') {
            template = `<${type} class="${containerClass}" name="${settingsText.name} placeholder="${settingsText.placeholder}" rows="${settingsText.rows}">
                    ${settingsText.value}
                </${type}>`
        }
        if (type === 'button') {
            template = `<${type} type="${settingsButton.type}" class="${containerClass}">${settingsButton.value}</${type}>`
        }

        target !== null && target.append(this._fragment(template));  
    }
}


window.onload = function() {
    let list_1 = [1, 2, 3];
    let optList =  {
        target: document.body,
        type: 'ul',
        classNames: {
            container: ['list-container', 'active', 'success'],
            item: ['list-item', 'success', 'foo'],
            additional: ['add-class'],
            lastItem: ['last-item']
        }
    };

    let list = ["list 1", "list 2", "list 3"];
    let optDropdown =  {
        target: document.body,
        type: 'select',
        settings: {
            name: 'Name list',
            size: 2,
            required: true,
            multiple: true
        },
        optionSelected: [1, 3],
        optionDisabled: [],
        classNames: {
            container: ['list-container', 'active', 'success'],
            item: ['list-item', 'success', 'foo'],
            additional: ['add-class'],
            lastItem: ['last-item']
        }
    };
    
    let checkList = [1, 2, 3, 4, 5];
    let optForm = {
        target: document.body,
        type: 'input',
        settingsText: {
            value: '',
            placeholder: 'SomePlaceholder',
            disabled: false,
            readonly: false,
            required: false,
            rows: 20,
            maxlength: 150,
            name: 'SomeName'
        },
        settingsCheckbox: {
            checked: [1],
            name: 'SomeName'
        },
        settingsButton: {
            type: 'submit',
            value: 'SomeButton'
        },
        classNames: {
            container: ['list-container', 'active', 'success'],
            item: ['list-item', 'success', 'foo'],
            additional: ['add-class'],
            lastItem: ['last-item']
        }
    };



    Render.form(optForm, list_1)    
}