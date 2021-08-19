
let input = prompt('What would you like to do?');
const todos=[];

while(input !=='q' && input !== 'quit'){
    if(input === 'list'){
        console.log('***************');
        for(let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***************');
    } else if(input === 'new'){
        const newToDo = prompt('Ok, what is the new todo?');
        todos.push(newToDo);
        console.log(`${newToDo} added to the list!`);
    } else if(input ==='delete'){
        const index = parseInt(prompt('Ok, enter an index to delete!'));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else{
            console.log('Unknown index');
        }
    }
    input = prompt('What would you like to do?');
    // while(input==='new'){
    //     let item=prompt("Please enter list items");
    //     todos.push(item);
    //     input = prompt("What would you like to do...?");
    // }
    // if(input==='listIt'){
    //     console.log('************************');
    //     for(let i=0; i<todos.length; i++){
    //         console.log(`${i}: ${todos[i]}`);
    //     }
    //     console.log('************************');
    //     input = prompt("What would you like to do...?");
    // }
    // if(input==='delete'){
    //     console.log('************************');
    //     let index=prompt('Please enter index no.')
    //     todos.splice(index,1);
    //     console.log(`${index}: DELETED !`);
    //     input = prompt("What would you like to do...?");
    // }
    
    
}
console.log("OK ! YOU QUIT THE APP.");