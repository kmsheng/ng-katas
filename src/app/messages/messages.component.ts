import { Component, OnInit } from '@angular/core';
import  { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // The messageService property must be public because Angular
  // only binds public component properties to template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
