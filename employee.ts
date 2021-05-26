class EmployeeMain
{
name:string
address:string
mobile:string
constructor()
{
        this.name= "Ravi";
        this.address= "Pune";
        this.mobile = "9998887771";
}
main():void{
  console.log("Employee Details")
  console.log("Name:" + " " + this.name);
  console.log("Address:" + " " + this.address);
  console.log("Mobile:" + " " + this.mobile);
}}
var e=new EmployeeMain();
e.main();