const getRnadomNam = () => {
    let randomNumber = Math.random().toString();
    return randomNumber.slice(randomNumber.indexOf('.') + 1) + new Date().getTime();
}

module.exports = getRnadomNam;