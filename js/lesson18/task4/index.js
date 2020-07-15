'use strict';
export function saveCalls(func) {
    let calls = [];
    withMemory.calls = calls;

    function withMemory(...newCall) {
        calls.push(newCall);
        return func.call(this, [func]);
    };

    return withMemory;
}