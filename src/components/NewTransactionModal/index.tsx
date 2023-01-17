import * as Dialog from "@radix-ui/react-dialog";
import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { X, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transacao</Dialog.Title>
        <CloseButton asChild>
          <X size={24} />
        </CloseButton>
        <form>
          <input type="text" placeholder="Descricao" required />
          <input type="number" placeholder="Preco" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} /> Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} /> Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
