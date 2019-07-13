const superagent = require('superagent');

const getTatooineResidents = () => {
    

    return superagent
      .get('https://swapi.co/api/planets/1/')
      .then(res => res.body.residents)
      .catch(err => console.log(err.message))
}


const promiseMeAString = (promiseMe) => {
    return new Promise((resolveFunction, rejectFunction) => {
        if (promiseMe === 'I Promise!'){
            resolveFunction('You kept the Promise!')
        } else {
            rejectFunction('You have failed me!')
        }
    })
}


module.exports = {
    getTatooineResidents,
    promiseMeAString,
}