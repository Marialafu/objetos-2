// EJERCICIOS FÁCILES

// # Ejercicios de Objetos

// ## Lectura

// 1️⃣ Saludar a través un objeto con nombre y ciudad; luego mostrar un mensaje de bienvenida en español.

// Ejemplo entrada: {
// name: "Camila",
// city: "San Francisco"
// }

// Ejemplo salida: "Hola Camila, has llegado a San Francisco."

const sayHi = info => {
  console.log(`Hola ${info.name}, has llegado a ${info.city}`);
};
sayHi({
  name: 'Camila',
  city: 'San Francisco'
});

// 2️⃣ Verificar la mayoría de edad.

// Ejemplo de entrada:
// verificateUser({
// name: "Abby",
// age: 17
// });

// Ejemplo de salida:"Abby es menor de edad" o "Abby es mayor de edad"

const validateYearsOld = user => {
  user.age < 18
    ? console.log(`${user.name} es menor de edad`)
    : console.log(`${user.name} es mayor de edad`);
};
validateYearsOld({
  name: 'Abby',
  age: 18
});

// 3️⃣ Macarena y los promedios:
// Array de objetos student con name y grades (array de números). Calcular y mostrar el promedio.

// Ejemplo de entrada: calculateStudentAverage(
// [{
// name: "Bego",
// grades: [8, 9, 10]
// },
// {
// name: "Abby",
// grades: [8, 9, 10]
// }
// ]);

// Ejemplo de salida:
// "El promedio de Bego es 9"
// "El promedio de Abby es 9"

const calculateAverage = students => {
  students.forEach(student => {
    const gradesArray = student.grades;
    const sumGrades = gradesArray.reduce((acc, grades) => {
      return acc + grades;
    });
    const averageGrades = sumGrades / student.grades.length;
    console.log(`El promedio de ${student.name} es ${averageGrades}`);
  });
};
calculateAverage([
  {
    name: 'Bego',
    grades: [8, 9, 10]
  },
  {
    name: 'Abby',
    grades: [7, 8, 9]
  }
]);

// ## Lectura y creación

// 4️⃣ Macarena y la clasificación de números:
// Crea una función classifyNumbers que reciba un objeto con:

// numbers: Array de números a clasificar.

// Debe imprimir un objeto con dos arrays: números pares e impares.

// Ejemplo de entrada: classifyNumbers({numbers: [1, 2, 3, 4, 5, 6]});

// Ejemplo de salida: {result: { even: [2, 4, 6], odd: [1, 3, 5] }}

const classifyNumbers = data => {
  const numbersList = data.numbers;

  const result = {
    even: [],
    odd: []
  };

  numbersList.forEach(number =>
    number % 2 === 0 ? result.even.push(number) : result.odd.push(number)
  );

  console.log(result);
};
classifyNumbers({ numbers: [1, 2, 3, 4, 5, 6] });

// 5️⃣ Camila y la clasificación de edades:

// Debe imprimir un objeto con la clasificación en tres arrays: children, teens y adults.

// Ejemplo de entrada: classifyAges({ages: [5, 12, 15, 19, 32, 7, 17]});

// Ejemplo de salida:{ result: { children: [5, 12, 7], teens: [15, 17], adults: [19, 32] }}

const classifyAges = users => {
  const agesList = users.ages;

  const result = {
    children: [],
    teens: [],
    adults: []
  };

  agesList.forEach(age => {
    if (age < 15) {
      result.children.push(age);
    } else if (age < 18) {
      result.teens.push(age);
    } else if (age > 18) {
      result.adults.push(age);
    }
  });

  console.log(result);
};
classifyAges({ ages: [5, 12, 15, 19, 32, 7, 17] });

// 6️⃣ Cambiar el estado de un semáforo. Objeto con state, elije uno de los tres ("red", "yellow", "green"). Pasar de red a green, luego a yellow, y de yellow a red, cíclicamente.

// Ejemplo de entrada: changeTrafficLight({state: 'red'});
// Ejemplo de salida: "El semáforo cambió a yellow"

// Actualizar la propiedad state según el color actual y mostrar: "El semáforo cambió a ..."

const changeTrafficLight = light => {
  if (light.state === 'red') {
    light.state = 'green';
  } else if (light.state === 'green') {
    light.state = 'yellow';
  } else if (light.state === 'yellow') {
    light.state = 'red';
  }

  console.log(`El semáforo cambió a ${light.state}`);
};
changeTrafficLight({ state: 'red' });

// 7️⃣ Bego y la combinación de listas:
// Crea una función combineLists que reciba un objeto listCombiner con:

// names: Array de nombres.

// surnames: Array de apellidos.

// Debe devolver un objeto con todas las combinaciones posibles entre nombres y apellidos.

// Ejemplo de entrada: combineLists({names: ['Alice', 'Bob'], surnames: ['Smith', 'Johnson']});

// Ejemplo de salida: {combinations: [ 'Alice Smith', 'Alice Johnson', 'Bob Smith', 'Bob Johnson' ]}

const combineLists = users => {
  const combinations = [];

  const namesList = users.names.map(name => {
    const surnamesList = users.surname.map(surname => {
      combinations.push(surname);
    });
  });

  console.log(combinations);
};
combineLists({ names: ['Alice', 'Bob'], surnames: ['Smith', 'Johnson'] });

// EJERCICIOS DIFICILES

// ### Ejercicios de Objetos con Arrays, Bucles, Strings, Condicionales y Lógica

// 1️⃣ Macarena y la validación de contraseñas:
// Crea una función validatePassword que reciba un objeto con una propiedad password (string) y devuelva un objeto con las propiedades isValid (boolean) y errors (array de strings) que indiquen si la contraseña cumple con los siguientes criterios:

// Longitud mínima de 8 caracteres

// Al menos una letra mayúscula

// Al menos una letra minúscula

// Al menos un número

// Ejemplo entrada: { password: "abc123" }

// Ejemplo salida: {
// isValid: false,
// errors: [
// "Password must be at least 8 characters long.",
// "Password must contain at least one uppercase letter.",
// "Password must contain at least one lowercase letter.",
// "Password must contain at least one number."
// ]
// }

const userData = {
  password: '',
  isValid: false,
  errors: []
};

const validatePassword = password => {
  if (password.length >= 8) {
    userData.isValid = true;
  } else {
    userData.errors.push('Password must be at least 8 characters long.');
  }
  userData.password = password;
  console.log(userData);
};

validatePassword('1Contraghghghgh');

// 2️⃣ Sabrina y el sistema de evaluación de estudiantes:
// Crea una función evaluateStudents que reciba un objeto que representa una asignatura (subject). Este objeto debe tener las propiedades:

// subjectName: El nombre de la asignatura (string).

// teacher: El nombre del profesor a cargo (string).

// students: Un objeto que contiene a los estudiantes como claves y sus notas (grades) como valores.

// La función debe imprimir un objeto con la información de los estudiantes aprobados (note >= 5) junto con el nombre de la asignatura y el profesor.

// // Ejemplo de entrada:
// evaluateStudents({
// subjectName: "Web Development",
// teacher: "Mr. Dios",
// students: {
// Macarena: 8,
// Bego: 4,
// Abby: 6,
// Camila: 3,
// Sabrina:5
// }
// });

// // Ejemplo de salida:
// {
// subjectName: "Mathematics",
// teacher: "Mr. Johnson",
// passedStudents: [ Macarena, Abby, Sabrina ]
// }

const genericInfoAboutSubject = {
  subjectName: 'Web Development',
  teacher: 'Adrián',
  students: {
    Macarena: 8,
    Bego: 4,
    Abby: 6,
    Camila: 3,
    Sabrina: 5
  }
};

// 3️⃣ Abby y la traducción de palabras:
// Crea una función translateWords que reciba un objeto translationTask con:

// projectName: Nombre del proyecto.

// translator: Nombre del traductor.

// words: Array de palabras a traducir.

// dictionary: Objeto que mapea palabras originales a su traducción.

// Debe devolver un objeto con el nombre del proyecto, el traductor y un array de palabras traducidas.

// // Ejemplo de entrada:
// translateWords({
// projectName: "Basic Translator",
// translator: "Abby",
// words: ['hello', 'world'],
// dictionary: { hello: 'hola', world: 'mundo' }
// });

// // Ejemplo de salida:
// {
// projectName: "Basic Translator",
// translator: "Abby",
// translated: [ 'hola', 'mundo' ]
// }

const translateWords = translationTask => {
  for (let word of translationTask.words) {
    word = translationTask.dictionary.hello;
    console.log(word);
  }
};
translateWords({
  projectName: 'Basic Translator',
  translator: 'Abby',
  words: ['hello', 'world'],
  dictionary: { hello: 'hola', world: 'mundo' }
});

// 4️⃣ Macarena y la clasificación de números:
// Crea una función classifyNumbers que reciba un objeto numberAnalysis con:

// taskName: Nombre de la tarea.

// analyst: Nombre del analista.

// numbers: Array de números a clasificar.

// Debe imprimir un objeto con la tarea, el analista y dos arrays: números pares e impares.

// // Ejemplo de entrada:
// classifyNumbers({
// taskName: "Number Classification",
// analyst: "Macarena",
// numbers: [1, 2, 3, 4, 5, 6]
// });

// // Ejemplo de salida:
// {
// taskName: "Number Classification",
// analyst: "Macarena",
// result: { even: [2, 4, 6], odd: [1, 3, 5] }
// }

// 5️⃣ Camila y la clasificación de edades:
// Crea una función classifyAges que reciba un objeto ageClassification con:

// projectName: Nombre del proyecto.

// researcher: Nombre del investigador.

// ages: Array de edades a clasificar.

// Debe imprimir un objeto con la clasificación en tres arrays: children, teens y adults.

// // Ejemplo de entrada:
// classifyAges({
// projectName: "Age Classifier",
// researcher: "Camila",
// ages: [5, 12, 15, 19, 32, 7, 17]
// });

// // Ejemplo de salida:
// {
// projectName: "Age Classifier",
// researcher: "Camila",
// result: { children: [5, 12, 7], teens: [15, 17], adults: [19, 32] }
// }

// 6️⃣ Macarena y la creación de perfiles aleatorios:
// Crea una función generateProfiles que reciba un objeto profileTask con:

// taskName: Nombre de la tarea.

// creator: Nombre del creador.

// count: Número de perfiles a generar.

// Debe devolver un objeto con los perfiles generados, donde cada perfil tiene un id único (número aleatorio entre 1000 y 9999) y un username generado combinando una vocal, una consonante y un número aleatorio entre 1 y 99.

// // Ejemplo de entrada:
// generateProfiles({
// taskName: "Profile Generation",
// creator: "Macarena",
// count: 5
// });

// // Ejemplo de salida:
// {
// taskName: "Profile Generation",
// creator: "Macarena",
// profiles: [
// { id: 4532, username: 'PA12' },
// { id: 8753, username: 'LO35' },
// { id: 9123, username: 'KE78' },
// { id: 3264, username: 'BU99' },
// { id: 1742, username: 'PI23' }
// ]
// }

// 7️⃣ Bego y la combinación de listas:
// Crea una función combineLists que reciba un objeto listCombiner con:

// project: Nombre del proyecto.

// owner: Nombre del responsable.

// names: Array de nombres.

// surnames: Array de apellidos.

// Debe devolver un objeto con todas las combinaciones posibles entre nombres y apellidos.

// // Ejemplo de entrada:
// combineLists({
// project: "Name Generator",
// owner: "Bego",
// names: ['Alice', 'Bob'],
// surnames: ['Smith', 'Johnson']
// });

// // Ejemplo de salida:
// {
// project: "Name Generator",
// owner: "Bego",
// combinations: [ 'Alice Smith', 'Alice Johnson', 'Bob Smith', 'Bob Johnson' ]
// }
