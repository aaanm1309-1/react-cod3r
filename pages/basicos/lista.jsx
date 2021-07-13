export default function lista() {
  const lista1 = [
    "Lista 1",
    "Lista 2",
    "Lista 3",
    "Lista 4",
    "Lista 5",
    "Lista 6",
    "Lista 7",
    "Lista 8",
    "Lista 9",

  ];

  return (
    <div>
      <h1>Teste</h1>  
      <ul>
        {lista1.map(item => <li key={item}>{item}</li>)}
      </ul>
      <div>
        {gerarLista()}
      </div>
    </div>
  )
}


function gerarLista(final = 10) {
  const lista = [];
  for(let i = 1; i <= final; i++) {
    lista.push(<span key={i}>{i},</span>)
  }
  return lista
  
}