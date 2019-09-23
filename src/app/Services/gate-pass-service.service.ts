import { Injectable,OnInit } from '@angular/core';
import {GatePass} from './../Models/GatePass';
import { Items } from '../Models/Items';
import { MaterialType } from '../Models/MaterialType_enum';
import { PassIn_out } from '../Models/passin_out';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatePassServiceService implements OnInit {
  gatePassList:Observable<Array<GatePass>>;
  constructor(private _httpClient: HttpClient) { 
      // let  g:GatePass;
      // let i:number;
      // this.gatePassList =new  Array<GatePass>();
      // for( i=0 ; i<5 ; i++){
      //   g= new GatePass();
      //   g.username="abc"
      //   g.slNo = '123';
      //   g.gatePassDate =new Date();
      //   g.to ="Abc";
      //   g.employeeNumber= 246 ;
      //   g.designation= "assistant manager";
      //   g.email="sa@kld3.gm.com";
      //   g.password="37sjjks";
      //   g.fullName="abc jksdk";
      //   g.mobile=89324825332;
      //   g.issuerName="sahd";
      //   g.issuerMobile=3454345;
      //   g.issuerDepartment="IS";
      //   g.authoriserName="dfds";
      //   g.authoriserMobile=3324;
      //   g.authoriserDepartment="IS";
      //   g.from="Indian Oil Pvt.Ltd.";
      //   g.PassIn_out = PassIn_out.Out;

      //   g.items;
      //   let item:Items;
      //   let j:number;
      //   g.items = new Array<Items>();
      //   for(j=0;j<3;j++){
      //       item = new Items();
      //       item.srNo='123';
      //       item.quantity = 2;
      //       item.description="aaaa"
      //       item.materialType = MaterialType.Returnable;
      //       item.materialsApproved = '5';
      //       item.materialsNotApproved = 2;
      //       item.materialName = 'cpu';
      //       g.items.push(item);
      //   }
      //   this.gatePassList.push(g);
      // }
      
  }
  ngOnInit(){
    

  }
  GetAll(){
    let y:any; 
      let headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
      return this._httpClient.get('http://localhost/GatePassApi/api/GatePassData/GetData',{headers:headers});
      
  }
}
export class ResponseClass{
  status:number;
  data: string;
}