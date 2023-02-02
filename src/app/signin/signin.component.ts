import { Component } from '@angular/core';
import{ReactiveFormsModule,FormGroup,FormControl,FormControlName} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
 usersignup= new FormGroup({
  email: new FormControl('prateek@gmail.com'),
  psw: new FormControl('1654jhvjv'),
  pswrepeat: new FormControl('1654jhvjv')
 }); 
 userdata(){
   console.log(this.usersignup.value);
 }
 constructor(private router: Router){
   
 }
  show=true;
 navigate(){
   this.router.navigateByUrl('navbar');
   this.show=false;
   console.log(this.show)
 }
}
