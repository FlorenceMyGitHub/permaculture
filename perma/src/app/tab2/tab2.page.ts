import { Component } from '@angular/core';
import {Parse} from 'parse';
import { VarietesPage } from './varietes/varietes.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  rootPage = VarietesPage;
  results: Array<Object> = [];



  constructor() {
    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    // Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
    Parse.initialize(
      'jKfb4ULP35FIWF7aaNEDYrYMFrCYHqO6zi7Qyys3', // This is your Application ID
      'rnTNcPIywPvfKdm5srww9sZhPzaTJgzt5gse3kMR' // This is your Javascript key
    );

  //  this.result = [{}];
  //this.results= [{}];
    retrievePlantation(this.results);

    //let res = this.results;

    async function retrievePlantation(res:Array<Object>) {
       // Creates a new Query object to help us fetch Plantation objects
      const query = new Parse.Query('Plantation');


      await query.find().then(result => {
        result.forEach(plantation => {
          res.push(plantation.get("NomGenerique"))
          console.log(plantation.get("NomGenerique"))
        });
      });

    //  res = res['NomGenerique'];
         
      //console.log('test: '+JSON.stringify(res));
    //  res = query;
    //  this.results.push(res);
    // this.re = JSON.parse(results);
     // console.log(`ParseObjects found: ${JSON.stringify(query)}`);
      /* try {
        console.log('test: '+await query.);
      } catch (error) {
        alert(`Failed to retrieve the object, with error code: ${error.message}`);
      }*/
  
    //  res = query;
    /*  try {
        //Query the SoccerPlayers object using the objectId you've copied
        const Plantation = await query.get("YWCuSPhSD3");
        //access each object propertie using the get method
        const NomGenerique = Plantation.get("NomGenerique");
        const Variete = Plantation.get("variete");


        res.push(NomGenerique);
        console.log(NomGenerique);
        //console.log('NomGenerique: '+ NomGenerique+', Variete: ' +Variete);// ${birth}', attributes: '${attributes});
      } catch (error) {
        alert(`Failed to retrieve the object, with error code: ${error.message}`);
      }*/
    }  

  
  
}

showVarietes(generique) {
  const query = new Parse.Query('Plantation');
  query.equalTo("NomGenerique", generique);
  query.find().then(result => {
    result.forEach(plantation => {
     // res.push(plantation.get("variete"))
      console.log(plantation.get("variete"))
    });
  });
}


showDetail(i) {

}

}
