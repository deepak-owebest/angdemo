//importing declearations
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import {map } from 'rxjs/operators'; 
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
//component define
@Component({
  selector: 'app-prime-list',
  templateUrl: './prime-list.component.html',
  styleUrls: ['./prime-list.component.css']
})
//exporting class
export class PrimeListComponent implements OnInit {
	result: any;
	resultsub:any;
	p: number = 1;
	loading=false;
	searchPrimeForm: FormGroup;  
	submitted = false;
 	//search column  
	primeColumn = [	  
	  {
		name:'Prime Number',
		key:'number',
		sort:'asc'
	  },
	]
  
  	constructor(private formBuilder: FormBuilder,private mainService: MainService ) {  }

	//init funciton
	ngOnInit() {
		this.searchPrimeForm = this.formBuilder.group({
			number: ['', [Validators.required,Validators.min(2),Validators.max(104730)]],
			limit:10,
			offset:0,
			start:[''],
		});
		//this.searchPrimeForm.controls['number'].setValue("");
		//this.primeList();
	}
	//listing funciton
	primeList(){
		this.submitted = true;
		if (this.searchPrimeForm.invalid) {
			this.loading=false;
			return;
		}
		this.loading=true;
		this.resultsub = this.mainService.getPrimeList(this.searchPrimeForm.value).pipe(map(res=> res
			)).subscribe(res=>{
			this.result = res.data;
			this.loading=false;			
		});
		this.loading=false;			
	}
	get f() { return this.searchPrimeForm.controls; }
	pageChange($event){
		let offset = (($event-1) > 0)?((($event-1)*10)):0;
		this.searchPrimeForm.controls['offset'].setValue(offset);
		this.primeList();
		this.p = $event;
	}
	
	searchPrimeList(){
		this.searchPrimeForm.controls['offset'].setValue(0);
		this.p = 1;
		this.primeList();
	}
	
	keyPress(event: any) {
		const pattern = /[0-9\+\-\ ]/;
		let inputChar = String.fromCharCode(event.charCode);
		if (event.keyCode != 8 && !pattern.test(inputChar)) {
			event.preventDefault();
		}
	}
	//destroy funciton
	ngOnDestroy(){
		this.resultsub.unsubscribe();
	}
}