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

  addSet(exercise, weight, reps, numSets) {
  	if (reps < 1){
  		reps = 1;
  	}
  	if (weight < 1){
  		weight = 1;
  	}
  	if (numSets < 1){
  		numSets = 1;
  	}
  	let set = {
  		exercise: exercise,
  		weight: weight,
  		reps: reps,
  	    numSets: numSets
  	};
  	
  	if(!this.duplicateSet(set)){
  	  this.sets.push(set);
  	  this.activeExercises.push(exercise);
  	  this.sets.sort(function(a, b){
  	   	return a.weight - b.weight;
  	    });
    } 
  
  }

  deleteSet(exercise, weight, reps){
  	let temp;
  	this.sets.forEach(function(element){
  		if (element.exercise == exercise &&
  			element.weight == weight &&
  			element.reps == reps){
  			temp = element;
  		}
  	})
  	let i = this.sets.indexOf(temp);
  	this.sets.splice(i, 1);
  	let j = this.activeExercises.indexOf(exercise);
  	this.activeExercises.splice(j, 1);
  }

  duplicateSet(set){
  	let flag = false;
  	let obj = {};
  	this.sets.forEach(function(element){
  		if(element.exercise === set.exercise &&
  		       element.weight === set.weight &&
  			   element.reps === set.reps){
  		  flag = true;
  		  let temp = +element.numSets + +set.numSets;
  		  element.numSets = temp;
  		}
  	});

  	return flag;
  }

  ngOnInit() {
  }
 
}
