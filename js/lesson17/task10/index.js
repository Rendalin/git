function bind(func, context) {
    const newBind = [].slice.call(arguments, 2);
    return function() {
        const newFunc = [].slice.call(arguments)
        return func.apply(context, newBind.concat(newFunc));
    };
};

export { bind };