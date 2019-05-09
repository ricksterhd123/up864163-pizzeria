let jsonString = '[{"id": 103, "name": "Ricky", "doctor": "foo", "room": 404, "time": 1900},{"id": 103, "name": "matt.y", "doctor": "BAR", "room": 402, "time": 1500}]';

let obj = JSON.parse(jsonString);

for (let i = 0; i < obj.length; i++)
{
    console.log(obj[i].name);
}

