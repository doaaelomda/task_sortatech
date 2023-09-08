import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  isToggleOn: boolean = false;
  toggleState() {
      this.isToggleOn = !this.isToggleOn;
  }
  isToggleOn1: boolean = false;
  isToggleOn2: boolean = false;
  isToggleOn3: boolean = false;
  isToggleOn4: boolean = false;
  isToggleOn5: boolean = false;
  toggleState1() {
    this.isToggleOn1 = !this.isToggleOn1;
}
toggleState2() {
  this.isToggleOn2 = !this.isToggleOn2;
}
toggleState3() {
  this.isToggleOn3 = !this.isToggleOn3;
}
toggleState4() {
  this.isToggleOn4 = !this.isToggleOn4;
}
toggleState5() {
  this.isToggleOn5 = !this.isToggleOn5;
}

addElements() {
  // الحصول على العنصر الأصلي
  const originalDiv = document.getElementById('again');

  // التأكد من أن العنصر الأصلي غير مساوٍ لـ null قبل الاستمرار في العمليات
  if (originalDiv) {
    // إنشاء العنصر الجديد
    const newDiv = document.createElement('div');
    newDiv.id = 'newDiv'; // يمكنك تعيين ID جديد للعنصر الجديد هنا

    // نسخ العناصر الفرعية من العنصر الأصلي وإضافتها إلى العنصر الجديد
    const span1 = originalDiv.querySelector('span:first-child')?.cloneNode(true) as HTMLElement;
    newDiv.appendChild(span1);

    const span2 = originalDiv.querySelector('span:last-child')?.cloneNode(true) as HTMLElement;
    newDiv.appendChild(span2);

    const a1 = originalDiv.querySelector('a:first-child')?.cloneNode(true) as HTMLElement;
    newDiv.appendChild(a1);

    const p1 = originalDiv.querySelector('p:first-child')?.cloneNode(true) as HTMLElement;
    newDiv.appendChild(p1);

    const p2 = originalDiv.querySelector('p:last-child')?.cloneNode(true) as HTMLElement;
    newDiv.appendChild(p2);

    const a2 = originalDiv.querySelector('a:last-child')?.cloneNode(true) as HTMLElement;
    newDiv.appendChild(a2);

    const li = originalDiv.querySelector('li')?.cloneNode(true) as HTMLElement;
    newDiv.appendChild(li);

    // إضافة العنصر الجديد تحت العنصر الأصلي
    originalDiv.appendChild(newDiv);
  }
}

}
