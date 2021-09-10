export class Player {
  private id : number;
  private name: string;
  private score: number = 0;
  private position: number;
  private isInJail: boolean = false;

  constructor() {
    // this.players.push(name);
    // this.places[this.howManyPlayers() - 1] = 0;
    // this.purses[this.howManyPlayers() - 1] = 0;
    // this.inPenaltyBox[this.howManyPlayers() - 1] = false;

    console.log(this.name + " was added");
    // console.log("They are player number " + this.players.length);
    console.log('et fff')
  }

   getId(): number {
    return this.id;
  }

   setId(value: number) {
    this.id = value;
  }

   getName(): string {
    return this.name;
  }

   setName(value: string) {
    this.name = value;
  }

  getScore(): number {
    return this.score;
  }

  setScore(value: number) {
    this.score = value;
  }

  getPosition(): number {
    return this.position;
  }

  setPosition(value: number) {
    this.position = value;
  }

  getIsInJail(): boolean {
    return this.isInJail;
  }

  setIsInJail(value: boolean) {
    this.isInJail = value;
  }

  incrementScore(): void {
     this.score + 1;
  }

  GoInJail() : void{ // BONK !
    this.isInJail = false;
  }

  didPlayerWin() : boolean{
    return this.getScore() == 6;
  };

}


// Players
  // ID
  // Name
  // Position sur le plateau
  // Score Getter
  // Score Increment

// Plateau
  // Cases

// Questions
  // ID
  // Type des questions
  // Creation de la question
  // Reponses
    // Correct -> Score
      // Récompense
      // Continue
    // Faux
      // Penalty