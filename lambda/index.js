/**
 * 
 * @param {*} event 
 */
exports.handler =  async function(event) {
    console.log("Lambda was called! Event: \n" + JSON.stringify(event, null, 2))
}