let passcode = "Team is formed";  
  
class Company {  
    public _name: string; 
    public _employees: string;
    public _teamlead: string; 
  
    get company_details(): string {  
        return this._name;  
    }  
  
    set company_details(newName: string) {  
        if (passcode && passcode == "Team is formed") {  
            this._name = newName;
        }  
        else {  
            console.log("Unauthorized update!");  
        }  
    } 

} 

class CompanyMain extends Company{

  get main(): string{
    return this._employees;
  }

  get team(): string{
    return this._teamlead;
  }

  set main(newEmp: string){
    this._employees = newEmp;
  }
  set team(newTeam: string){
    this._teamlead = newTeam;
  }
}

var comp = new Company();  
var dd = new CompanyMain();
comp.company_details = "L&T Technology Services";
dd.main  = "Ravi,Ram,Krishna,Shakir,Thomas";
dd.team = "Thomas"
var mystring = dd.main;
var stringSplit = mystring.split(",");
if (comp.company_details) {  
    console.log("Name: " + "" + comp.company_details); 
    console.log("Employees: " + stringSplit);
console.log("Lead:" + " " + dd.team);
 
} 