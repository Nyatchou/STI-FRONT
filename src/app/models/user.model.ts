export class User {
  _id: string;
  _firstname: string;
  _lastname: string;
  _email: string;
  _role: string;
  _dateNaissance: string;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    dateNaissance: string,
    role: string,
    id?: string,

  ) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    this._role = role;
    this._id = id;
    this._dateNaissance = dateNaissance;
  }

  set id(id: string){
      this._id = id;
  }

  get id(): string{
      return this._id;
  }

  get firstname(): string{
      return this._firstname;
  }

  set firstname(firstname: string){
      this._firstname = firstname;
  }

  get lastname(): string{
      return this._lastname;
  }

  set lastname(lastname: string){
      this._lastname = lastname;
  }

  get email(): string{
      return this._email;
  }

  set email(email: string){
      this._email = email;
  }

  get role(): string{
    return this._role;
  }

  get dateNaissance(): string {
    return this._dateNaissance;
  }

  set dateNaissance(date: string){
      this._dateNaissance = date;
  }

}
