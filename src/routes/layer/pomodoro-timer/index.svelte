<script context="module" lang="ts">
  export const srr = false;
  import { getSetting } from "$lib/GriffinBotStore";

  // TODO: Find a way to load in all the props from the settings.
  export async function load() {
    console.log("Module Load");
    let propsPromise = new Promise (async (resolve) => {
      resolve(await getSetting("countdownColor"));
      
    })
    // {props:{countdownColor}}
    propsPromise.then((value)=>{return {props:{value}}})
    //TODO: Cant get this freakin thing to get the setting before rendering.
  }
</script>

<script lang="ts">
  
  export let countdownColor: string;
  const countupColor: string  = "#000"
  const refreshRate: number = 1000;
  // debugger
  console.log("CountdownColor: ", countdownColor);
  
  
  let percentage: number = 100;
  let color: string = countdownColor;

  let refreshTicker = null;

  let startTime: number;
  let endTime: number;

  // Use this to start a pomodoro timer.
  export function startTimer (timerLength: number, countUp?: boolean) {
    startTime = Date.now();
    endTime = startTime + (timerLength * 60 * 1000);

    
    refreshTicker = setInterval(()=>{
      color = countUp ? countupColor : countdownColor;
      if(countUp) {
        percentage = 100 - percentageLeft(startTime, endTime);
      }
      else{
        percentage = percentageLeft(startTime, endTime);
      }
      

      if(percentage >= 100){
        stopTimer();
        percentage = 100;
      }
      if(percentage <= 0)
      {
        stopTimer();
        percentage = 0;
      }
    }, refreshRate);
  }

  export function stopTimer () {
    startTime = 0;
    endTime = 0;
    percentage = 100;
    color = countdownColor;

    if(refreshTicker) {
      clearInterval(refreshTicker);
    }
  }

  function percentageLeft (startTime, endTime) : number{
    let timeNow = Date.now();
    let percent = 100 - ((timeNow - startTime) / (endTime - startTime) * 100);

    // console.log(percent);

    return percent;
  }

  // startTimer((25), true);
  
</script>

<div id="timer" style="--percentage: {percentage}%; --color: {color}">&nbsp;</div>

<style>
  #timer {
    display: inline-block;
    max-width: 100%;
    width: var(--percentage);
    background-color: var(--color);
    height: 100%;
    padding-top: 50%;
  }
</style>

