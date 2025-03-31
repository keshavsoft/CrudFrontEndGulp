import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncFromFetchAsGet } from "./FetchAsGet/entryFile.js";

const StartFunc = () => {
    StartFuncFromFetchAsGet().then();
    StartFuncAddListeners();
};

export { StartFunc };
