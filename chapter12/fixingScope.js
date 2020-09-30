// Add a special form set, similar to define, which gives a binding a new value, updating the binding in an outer scope if it doesn’t already exist in the inner scope. If the binding is not defined at all, throw a ReferenceError (another standard error type).

specialForms.set = (args, scope) => {
    let value = evaluate(args[1], scope);

    function loopScope(scope) {
        if (!Object.getPrototypeOf(scope)) throw new ReferenceError(`${args[0].name} is not defined`);

        const prototype = Object.getPrototypeOf(scope);
        const hasPro = Object.prototype.hasOwnProperty.call(prototype, args[0].name)

        if (hasPro) {
            prototype[args[0].name] = value;
            return value;
        } else {
            return loopScope(prototype);
        }
    };
    return loopScope(scope);
};

run(`
  do(define(x, 4),
     define(setx, fun(val, set(x, val))),
     setx(50),
     print(x))
  `);
// → 50
run(`set(quux, true)`);
  // → Some kind of ReferenceError