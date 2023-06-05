const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

const data = JSON.parse(jsonString);
const list = data.list;

const result = Array.from(list).map(student => {
    return {
        name: student.name,
        age: student.age,
        prof: student.prof
    }
})

console.log('result', result);