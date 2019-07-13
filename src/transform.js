const groupAdultsByAgeRange = (people) => {
    //Filtering people under the age of 18
    people = people.filter((person)=> person.age >= 18)

    //Empty array results in an empty object
    if (people.length === 0){
        return people = {}
    }

    //Groups arrays of people by age
    const one = people.filter((person) => person.age <= 20)
    const two = people.filter((person) => person.age > 20 && person.age <= 30)
    const three = people.filter((person) => person.age > 30 && person.age <= 40)
    const four = people.filter((person) => person.age > 40 && person.age <= 50)
    const five = people.filter((person) => person.age > 50)
    
    const result = {'20 and younger': one, '21-30': two, '31-40': three, '41-50': four, '51 and older': five}

    //Only contains non-empty groups
    if (one.length === 0){
        delete result['20 and younger']
    }
    if (two.length === 0){
        delete result['21-30']
    }
    if (three.length === 0){
        delete result['31-40']
    }
    if (four.length === 0){
        delete result['41-50']
    }
    if (five.length === 0){
        delete result['51 and older']
    }

    return result

}

module.exports = {groupAdultsByAgeRange}