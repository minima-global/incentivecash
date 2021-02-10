import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Minima } from 'minima';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  public loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      uName: '',
      pKey: ''
    });
  }

  getReferenceID() {

    alert('Your reference ID is: 0x00');

    const referenceID = '0x00'
    // Minima.net.get to get the reference ID

    const userDetails = { referenceID: referenceID }

    Minima.file.save(JSON.stringify(userDetails), 'userDetails.txt', (res: any) => {
      if (res.success) {
        console.log('Saved reference id');

        // router Link to the incentive cash list

      } else {
        console.log('Failed to save reference id.');
      }
    });

  }

  get username() {
    return this.loginForm.get('uName');
  }

  get publickey() {
    return this.loginForm.get('pKey');
  }

}
