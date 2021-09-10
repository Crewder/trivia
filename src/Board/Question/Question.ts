import { Category } from "./Category/Category";

export class Question <T> {
  private category : Category = new Category<T>();
  private number: number;
  public string : string;

  constructor(category: Category, number: number) {
    this.category = category
    this.number = number;
  }


  getCategory(): Category {
    return this.category;
  }

  displayQuestion(): string {
    return this.category + " Question " + this.number;
  }




  // isGoodAnswer(): boolean {
  //  if (this.answer == this.goodAnswer) {
  //  return true;
  //} else {
  // return false;
  //} c pas beau ça de fou haha
  //}
}

/*
 1/ Array<Question> ==> chercher les question par type ==> prend la premiere question afficher = supprime

 2/ 4 objec Type ==> 1 compteur + un Array Question ==> display la question Array[compteur] compteur++

 3/ 1 object ==> 4 compteur + Array QuestionParCatégory ==>




 */