class AirCoolingCycle {
    constructor(initialTemp, pipeLength, pipeDiameter, airFlowRate) {
        this.initialTemp = initialTemp;
        this.pipeLength = pipeLength;
        this.pipeDiameter = pipeDiameter;
        this.airFlowRate = airFlowRate;
        this.temp = initialTemp;
    }

    coolAir() {
        // Simulate heat loss and expansion
        const tempDrop = 0.1 * (this.pipeLength / this.pipeDiameter) * Math.sqrt(this.airFlowRate);
        this.temp -= tempDrop;
        return this.temp;
    }

    cycle(numCycles) {
        const temps = [];
        for (let i = 0; i < numCycles; i++) {
            const temp = this.coolAir();
            temps.push(temp);
            console.log(`Cycle ${i + 1}: Temperature = ${temp.toFixed(2)}°C`);
        }
        return temps;
    }
}

// Example usage
const cycle = new AirCoolingCycle(100, 4, 0.4, 5);
const numCycles = 50;
const temps = cycle.cycle(numCycles);