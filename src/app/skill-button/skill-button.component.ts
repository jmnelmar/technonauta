import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skill-button',
  templateUrl: './skill-button.component.html',
  styleUrls: ['./skill-button.component.css']
})
export class SkillButtonComponent implements OnInit {

  @Input() picPath: String;
  @Input() description: String;
  constructor() { }


  /*constructor(
    private clienteService: ClienteService,
    private modalService: ModalService, 
    private activatedRoute:ActivatedRoute,
    ) { }
  */

  ngOnInit() {
  }

}
