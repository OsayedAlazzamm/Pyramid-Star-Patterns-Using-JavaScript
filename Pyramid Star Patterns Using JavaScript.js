
function PyramidStarPattern(){
    let MaxStars=7;

    for(let i = 1; i <= MaxStars; i++){
        console.log("*".repeat(i));
    }
    for(let i = MaxStars-1; i >= 1; i--){
        console.log("*".repeat(i));
    }
}


PyramidStarPattern();