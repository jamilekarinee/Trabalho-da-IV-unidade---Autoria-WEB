export class Produtora {
  constructor(nome) {
      this._nome = nome;
  }

  set nome(nome){
    this._nome = nome;
  }

  set usuario (usuario){
    this._usuario = usuario ;
  }

  get nome(){
    return this._nome;
  }

  get usuario(){
    return this._usuario;
  }   

}