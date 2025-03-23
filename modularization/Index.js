/*
✅ Local Module → kode yang kamu buat sendiri.
✅ Core Module → bawaan Node.js, tinggal pakai.
✅ Third Party Module → harus di-install pakai NPM.
*/

const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fighting = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        tiger.growl();
        return console.log(`the tiger strength is ${tiger.strength} while the wolf strength is ${wolf.strength}`);
    }

    if (tiger.strength < wolf.strength) {
        wolf.howl();

        return console.log(` the wolf strength is ${wolf.strength} while the tiger strength is ${tiger.strength}`);
    }

    console.log('Tiger and Wolf Have same strength')
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
