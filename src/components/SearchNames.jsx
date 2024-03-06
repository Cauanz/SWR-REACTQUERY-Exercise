import { useQuery } from '@tanstack/react-query';

export default function SearchNames() {

  //! OK, APARENTEMENTE TANSTACK QUERY (AKA REACT-QUERY) NÃO É FEITO PARA SER USADO COM FORMULARIOS, TALVEZ SEJA POR ISSO DE TANTOS EXEMPLOS E DOCUMENTAÇÃO COMPLEXA SOBRE, TALVEZ PARA FAZER FETCH DE UMA URI COM DADO SEJA MELHOR USAR USEEFFECT MESMO

   const { isPending, IsError, data } = useQuery({
      queryKey: ['nameData'],
      queryFn: () =>
        fetch(`https://api.agify.io/?name=michael`).then((res) => res.json()),
   })

   if(isPending) return 'Loading...';
   if(IsError) return 'An error has occurred: ' + IsError.message

  return (
  <>
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className='text-2xl font-bold'>Descubra sua verdadeira idade:</h1>
      <ul className="mt-4">
        <li className="text-xl">Idade: {data.age}</li>
      </ul>
    </div>
  </>
  )
}
