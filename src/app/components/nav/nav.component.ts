import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isToggleOn: boolean = false;
toggleState() {
    this.isToggleOn = !this.isToggleOn;
}
save(){
  alert("تم حفظ التغيرات")
}

}
