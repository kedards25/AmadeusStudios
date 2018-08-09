import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'ams-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $('body').loading();
    $.notify({
      // options
      message: 'Hello World'
    }, {
        // settings
        type: 'success',
        placement: {
          from: 'top',
          align: 'center'
        },
      });
  }

}
