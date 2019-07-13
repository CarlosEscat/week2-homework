

const groupAdultsByAgeRange = (people) => {
    if (people.length === 0){
        return people = {}
    }

    //Filtering people under the age of 18
    const sorted = people.filter((person)=> person.age >= 18)
    

    //Groups arrays of people by age
    const one = sorted.filter((person) => person.age <= 20)
    const two = sorted.filter((person) => person.age > 20 && person.age <= 30)
    const three = sorted.filter((person) => person.age > 30 && person.age <= 40)
    const four = sorted.filter((person) => person.age > 40 && person.age <= 50)
    const five = sorted.filter((person) => person.age > 50)
    
    const result = {'20 and younger': one, '21-30': two, '31-40': three, '41-50': four, '51 and older': five}
    
    if (result['20 and younger'].one ===[]){
        delete result['20 and younger'].one
    }
    if (result.two ===[]){
        delete result['21-30'].two
    }
    if (result.three ===[]){
        delete result['31-40'].three
    }
    if (result.four ===[]){
        delete result['41-50'].four
    }
    if (result.five ===[]){
        delete result['51 and older'].five
    }
    return result

   
    // const groupedOver18 = people.filter((person)=> person.age > 18)
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

    
    // result['20 and younger'] = groupedOver18.filter((person) => person.age <= 20)
    // result['21-30'] = groupedOver18.filter((person) => person.age >20 && person.age <= 30)
    // result['31-40'] = groupedOver18.filter((person) => person.age >30 && person.age <= 40)
    // result['41-50'] = groupedOver18.filter((person) => person.age >40 && person.age <= 50)
    // result['51 and older'] = groupedOver18.filter((person) => person.age > 50)

    

    //console.log('probando***************************' +  groupedOver18)

    //console.log('HOLAAAAAAAAAAAAAAAAAAAA' + x)
    
    
}

module.exports = {groupAdultsByAgeRange}