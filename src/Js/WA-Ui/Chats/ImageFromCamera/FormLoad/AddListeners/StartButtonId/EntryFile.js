import { StartFunc as clickFunc } from "./clickFunc/Entry.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("StartButtonId");
    // console.log("aaaaaaaa : ", jVarLocalRefreshBSTableId);
    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", clickFunc);
    };
};

export { StartFunc };