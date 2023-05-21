let students = [
  {
      name:"João",
      n1:6.5,
      n2:8.5
  },
  {
      name:"Leticia",
      n1:8.5,
      n2:3.2
  },
  {
      name:"Diego",
      n1:7.5,
      n2:6.6
  },
  {
      name:"Julia",
      n1:5.5,
      n2:5.2
  },
  {
      name:"Edson",
      n1:3.5,
      n2:9.7
  }
]

function Media(n1,n2) {
  return ((n1 + n2) / 2).toFixed(1)
}

for(let position of students) {

  if(Media(position.n1,position.n2) >= 7) {

      alert(`A média do(a) aluno(a) ${position.name} é: ${Media(position.n1,position.n2)} \n
      Parabéns, ${position.name}! Você foi aprovado(a) no concurso!`)
      
  } else {
      alert(`A média do(a) aluno(a) ${position.name} é: ${Media(position.n1,position.n2)} \n
      Não foi dessa vez, ${position.name}! Tente novamente!`)
  }
}