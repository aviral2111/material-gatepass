import { Component, OnInit } from '@angular/core';
import { GatePass } from '../Models/GatePass';
import { GatePassServiceService, ResponseClass } from '../Services/gate-pass-service.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Items } from '../Models/Items';

@Component({
  selector: 'app-forsecurity',
  templateUrl: './forsecurity.component.html',
  styleUrls: ['./forsecurity.component.css']
})
export class ForsecurityComponent implements OnInit {
  listGatePass:Array<GatePass>
  loading: boolean;
  g: GatePass[];
  _router: any;
  
  constructor(private  _gatePassSvc:GatePassServiceService,private _activatedRouter:ActivatedRoute) {
    this.loading = true;
   }
  ngOnInit() {
    // this.listGatePass = this._gatePassSvc.gatePassList;
    this._activatedRouter.paramMap.subscribe((param:ParamMap)=>{
      let slNo:string;
      slNo = param.get('slno');

      this._gatePassSvc.GetAll().subscribe(data => 
        {
          // console.log(data);
          let a:ResponseClass = JSON.parse(data.toString());
          
          if(a && a.status == 202){
            this.listGatePass= JSON.parse(a.data); 
            console.log(this.listGatePass);
            this.g = this.listGatePass;
          }
          
          this.loading = false;
        }, err=>console.log(err));
    });
  }
  
  getApprovedMaterialCount(gatePassItem:Items[]): number{
    return gatePassItem.filter(x=>x.materialsApproved == 1).length;
  
  }
  rowClick(gatePass:GatePass){
    this._router.navigate(['/security',gatePass.slNo])
  }
}
