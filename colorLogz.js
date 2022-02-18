//region variables
let isDarkmode = false,
    isDisabled = false;

const oldLog = console.log;

//#endregion


export default console.log = (...args) => {
    let color = isDarkmode ? generateDarkModeColorRgb() : generateLightModeColorRgb();
    !isDisabled ? oldLog.apply(console, [`%c${args.join(' ')}`, `color: ${color}`]) : oldLog.apply(console, args);
};

export function initializer(darkmode, shouldDisable) {
    isDarkmode = darkmode ? true : false;
    isDisabled = shouldDisable ? true : false;
};


//generates a random color in dark mode
function generateDarkModeColorRgb() {
    const red = Math.floor((1 + Math.random()) * 256 / 2);
    const green = Math.floor((1 + Math.random()) * 256 / 2);
    const blue = Math.floor((1 + Math.random()) * 256 / 2);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//generates a random color in light mode
function generateLightModeColorRgb() {
    const red = Math.floor(Math.random() * 256 / 2);
    const green = Math.floor(Math.random() * 256 / 2);
    const blue = Math.floor(Math.random() * 256 / 2);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
