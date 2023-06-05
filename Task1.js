const parser = new DOMParser();
const xmlString = `
    <list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>
`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = studentNode.querySelector("name");
const firstNode = nameNode.querySelector("first");
const secondNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");

const langAttr = nameNode.getAttribute('lang');

const result = Array.from(listNode.querySelectorAll('student')).map(student => {
    return {
        name: `${student.querySelector('first').textContent} ${student.querySelector('second').textContent}`,
        age: Number(student.querySelector('age').textContent),
        prof: student.querySelector('prof').textContent,
        lang: langAttr
    }
})

console.log('result', result);


