class Innings{
  teamname: string
  inningsname: string
  constructor(teamname: string, inningsname: string)
  {
          this.teamname = teamname;
          this.inningsname = inningsname;
  }
}

class InningsMain extends Innings{
  runs: number
  constructor(teamname: string, inningsname: string, runs: number)
  {
        super(teamname, inningsname);
        this.runs = runs;
  }

  displayInningsDetails():void{
      console.log("Team name:" + " " + this.teamname);
      console.log("Innings name:" + " " + this.inningsname);
      console.log("Runs:" + " " + this.runs);
    }
}

let get = new InningsMain("Austrlia","first",200);
get.displayInningsDetails();

