import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // "Credenciales quemadas" (fake backend)
  private readonly fakeUser = {
    email: 'admin@udv.com',
    password: '152026',
  };

  login(email: string, password: string): boolean {
    const ok =
      email === this.fakeUser.email && password === this.fakeUser.password;

    if (!ok) {
      console.error('Credenciales incorrectas (fake backend)');
    }

    return ok;
  }
}
