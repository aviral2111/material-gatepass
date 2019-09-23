import { Component, OnInit } from '@angular/core';
import { GatePassServiceService, ResponseClass } from '../Services/gate-pass-service.service';
import { GatePass } from '../Models/GatePass';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PassIn_out } from '../Models/passin_out';
import { Items } from '../Models/Items';
import { MaterialType } from '../Models/MaterialType_enum';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authoriser',
  templateUrl: './authoriser.component.html',
  styleUrls: ['./authoriser.component.css']
})
export class AuthoriserComponent implements OnInit {
  loading:boolean;
  g:GatePass
  listGatePass: Array<GatePass>;
  constructor(private  _gatePassSvc:GatePassServiceService,private _router:Router, private _activatedRouter:ActivatedRoute) { 
    this.g = new GatePass();
    this.loading = true;
        //  this.g= new GatePass();
        // this.g.username="abc"
        // this.g.slNo = '123';
        // this.g.gatePassDate =new Date();
        // this.g.to ="Abc";
        // this.g.employeeNumber= 246 ;
        // this.g.designation= "assistant manager";
        // this.g.email="sa@kld3.this.g..com";
        // this.g.password="37sjjks";
        // this.g.fullName="abc jksdk";
        // this.g.mobile=89324825332;
        // this.g.issuerName="sahd";
        // this.g.issuerMobile=3454345;
        // this.g.issuerDepartment="IS";
        // this.g.authoriserName="dfds";
        // this.g.authoriserMobile=3324;
        // this.g.authoriserDepartment="IS";
        // this.g.from="Indian Oil Pvt.Ltd.";
        // this.g.PassIn_out = PassIn_out.Out;

        // this.g.items;
        // let item:Items;
        // let j:number;
        // this.g.items = new Array<Items>();
        // for(j=0;j<3;j++){
        //     item = new Items();
        //     item.srNo='123';
        //     item.quantity = 2;
        //     item.description="aaaa"
        //     item.materialType = MaterialType.Returnable;
        //     item.materialsApproved = '5';
        //     item.materialsNotApproved = 2;
        //     item.materialName = 'cpu';
        //     this.g.items.push(item);
        }
   
  

  ngOnInit() {

    this._activatedRouter.paramMap.subscribe((param:ParamMap)=>{
      let slNo:string;
      slNo = param.get('slno');

      this._gatePassSvc.GetAll().subscribe(data => 
        {
          // console.log(data);
          let a:ResponseClass = JSON.parse(data.toString());
          
          if(a && a.status == 202){
            this.listGatePass= JSON.parse(a.data); 
          }
          this.g = this.listGatePass.filter(gatePass=>gatePass.slNo === slNo)[0];
          this.loading = false;
        }, err=>console.log(err));
    });
    // this.listGatePass = this._gatePassSvc.gatePassList;
    
  }
  subit(){
    // console.log(this.g.items);
  }


}
