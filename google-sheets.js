// Replace this with the Web App URL after deploying Code.gs.
const GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzELH_KFcubwdNTBr_Rhqky2g0avdrD9653WrIbtg5udG6oHzyS3TBrp3ST5X5L6JxI/exec";

function sendQuizResultToGoogleSheets(payload) {
    return fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(payload)
    });
}
