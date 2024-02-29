function organizePeopleData(peopleArray) {
    let females = [];
    let males = [];

    for (let person of peopleArray) {
        let [fullName, age, gender] = person.split(", ");
        let [firstName, secondName] = fullName.split(" ");

        let personInfo = {
            "second-name": secondName,
            "age": parseInt(age)
        };

    
        if (gender === "female") {
            females.push({ [firstName]: personInfo });
        } else if (gender === "male") {
            males.push({ [firstName]: personInfo });
        }
    }

    let result = {
        females: females,
        males: males
    };

    return result;
}
//example
let formattedArray = ["Patrick wyne, 30, male", "lil wyne, 32, male", "Eric mimi, 21, female", "Dodos deck, 21, male", "Alian Dwine, 22, male", "Patrick wyne, 33, male", "Patrick wyne, 10, male", "Patrick wyne, 40, male"];
console.log(organizePeopleData(formattedArray));
