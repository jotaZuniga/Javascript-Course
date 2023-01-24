// Ejercicio 1
interface IPerson {
    name: string;
    age: number;
    profession: string;
}

type customType = string | number;

const getPersonDetails = (person: IPerson): customType[] => {
    return Object.values(person);
}

const me: IPerson = {
    name: 'Jose Manuel',
    age: 35,
    profession: 'Sr Sofware Developer',
};

// console.log(getPersonDetails(me));

// Ejercicio 2
function sumOrConcatenate(arg1: customType, arg2: customType): customType {
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return `${arg1} - ${arg2}`;
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number' ) {
        return arg1 + arg2;
    } else {
        return `${arg1}:${arg2}`;
    }
}


const resultSum = sumOrConcatenate(6, 9);
const resultConcat = sumOrConcatenate('hola','jose manuel');
const resultCombine = sumOrConcatenate(2023, 'This year');

/*console.log('Sum:', resultSum);
console.log('Concat', resultConcat);
console.log('Combine', resultCombine);*/

// Ejercicio 3
interface IBase {
    tires: number;
    turnOnEngine: () => void;
}
interface ICar extends IBase {
    pressPedal: () => void;
}

interface IMotorcycle extends IBase {
    openThrottle: () => void;
}

type Vehicle = ICar | IMotorcycle;

const vehicleAction = (vehicle: Vehicle): any => {
    vehicle.turnOnEngine();

    if ("pressPedal" in vehicle) {
        return vehicle.pressPedal();
    }

    return vehicle.openThrottle();
}

const myCar: ICar = {
    tires: 4,
    turnOnEngine: () => {
        console.log(' Car engine is ON');
    },
    pressPedal: () => {
        console.log('Pedal pressed');
    }
}

const myMoto: IMotorcycle = {
    tires: 4,
    turnOnEngine: () => {
        console.log(' Moto engine is ON');
    },
    openThrottle: () => {
        console.log(' Throttle');
    }
}

// vehicleAction(myCar);
// vehicleAction(myMoto);

// Ejercicio 4
function removeFirstEntry<customType> (list: customType[]): customType[] {
    return list.slice(1);
}

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
const newUnsupportedArray = removeFirstEntry(unsupportedArray);

console.log(newStrArray);
console.log(newNumArray);
console.log(newMixedArray);
console.log(newUnsupportedArray);
