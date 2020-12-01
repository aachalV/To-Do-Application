export const createCustomError = (name, message) => {
    const custom = new Error();
    custom.name = name;
    custom.message = message;

    window.alert(custom.name+" : "+custom.message);
    return custom;
    };
