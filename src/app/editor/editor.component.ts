import { Component, OnInit } from '@angular/core';
import { GatePassServiceService, ResponseClass } from '../Services/gate-pass-service.service';
import { GatePass } from '../Models/GatePass';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
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
    // this.listGatePass = this._gatePassSvc.gatePassList;
    
  }
}
