const firstStack = (name) => {
    console.log(`this is first stack, ${name}`);
    secondStack(name);
    thirdStack(name);
    console.log('this is the end of the first stack');
}

const secondStack = (name) => {
    console.log(`this is second stack, ${name}`);
}

const thirdStack = (name) => {
    console.log(`this is third stack, ${name}`);
}

firstStack('friko');

// first we called the first stack
// then we called the second stack and it returned
// then we called the third stack and it returned
// then we logged the end of the first stack