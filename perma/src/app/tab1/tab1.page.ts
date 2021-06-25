import { Component } from '@angular/core';
//import { Parse } from '../../../node_modules/parse';
import {Parse} from 'parse';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //const Parse = require('parse');

  result: string;
 

  constructor() {

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    // Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
    Parse.initialize(
      'jKfb4ULP35FIWF7aaNEDYrYMFrCYHqO6zi7Qyys3', // This is your Application ID
      'rnTNcPIywPvfKdm5srww9sZhPzaTJgzt5gse3kMR' // This is your Javascript key
    );

   
     /* let install = new Parse.Installation();

      install.save(null, {
        success: (install) => {
          // Execute any logic that should take place after the object is saved.
          this.result = 'New object created with objectId: ' + install.id;
        },
        error: (install, error) => {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          this.result = ('Failed to create new object, with error code:' + error.message.toString());
        }
      });*/

      retrievePlayer();



  /*    const query = new Parse.Query('Plantation');
      query.equalTo('objectId', 'YWCuSPhSD3');
      try {
        const results = await query.find();
        for (const object of results) {
          // Access the Parse Object attributes using the .GET method
          const myCustomKey1Name = object.get('NomGenerique');
          const myCustomKey2Name = object.get('variete');
          console.log(myCustomKey1Name);
          console.log(myCustomKey2Name);
        }
      } catch (error) {
        console.error('Error while fetching MyCustomClassName', error);
      }
    })(); */

  /*  let install = new Parse.Installation();

  install.save(null, {
    success: (install) => {
      // Execute any logic that should take place after the object is saved.
      this.result = 'New object created with objectId: ' + install.id;
    },
    error: (install, error) => {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      this.result = ('Failed to create new object, with error code:' + error.message.toString());
    }
  });
*/

async function retrievePlayer() {
  //Define the Parse Object you want to Query
  const SoccerPlayers = Parse.Object.extend("Plantation");
  //Create your Parse Query
  const query = new Parse.Query(SoccerPlayers);
  try {
    //Query the SoccerPlayers object using the objectId you've copied
    const player = await query.get("YWCuSPhSD3");
    //access each object propertie using the get method
    const name = player.get("NomGenerique");
    const email = player.get("variete");
    //const birth = player.get("yearOfBirth");
    //const attributes = player.get("attributes");

    console.log('Name: '+ name+', email: ' +email+',birth: ');// ${birth}', attributes: '${attributes});
  } catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
  }
}  

}}
