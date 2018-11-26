import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrainingsessionService } from '../../trainingsession.service';
import { Sets } from '../TrainingSession';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  sets: Sets[] = [];
  activeExercises: [''] = [''];
  constructor() {
   }

  addSet(exercise, weight, reps) {
  	let set2 = {
  		exercise: exercise,
  		weight: weight,
  		reps: reps};
  	this.activeExercises.push(exercise);
  	this.sets.push(set2);
  	//console.log(this.sets);
  }

  ngOnInit() {
  }
 
}
