import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators ,FormArray,FormControl } from '@angular/forms';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  requiredForm: any;
  submitted: boolean | undefined;
  valid: string | undefined;
  invaild:boolean | undefined;
  
  constructor(private fb: FormBuilder) {
     this.myForm();
  }

  myForm() {
     this.requiredForm = this.fb.group({
     email: [ '', [Validators.required, 
         Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
     firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        Birthday: ['', Validators.required],
        phone: ['', [Validators.required, 
          Validators.pattern("[0-9]{3}-[0-9]{2}-[0-9]{3}")] ]

     });
  }

  ngOnInit() {
    
        
    
}

onSubmit() {
  
     
  // stop here if form is invalid
  if (this.requiredForm.valid) {
   alert('Thank you for submitting the test, we will reply to you as soon as possible');
  } 
};

 
personal: string[] = ['For what reason would you say you are looking to leave your present place of employment?',
'For what reason would you like to work here?',
'What are your weaknesses ?',
'Describe yourself with few words ?',
'Why Should I hire You ?',

];

options: string[] = ['Angular is a platform and framework for building single-page client applications using HTML and TypeScript.', 'Angular is written in TypeScript.', 'The architecture of an Angular application relies on certain fundamental concepts.', 'Angular is backend framework'];
optio: string[] = ['CSS', 'Bootstrap', 'MySql', 'Mongodb'];
opti: string[] = ['CSS', 'Bootstrap', 'MySql', 'Mongodb'];
o: string[] = ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'];
p: string[] = ['Both x and y are equal in value, type and reference address as well.', 'Both are x and y are equal in value only.', 'Both are equal in the value and data type.', 'Both are not same at all.'];

  questio: any = [
    {
      question: "What is Angular ?",
      answer: this.options,
     
    },
    {
      question: "What is a front end framework? ",
      answer: this.optio,
      
    },
    {
      question: "What is a back end framework?",
      answer: this.opti,
     
    },
    {
      question: " In javascrpt,The 'function' and ' var' are known as:",
      answer: this.o,

    },
    {
      question: "In JavaScript the x===y statement implies that:",
      answer: this.p,
     
    }
  ];
}

