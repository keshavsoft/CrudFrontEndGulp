import { StartFunc as StartFuncAddListeners } from "./AddListeners/entryFile.js";
// import { StartFunc as StartFuncFromDOMContentLoaded } from "./DOMContentLoaded.js";

const StartFunc = async () => {
    // StartFuncFromDOMContentLoaded();
    StartFuncAddListeners();
};

export { StartFunc };
