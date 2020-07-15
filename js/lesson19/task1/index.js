export const vehicle = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};
export const ship = {
    name: 'Argo',
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
    }
}

Object.setPrototypeOf(ship, vehicle);

ship.move()
ship.stop()