import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAuthService} from '../../services/user-auth.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  public subTitleText: string = 'Войдите для начала работы';
  public exist = '';
  public hide: boolean = true;
  public message = 'Your device is in portrait mode';
  public signIn!: FormGroup;
  public isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dataGet: UserAuthService,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.buildForm();
    this.orientTest();
  }

  public buildForm(): void{
    this.signIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public submit(): void{
    this.isSubmitted = true;
    if (this.signIn.valid){
      this.checkUser(this.getter.email.value);
    }
  }

  public checkUser(email: string): void{
      this.dataGet.checkIfUserExist(email)
        .subscribe((response) => {
        if (response.length === 0){
          this.exist = 'Пользователя несуществует!';
          this.clearMessage();
        }
        else if (response[0].password !== this.getter.password.value){
          this.exist  = 'Пароль не верный!';
          this.clearMessage();
        }
        else {
          this.dataGet.activeUser(response[0]);
          this.router.navigateByUrl('/logged');
        }
      });
  }

  public get getter(): { [p: string]: AbstractControl } {
    return this.signIn.controls;
  }

  public orientTest(): void{
    window.screen.orientation.lock('landscape');
    if (window.screen.orientation.type === 'landscape-primary'){
      this.snackBar.open(this.message, 'Act');
    } else {
      this.snackBar.dismiss();
    }
  }

  private clearMessage(): void{
    setTimeout(() => {
      this.exist = '';
    }, 3000);
  }

}
