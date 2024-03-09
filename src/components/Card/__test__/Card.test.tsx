import React from 'react';
import {render} from '../../../utils/test';
import {act, fireEvent, renderHook} from '@testing-library/react-native';
import {Card} from '..';
import {cardDetailsUseCase} from '../useCases/cardDetailsUseCase';
// Test:

// Card Component:
// É responsavel por renderizar algumas informações do character na home, renderiza nome, image
// status. E além disso ele também faz o featching de data do character para passar para a tela
// de detalhes.

// * Ele precisa renderizar o loading enquanto nn tiver nenhum character
// * Ele precisa renderizar todas as informações necessarias na home (name, img, status, gender) fazer
// usando aquele each do jest
// * Ele precisa capturar os dados do character para passar para a tela de detalhe
// * Testar para garantir que o app nn vai quebrar caso não seja possivel buscar as informacoes do character (nn quebrar é sempre retornar algo mesmo que um false ou obj vazio)

// -- Vai ser preciso mockar algumas funcoes principalmente a de capturar detalhes.

jest.mock('../useCases/cardDetailsUseCase', () => {
  return {
    cardDetailsUseCase: jest.fn(),
  };
});

describe('Card Component', () => {
  const mock = {
    gender: 'Male',
    id: '20',
    image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
    location: {name: 'Interdimensional Cable'},
    name: 'Ants in my Eyes Johnson',
    species: 'Human',
    status: 'unknown',
  };

  describe('Card Component Render', () => {
    it.each([
      {input: 'Male'},
      {
        input: 'Ants in my Eyes Johnson',
      },
      {input: 'Interdimensional Cable'},
    ])('should render all necessary elements on screen', async ({input}) => {
      const {findByText} = render(<Card data={mock} />);

      expect(findByText(input)).toBeTruthy();
    });
  });

  it.only('should get all character information', () => {
    const {getByTestId} = render(<Card data={mock} />);

    const element = getByTestId('CardContainer');
    const {result} = renderHook(cardDetailsUseCase);

    act(() => {
      fireEvent.press(element);
      expect(result.current.handleCharacterDetails).toHaveBeenCalledWith(
        mock.id,
      );
    });
  });
});
