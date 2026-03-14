import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pokemon-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pokemon-login.html',
  styleUrls: ['./pokemon-login.css']
})
export class PokemonLoginComponent {
  loginForm: FormGroup;

  particles = [
    { delay: '0s',   x: '10%', y: '20%' },
    { delay: '0.5s', x: '80%', y: '30%' },
    { delay: '1s',   x: '25%', y: '70%' },
    { delay: '1.5s', x: '70%', y: '80%' },
    { delay: '2s',   x: '50%', y: '15%' },
    { delay: '0.3s', x: '90%', y: '60%' },
    { delay: '0.8s', x: '35%', y: '40%' },
    { delay: '1.2s', x: '62%', y: '55%' },
  ];

  // Background pokeballs — use left OR right, set the other to undefined
  bgPokeballs = [
    { size: 55,  left: '8%',  right: undefined, top: '18%', duration: '4s',   delay: '0s'   },
    { size: 90,  left: '3%',  right: undefined, top: '42%', duration: '5.5s', delay: '0.7s' },
    { size: 65,  left: '18%', right: undefined, top: '65%', duration: '4.8s', delay: '1.3s' },
    { size: 110, left: undefined, right: '5%',  top: '22%', duration: '6s',   delay: '0.4s' },
    { size: 70,  left: undefined, right: '14%', top: '55%', duration: '5s',   delay: '1s'   },
    { size: 45,  left: undefined, right: '22%', top: '75%', duration: '3.8s', delay: '1.8s' },
  ];

// mi constructor para inicializar el formulario
constructor(private fb: FormBuilder, private router: Router, private cd: ChangeDetectorRef) {

  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  // Creacion de la cuenta 
  localStorage.setItem('registeredUser', JSON.stringify({
    email: 'ash@gmail.com',
    password: 'pikachu123'
  }));
}

get email() { return this.loginForm.get('email'); }
get password() { return this.loginForm.get('password'); }

isLoading = false;
loginError = false;

onSubmit(): void {

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  if (this.isLoading) return;

  this.isLoading = true;
  this.loginError = false;

  const email = (this.loginForm.get('email')?.value ?? '').trim();
  const password = (this.loginForm.get('password')?.value ?? '').trim();

  const storedUser: any = JSON.parse(localStorage.getItem('registeredUser') || '{}');

  setTimeout(() => {

    if (email === storedUser.email && password === storedUser.password) {

      localStorage.setItem('trainer', JSON.stringify({
        email: email,
        isLoggedIn: true
      }));

      this.router.navigate(['/home']);

    } else {
      this.loginError = true;
    }

    this.isLoading = false;
    this.cd.detectChanges();

  }, 1500); // Tiempo de espera para el login
}
}

