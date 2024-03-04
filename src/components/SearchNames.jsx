import { useState } from 'react'
import useSWR from 'swr';

//* PARA TESTE, MAS ACHO QUE É ASSIM QUE FUNCIONA, TALVEZ NÃO MEXER
const fetcher = url => fetch(url).then(res => res.json())

export default function SearchNames() {

   /* const [searchName, setSearchName] = useState(''); */


   //TODO - ENTENDER MELHOR ISSO E TENTAR FAZER A REQUISIÇÃO USANDO O NOME PASSADO NO FORM

   //* VERSÃO REAL
   /* const fetcher = `https://api.agify.io/?name=${searchName}` = fetch(`https://api.agify.io/?name=${searchName}`).then(res => res.json()); */

   //* VERSÃO SOMENTE PARA TESTE
  const { data, error } = useSWR('https://api.agify.io/?name=michael', fetcher)

  if (error) return <div>Erro ao carregar</div>
  if (!data) return <div>Carregando...</div>

  return (
  <>
      <div className="flex justify-center items-center h-screen">
      <h1 className='text-2xl font-bold'>Descubra sua verdadeira idade:</h1>
      
      {/*         <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Digite seu nome:
          <input type="text" id="nome" onChange={(e) => setSearchName(e.target.value)} />
          </label>
          <button type="submit">Buscar</button>
      </form> */}
      <ul className="mt-4">
        <li className="text-xl">Idade: {data.age}</li>
      </ul>
    </div>
  </>
  )
}
