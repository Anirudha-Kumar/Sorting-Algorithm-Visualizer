import React from 'react'; 
import './SortingVisualizer.css' 
import {animationsMergeSort} from "./SortingAlgs/MergeSort ";
import {animationsQuickSort} from "./SortingAlgs/QuickSort"; 
import { animationsInsertionSort } from './SortingAlgs/InsertionSort';

let animation_speed = 3; 

export default class SortingVisualizer extends React.Component{

    constructor(props){

        super(props); 

        this.animation_speed = animation_speed;
        this.primary_color = "blue";
        this.secondary_color = "red";

        this.state = {

            arr: []
        }; 
    }

    componentDidMount(){

        this.arrReset(); 
    }

    arrReset(){
        const arr = []; 

        // creates an array of 100 (bars)
        for (let i = 0; i < 100; i++){

            let number = randomInteger(10, 500); 

            arr.push(number); 
        }

        this.setState({arr}); 
    }

    mergeSort(){
        // takes care of the animations 
        const animations = animationsMergeSort(this.state.arr); 
        const length = animations.length;   

        for (let i = 0; i < length; i++){

            const bars = document.getElementsByClassName("bar"); 
            const changeColor = i % 3 !== 2; 

            if (changeColor){

                const [bar_one_index, bar_two_index] = animations[i];
                const bar1_style = bars[bar_one_index].style;
                const bar2_style = bars[bar_two_index].style;
                //terneary operator 
                const color = i % 3 === 0 ? this.secondary_color : this.primary_color;
                setTimeout(() => {
                    bar1_style.backgroundColor = color;
                    bar2_style.backgroundColor = color;
                }, i * this.animation_speed);
              } else {
                setTimeout(() => {
                  const [bar_one_index, newHeight] = animations[i];
                  const bar1_style = bars[bar_one_index].style;

                  bar1_style.height = `${newHeight}px`;
                }, i * this.animation_speed);
              }
        }
        // for loop ends 
    }

    quickSort(){ 
        
        const animations = animationsQuickSort(this.state.arr);

        for (let i = 0; i < animations.length; i++) {
            const color_change =
              animations[i][0] === "comp1" ||
              animations[i][0] === "comp2";
            const arrayBars = document.getElementsByClassName("bar");
            if (color_change) {
              const color =
                animations[i][0] === "comp1"
                  ? this.secondaryColor
                  : this.primaryColor;

              const [, bar_one_index, bar_two_index] = animations[i];
              const bar1_style = arrayBars[bar_one_index].style;
              const bar2_style = arrayBars[bar_two_index].style;

              setTimeout(() => {
                bar1_style.backgroundColor = color;
                bar2_style.backgroundColor = color;
              }, i * this.animation_speed);

            } else {
              const [, barIndex, newHeight] = animations[i];
              if (barIndex === -1) {
                continue;
              }
              const barStyle = arrayBars[barIndex].style;
              setTimeout(() => {
                barStyle.height = `${newHeight}px`;
              }, i * this.animation_speed);
            }
          }
        }

    insertionSort(){

        const animations = animationsInsertionSort(this.state.arr);

        for (let i = 0; i < animations.length; i++) {
            const color_change =
              animations[i][0] === "comp1" ||
              animations[i][0] === "comp2";

            const arrayBars = document.getElementsByClassName("bar");

            if (color_change) {
              const color =
                animations[i][0] === "comp1 "
                  ? this.secondaryColor
                  : this.primaryColor;

              const [, bar_one_index, bar_two_index] = animations[i];
              const bar1_style = arrayBars[bar_one_index].style;
              const bar2_style = arrayBars[bar_two_index].style;

              setTimeout(() => {
                bar1_style.backgroundColor = color;
                bar2_style.backgroundColor = color;
              }, i * this.animation_speed);
            } else {
              const [, barIndex, newHeight] = animations[i];
              const barStyle = arrayBars[barIndex].style;

              setTimeout(() => {
                barStyle.height = `${newHeight}px`;
              }, i * this.animation_speed);
            }
          }
        }     

    render(){

        const {arr} = this.state; 
    
        return (
            <div className = "container">
            {arr.map((value, index) => (

                <div 
                    className = "bar" 
                    key = {index}
                    style = {{height: `${value}px`}}>   
                </div>

            ))}
    <br />
    <button className = "btn" onClick= {() => this.arrReset()}> New Array</button>
    <button className = "btn" onClick= {() => this.mergeSort()}> Merge Sort</button>
    <button className = "btn" onClick= {() => this.quickSort()}> Quick Sort</button>
    <button className = "btn" onClick= {() => this.insertionSort()}> Insertion Sort</button>
            </div>
        ); 
    }
}



function randomInteger(low, high){

    return Math.floor(Math.random() * (high - low + 1) + low); 
}