const groupAdultsByAgeRange = (people) => {
    const sorted = people.filter((person)=> person.age > 18)
    if (people.length === 0){
        return people = {}
    }
    // const result = {
    //     "20 and younger": [],
    //     "21-30": [],
    //     "31-40": [],
    //     "41-50": [],
    //     "51 and older": []
    // }

    const one = sorted.filter((person) => person.age <=20)
    const two = sorted.filter((person) => person.age >20 && person.age <=30)
    const three = sorted.filter((person) => person.age >30 && person.age <=40)
    const four = sorted.filter((person) => person.age >40 && person.age <=50)
    const five = sorted.filter((person) => person.age >50)
    //const result = {"20 and younger": [one], "21-30": [two], "31-40": [three], "41-50": [four], "51 and older": [five]}
    const result = {}

     if (one.length > 0){
        result = result{'20 and younger': one}
    }
    if (two.length > 0){
        result.push({'21-30': two})
    }
    if (three.length > 0){
        result.push({'31-40': three})
    }
    if (four.length > 0){
        result.push({'41-50': four})
    }
    if (five.length > 0){
        result.push({'51 and older': five})
    }
    
    // const sorted = groupedOver18.reduce((older, currentPerson) => {
    //     if(older.length) {
    //         var temp = [];
    //         while(older[older.length -1].age > currentPerson.age) {
    //             temp.push(older.pop())
    //         } 
    //         older.push(currentPerson)
    //         while(temp.length) {
    //             older.push(temp.pop())
    //         }
    //     } else {
    //         older.push(currentPerson) 
    //     }
    //     return older;
    // }, [])

    
    // result["20 and younger"] = sorted.filter((person) => person.age <= 20)
    // result["21-30"] = sorted.filter((person) => person.age >20 && person.age <= 30)
    // result["31-40"] = sorted.filter((person) => person.age <= 40)
    // result["41-50"] = sorted.filter((person) => person.age >40 && person.age <= 50)
    // result["51 and older"] = sorted.filter((person) => person.age > 50)

    // result = result.filter((person) => {
    //     return result.reduce((noValue, currentPerson) => {
    //         if (currentPerson){
    //             return noValue
    //         }
    //     },0)
    // })
    // if (result["20 and younger"]===[]){
    //     delete result["20 and younger"]
    // }
    // if (result["21-30"]===[]){
    //     delete result["21-30"]
    // }
    // if (result["31-40"]===[]){
    //     delete result["31-40"]
    // }
    // if (result["41-50"]===[]){
    //     delete result["41-50"]
    // }
    // if (result["51 and older"]===[]){
    //     delete result["51 and older"]
    // }

    console.log('probando***************************' +  result)
    //return result

    console.log('HOLAAAAAAAAAAAAAAAAAAAA' + result["31-40"].length)
    
    
}
groupAdultsByAgeRange([{name: "Anna", age: 31}, {name: "John", age: 32}, {name: "Hank", age: 60}])

groupAdultsByAgeRange([
      { name: "pete", age: 10 },
      { name: "dove", age: 17 },
      { name: "dave", age: 18 },
      { name: "hall", age: 19 },
      { name: "donn", age: 20 },
      { name: "trey", age: 21 },
      { name: "hann", age: 29 },
      { name: "chew", age: 30 },
      { name: "cloe", age: 31 },
      { name: "dart", age: 39 },
      { name: "this", age: 40 },
      { name: "dame", age: 41 },
      { name: "henk", age: 49 },
      { name: "anna", age: 50 },
      { name: "olga", age: 51 },
      { name: "bert", age: 52 },
      { name: "oldd", age: 120 },
    ])