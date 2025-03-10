import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'ChallengeNewsletterCard';
  
  onSubmit() {
    // Récupérer les éléments du DOM
    const checkbox = document.getElementById('checkbox') as HTMLInputElement;
    const emailInput = document.getElementById('email')  as HTMLInputElement;
    // Vérifier si les éléments existent
    if (checkbox && emailInput) {
      // Vérifier si la checkbox est cochée
      if (checkbox.checked) {
        console.log('Checkbox is checked');
        console.log('Email:', emailInput.value);
        alert('You sign up for newsletter with '+ emailInput.value)
      } else {
        console.log('Checkbox is not checked');
        alert('please check')
      }
    } else {
      console.log('Checkbox or email input not found');
      alert('Please check all fields')
    }
  }
}
