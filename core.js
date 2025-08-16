let functionExample = function () {
    return "This is a regular function";
};

let asyncFunctionExample = async function () {
    return "This is a regular function";
};

let arrowFunctionExample = () => "This is an arrow function";

class MyClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}!`;
    }
}

let moduleExample = {
    myFunction: function () {
        return "This is a module function";
    }
};

let dataTypes = new Map();

// string
dataTypes.set("string", "This is a string");

// number
dataTypes.set("integer", 42);
dataTypes.set("float", 3.14);
dataTypes.set("infinity", Infinity);
dataTypes.set("negativeInfinity", -Infinity);
dataTypes.set("NaN", NaN);

// bigint
dataTypes.set("bigint", BigInt("12345678901234567890"));

// boolean
dataTypes.set("boolean", true);

// object
dataTypes.set("object", { key: "value" });
dataTypes.set("array", [1, 2, 3]);
dataTypes.set("null", null);
dataTypes.set("date", new Date());
dataTypes.set("regex", /abc/);
dataTypes.set("map", new Map());
dataTypes.set("set", new Set());
dataTypes.set("error", new Error("This is an error"));
dataTypes.set("promise", Promise.resolve("This is a promise"));
dataTypes.set("module", moduleExample);
dataTypes.set("classInstance", new MyClass("John Doe"));

// undefined
dataTypes.set("undefined", undefined);

// function 
dataTypes.set("function", functionExample);
dataTypes.set("asyncFunction", asyncFunctionExample);
dataTypes.set("arrowFunction", arrowFunctionExample);
dataTypes.set("class", MyClass);
dataTypes.set("classMethod", MyClass.prototype.greet);
dataTypes.set("instanceMethod", new MyClass("Jane Doe").greet);


console.log("Data types and their values:");

dataTypes.forEach((value, key) => {
    console.log(`${key}: ${value} typeof ${typeof value}`);
});

// todo: symbol
