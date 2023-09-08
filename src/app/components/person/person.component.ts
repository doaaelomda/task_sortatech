import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  input = document.getElementById('numberInput') as HTMLInputElement;
  personImage: string = '../../../assets/Image-100.png';
  
  handleFileInput(event: any) {
    const selectedImage = event.target.files[0];
    this.loadImageFromFile(selectedImage);
  }
  changeImage() {
    this.personImage = 'NEW_IMAGE_URL';
    localStorage.setItem('personImage','../../../assets/Image-100.png')
  }
  handleImageChange(event: any) {
    const selectedImage = event.target.files[0];
    this.loadImageFromFile(selectedImage);
  }
  private loadImageFromFile(imageFile: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.personImage = e.target.result;
    };
    reader.readAsDataURL(imageFile);
    localStorage.getItem(this.personImage)
  }
}
