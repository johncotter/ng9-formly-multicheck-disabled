import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      disabled: false
    }
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'checktest',
      type: 'checkbox',
      defaultValue: true,
      templateOptions: {
        label: 'Checkbox',
      },
      expressionProperties: {
        'templateOptions.disabled': 'formState.disabled',
      }
    },
    {
      key: 'favhero',
      type: 'multicheckbox',
      defaultValue: {'captain_america': true},
      templateOptions: {
        label: 'Multi-checkbox',
        options: [
          { label: 'Iron Man', value: 'iron_man' },
          { label: 'Captain America', value: 'captain_america' },
          { label: 'Black Widow', value: 'black_widow' },
          { label: 'Hulk', value: 'hulk' },
          { label: 'otherhero', value: 'otherhero' },
        ],
      },
      expressionProperties: {
        'templateOptions.disabled': 'formState.disabled',
      }
    },
    {
      key: 'other',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'input other hero',
        description: 'Description',
        required: true,
      },
      expressionProperties: {
        'templateOptions.disabled': 'formState.disabled',
      },
    }
  ];

  toggleForm(){
    this.options.formState.disabled = !this.options.formState.disabled;
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */