// class Company{
//   name: string;
//   employees: string;
//   teamlead: string;

//   constructor(name: string, employees: string, teamlead: string){
//     this.name = name;
//     this.employees = employees;
//     this.teamlead = teamlead;
//   }
// }

// class CompanyMain extends Company{
  
// }

let passcode = "Team is formed";  
  
class Company {  
    public _name: string; 
    public _employees: string;
    public _teamlead: string; 
  
    get company_details(): string {  
        return this._name;  
    }  

    get main(): string{
      return this._employees;
    }

    get team(): string{
      return this._teamlead;
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
  // main():void{
  //   var myString = "Employees: " + this._employees + "," + "Lead: "  + this._teamlead ;
  //   var [address, mobiles] = myString.split(",");
  //   console.log(address);
  //   console.log(mobiles);
  // }

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
dd.main  = "Ravi,Ram,Krishna,Shakir,Thomas" ;
dd.team = "Thomas"
if (comp.company_details) {  
    console.log("Name: " + "" + comp.company_details); 
    console.log("Employees: " + dd.main);
console.log("Lead: " + " " + dd.team);
 
} 