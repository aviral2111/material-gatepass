import { Component, OnInit } from '@angular/core';
import { GatePassServiceService, ResponseClass } from '../Services/gate-pass-service.service';
import { GatePass } from '../Models/GatePass';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Items } from '../Models/Items';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  loading:boolean;
  g:GatePass
  listGatePass: Array<GatePass>;
  constructor(private  _gatePassSvc:GatePassServiceService,private _router:Router, private _activatedRouter:ActivatedRoute) { 
    this.g = new GatePass();
    this.loading = true;
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
  }
  
  
}
