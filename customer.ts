class Customer{
  name: string
  address: string
  mobile: string

  constructor(name: string, address: string, mobile: string){
    this.name = name;
    this.address = address;
    this.mobile = mobile;
  }
}

class CustomerMain extends Customer{
    main():void{
      var myString = "Name: " + this.name + "," +  "Address: " + this.address + "," + "Mobile: "  + this.mobile ;
      var [name, address, mobiles] = myString.split(",");
      console.log(name);
      console.log(address);
      console.log(mobiles);
    }
}
let cust = new CustomerMain("Ravi","Pune","9999888666");
cust.main();