'use strict';

function bSortarr(arrIn) {
    // mit svenskt chars åöä for att kunna skriva i svenska
    // fixed arr
    let arr = (this.arrIn) || [3, 4, 2, 17, 6, 4, 9, 77, 42, 11];
    let arrAccum = [];

    // byte varde index1 och index2
    let byte = function(arr, index1, index2) {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    };

    // retur arr
    this.arr = function() {
        return arr;
    };

    this.bubblaSort = function() {
        console.log('[----------------------------------]');
        console.log(`  Start arr [${arr}]`);
        console.log('[----------------------------------]');
        let length = arr.length; // sätta storlek av längd

        for (let i = 0; i < length; i++) { // yttre slinga
            console.log(`---> Outer Loop Iteration ${i} <---`);
            console.log('comparing:');
            for (let j = 0; j < length - 1; j++) { // inre slinga
                console.log(`${arr[j]} med ${arr[j+1]}`);
                if (arr[j] > arr[j + 1]) { // börja jämförelse
                    console.log(`byte ${arr[j]} med ${arr[j+1]}`);
                    byte(arr, j, j + 1); // byte funktion
                    console.log(`status: [${arr}]`);
                } // slut jämförelse
            } // slut inre slinga
        } // slut yttre slinga
        console.log('[----------------------------------]');
        console.log(`  this is the end: ${this.arr()}`);
        console.log('[----------------------------------]');
        return arr;
    }
};


// objektet funkar med och utan input array
let arr = new bSortarr([9, 8, 7, 6, 5, 4, 3, 2]);
arr.bubblaSort();
