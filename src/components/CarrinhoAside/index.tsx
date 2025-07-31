import { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import livros from '../../data/Livros'
import {
  Aside,
  Overlay,
  BotaoFechar,
  BotaoCompra,
  RemoverItem,
  Linha,
  FormBase
} from './styles'

type Props = {
  aberto: boolean
  aoFechar: () => void
}

const CarrinhoAside = ({ aberto, aoFechar }: Props) => {
  const { itensCarrinho, removerDoCarrinho, total } = useCart()

  const [etapa, setEtapa] = useState<
    'carrinho' | 'endereco' | 'pagamento' | 'agradecimento'
  >('carrinho')

  const livrosNoCarrinho = livros.filter((livro) => itensCarrinho[livro.id])

  return (
    <>
      {aberto && <Overlay onClick={aoFechar} />}
      <Aside className={aberto ? 'aberto' : ''}>
        {etapa === 'carrinho' && (
          <>
            <h2>Carrinho</h2>
            {livrosNoCarrinho.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              <ul>
                {livrosNoCarrinho.map((livro) => (
                  <li key={livro.id}>
                    <img src={livro.imagem} alt={livro.titulo} />
                    <div>
                      <strong>{livro.titulo}</strong>
                      <p>Qtd: {itensCarrinho[livro.id]}</p>
                      <p>R$ {livro.preco}</p>
                      <RemoverItem onClick={() => removerDoCarrinho(livro.id)}>
                        Remover item
                      </RemoverItem>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <p>Valor total: R$ {total.toFixed(2)}</p>
            <BotaoFechar onClick={aoFechar}>Fechar</BotaoFechar>
            {livrosNoCarrinho.length > 0 && (
              <BotaoCompra onClick={() => setEtapa('endereco')}>
                Finalizar compra
              </BotaoCompra>
            )}
          </>
        )}
        {etapa === 'endereco' && (
          <>
            <h2>Endereço de Entrega</h2>
            <FormBase>
              <input type="text" placeholder="Nome de quem irá receber" />
              <input type="text" placeholder="Endereço" />

              <Linha>
                <input type="text" placeholder="Cidade" />
                <input maxLength={8} type="text" placeholder="CEP" />
                <input type="text" placeholder="Número" />
              </Linha>

              <input type="text" placeholder="Complemento" />
            </FormBase>

            <BotaoFechar onClick={() => setEtapa('carrinho')}>
              Voltar ao carrinho
            </BotaoFechar>
            <BotaoCompra onClick={() => setEtapa('pagamento')}>
              Continuar para pagamento
            </BotaoCompra>
          </>
        )}
        {etapa === 'pagamento' && (
          <>
            <h2>Pagamento</h2>
            <p>Valor total: R$ {total.toFixed(2)}</p>
            <FormBase>
              <input type="text" placeholder="Nome no cartão" />
              <Linha>
                <input
                  maxLength={16}
                  type="text"
                  placeholder="Número do cartão"
                />
                <input maxLength={3} type="text" placeholder="CVV" />
              </Linha>
              <Linha>
                <input maxLength={2} type="text" placeholder="Mês venc." />
                <input maxLength={4} type="text" placeholder="Ano venc." />
              </Linha>
            </FormBase>
            <BotaoFechar onClick={() => setEtapa('endereco')}>
              Voltar para edição do endereço
            </BotaoFechar>
            <BotaoCompra onClick={() => setEtapa('agradecimento')}>
              Finalizar compra
            </BotaoCompra>
          </>
        )}
        {etapa === 'agradecimento' && (
          <>
            <h2>Obrigado pela compra!</h2>
            <p>Seu pedido foi recebido com sucesso.</p>
            <p>Em breve entraremos em contato com as informações de entrega.</p>

            <BotaoCompra onClick={aoFechar}>Fechar</BotaoCompra>
          </>
        )}
      </Aside>
    </>
  )
}

export default CarrinhoAside
