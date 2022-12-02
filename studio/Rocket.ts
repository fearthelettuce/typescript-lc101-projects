import { Payload } from './Payload'
import { Cargo } from './Cargo'
import {Astronaut} from './Astronaut'
export class Rocket {
   // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = []
    astronauts: Astronaut[] = []
    constructor(name: string, totalCapacityKg : number) {
        this.totalCapacityKg  = totalCapacityKg ;
        this.name = name;

    }
    sumMass(items: Payload[]): number {
        let totalMass: number = 0;
        for (let item of items) {
            totalMass += item.massKg;
        }
        return totalMass;
    }
    currentMassKg(): number {
        let totalMass: number = 0;
        // let cargoMass: number = this.cargoItems.map(a => a.massKg);
        // console.log(cargoMass)
        let cargoMass = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts)
        console.log(cargoMass)
        return cargoMass
    }
    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
            return true
        }
        return false
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
             this.astronauts.push(astronaut)
            return true   
        }
        return false
    }

}