
function receivesAFunction(callback) {
    return callback();
}

receivesAFunction(function() {console.log('I functioned!')});

function returnsANamedFunction() {
    return function aNamedFunction () {
        console.log('I am a named function!');
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('I am an anonymous function!');
    }
}

/*
function aNamedFunction() {
    return console.log("I am a named function!");
}

function returnsANamedFunction() {
    return aNamedFunction();
}

function returnsAnAnonymousFunction => console.log("I am an anonymous function!");



/*
https://learning.flatironschool.com/courses/3168/assignments/118518?module_item_id=244591

function runFiveMiles() {
    console.log('Go for a five-mile run');
  } 
  
  function liftWeights() {
    console.log('Pump iron');
  }
  
  function swimFortyLaps() {
    console.log('Swim 40 laps');
  } 
  
  function exerciseRoutine(postRunActivity) {
    runFileMiles();
    postRunActivity();
  
  
  function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function Tuesday() {
    exerciseRoutine(swimFortyLaps);
  }
  
  function Wednesday() {
    exerciseRoutine(runFiveMiles);
  }
  
  function Thursday() {
    exerciseRoutine(liftWeights);
  }
  
  function Friday() {
    exerciseroutine(swimFortyLaps);
  } 
  
  }
  
  
  
  