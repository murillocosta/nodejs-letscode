// Escreva um programa capaz de gerenciar alunos e professores de uma escola. Faça a modelagem das entidades e da estrutura de pastas do projeto, crie as classes e separe em módulos.
    
    // breaking up the problem:
        // create two different classes in JS ()
        // classes will have attbts in commom (DRY principle) (add one general class Usuario)
    
    // breaking problem in sub problems:
        // how to create classes in Js?
            // then create class Usuario
        // how to extends classes in Js?
            // then create class Professor
            // then create class Aluno
            
import Professor from './usuarios/professores/index.js'
import Aluno from './usuarios/alunos/index.js'



const professor1 = new Professor("Esdras", "Aguilar", 23, 3, 1989, "Técnicas de Programação com Node.Js", 15, 8, 2020)
const aluno1 = new Aluno("Murillo", "Costa", 26, 10, 1989, 50420, 836)
console.log(professor1); 
console.log(aluno1); 
