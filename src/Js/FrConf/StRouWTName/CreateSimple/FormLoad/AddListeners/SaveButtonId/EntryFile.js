import { StartFunc as StartFuncFuncToRun } from "./FetchFromFuncs/entryFile.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("SaveButtonId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncFuncToRun);
    };
};

export { StartFunc };