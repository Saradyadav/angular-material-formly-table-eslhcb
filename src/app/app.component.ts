import { Component, VERSION } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

interface CardData {
  HostName: string;
  UserName: string;
  Password: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = new FormGroup({});

  card: CardData = {
    HostName: '',
    UserName: '',
    Password: '',
  };
 
  card1Fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
      type: 'input',
      key: 'HostName',
      templateOptions: {
        label: 'HostName',
        required: true,
      },
    },
    {
      type: 'input',
      key: 'UserName',
      templateOptions: {
        label: 'Username',
        required: true,
      },
    },
    {
      type: 'input',
      key: 'Password',
      templateOptions: {
        label: 'Password',
        required: true,
      },
    }
    ],
    },
  
  ];

  card2Fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
      type: 'input',
      key: 'HostName',
      templateOptions: {
        label: 'HostName',
        required: true,
      },
    },
    {
      type: 'input',
      key: 'UserName',
      templateOptions: {
        label: 'Username',
        required: true,
      },
    },
    {
      type: 'input',
      key: 'Password',
      templateOptions: {
        label: 'Password',
        required: true,
      },
    },
],
    },
];
  card3Fields: FormlyFieldConfig[] = [
    // {
    //   type: 'input',
    //   key: 'field3',
    //   templateOptions: {
    //     label: 'Field 3',
    //     required: true,
    //   },
    // },
  ];
  card4Fields: FormlyFieldConfig[] = [
    {
      type: 'select',
      key: 'field4',
      templateOptions: {
        label: '----',
        options: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ],
      },
    },
  ];
  card5Fields: FormlyFieldConfig[] = [
    {
      //  type: 'input',
      //  key: 'field5',
      templateOptions: {
        //    label: 'Field 5',
        required: true,
      },
    },
  ];
  card6Fields: FormlyFieldConfig[] = [
    {
      // type: 'input',
      // key: 'field6',
      templateOptions: {
        //label: 'Field 6',
        required: true,
      },
    },
  ];

  onSubmit() {}
}
