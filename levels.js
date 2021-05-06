function levelTypeSet(){
    switch(level){
        case 1:
            obstacleTypes.push('Lava', 'Monkeys');
            break
        case 3:
            obstacleTypes.push('Obstacles');
            break
        case 5:
            obstacleTypes = ['Monkeys', 'Obstacles'];
        case 6:
            obstacleTypes = ['Obstacles', 'Snakes'];
        case 7:
            obstacleTypes.push('Lava');
        case 8:
            obstacleTypes = ['Arrows', 'Balls', 'Riddle'];
    }
}
function levelPlay(num){
    var typ = obstacleTypes[num];
    if(typ === "Lava"){
        //Insert code for lava, might add different parameters
    }
    else if(typ === "Monkeys"){
        //Insert code for monkeys
    }
    else if(typ === "Obstacles"){
        //Insert code for obstacles
    }
    else if(typ === "Snakes"){
        //Insert code for snakes
    }
    else if(typ === "Arrows"){
        //Insert code for arrows
    }
    else if(typ === "Balls"){
        //Insert code for balls
    }
    else{
        //Insert code for the riddle
    }
}