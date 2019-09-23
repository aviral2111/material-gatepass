import {Items} from './Items';

export class GatePass{
    slNo:string;
    gatePassDate: string;
    to:string;
    items:Array<Items>;
    username:string;
    employeeNumber:number;
    designation:string;
    email:string;
    password:string;
    empNo:string;
    fullName:string;
    mobile:number;
    issuerName:string;
    issuerMobile:number;
    issuerDepartment:string;
    authoriserName:string;
    authoriserMobile:number;
    authoriserDepartment:string;
    from:string;
    PassIn_out:number;
    get ApproverMaterial():number{
        return this.items.filter(it=>it.materialsApproved==1).length;
    }
}