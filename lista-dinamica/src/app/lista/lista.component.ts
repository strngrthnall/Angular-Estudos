import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {
  date = new Date()
  time: string = this.date.getHours() + ":" + this.date.getMinutes()
  newItem: string = ''
  list:string[] = []
  itemStyle: string = 'none'


  constructor() { }

  ngOnInit(): void {
  }

  adicionaLista() {
    if(this.newItem === '') {
      alert('Não pode inserir um item vazio.')
    } else {
      this.list.push(this.newItem)
      const date = new Date()
      this.time = date.getHours() + ":" + date.getMinutes()
    }
    this.newItem = ''
  }

  apagarLista() {
    if(this.list.length !== 0) {
      this.list.splice(0, this.list.length)
    } else {
      alert('A lista já está vazia.')
    }
  }

  riscarItem() {
    if(this.itemStyle === 'line-through') {
      this.itemStyle = 'none'
    } else {
      this.itemStyle = 'line-through'
    }
  }

}
