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
