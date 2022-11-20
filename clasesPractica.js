class Counter {

    constructor(responsible) {

        this.responsible = responsible
        this.countLocal = 0

    }

    static countGlobal = 0 

    getResponsible = () => {
        return this.responsible
    }

    count = () => {
        this.countLocal++
        Counter.countGlobal++

    }

    getCountLocal = () => {return this.countLocal}
    getCountGLobal = () => {return this.countGlobal}


}

const joaquin = new Counter ('Joaquin')
const martin = new Counter ('Martin')
const pilar = new Counter ('Pilar') 

joaquin.count()
martin.count()
pilar.count()
joaquin.count()
joaquin.count()
martin.count()
martin.count()
martin.count()
pilar.count()

console.log(`${joaquin.getResponsible()}: ${joaquin.getCountLocal()}`);
console.log(`${pilar.getResponsible()}: ${pilar.getCountLocal()}`);
console.log(`${martin.getResponsible()}: ${martin.getCountLocal()}`);



console.log(Counter.countGlobal)