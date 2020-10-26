import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { TokenStorageService } from './../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  itemForm: FormGroup;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
	roles: string[] = [];

  constructor(
    private tokenStorage: TokenStorageService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
  	}  
  	this.iniciarFormulario();
	}

  iniciarFormulario() {
		this.itemForm = this.fb.group({
		  username: [''],
		  password: ['']
		});
	}

  submit(): void {
		this.authService.login(this.itemForm.value).subscribe(
			(data) => {
				debugger;
				this.tokenStorage.saveToken(data.token);
				// this.tokenStorage.saveUser(data);

				this.isLoginFailed = false;
				this.isLoggedIn = true;

				this.router.navigate(['/persona/Persona']);
				// this.roles = this.tokenStorage.getUser().roles;
				// this.reloadPage();
			},
			(err) => {
				this.errorMessage = err.error.message;
				this.isLoginFailed = true;
			}
		);
	}

	reloadPage(): void {
		window.location.reload();
  }
  
}
