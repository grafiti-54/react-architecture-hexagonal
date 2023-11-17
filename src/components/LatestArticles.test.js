import React from 'react';
import { render } from '@testing-library/react';

import ApiClient from '../infrastructure/api/ApiClient';
import ApiArticleRepository from '../adapters/ApiArticleRepository';
import GetLatestArticles from '../domain/useCases/GetLatestArticles';
import LatestArticles from './LatestArticles';

jest.mock('../infrastructure/api/ApiClient.js');
jest.mock('../adapters/ApiArticleRepository.js');
jest.mock('../domain/useCases/GetLatestArticles.js');

describe('LatestArticles', () => {
  it('affiche un message de chargement', () => {
    ApiClient.mockImplementation(() => {
      return {
        get: jest.fn().mockResolvedValue({ posts: [] })
      };
    });
    ApiArticleRepository.mockImplementation(() => {
      return {
        getLatestArticles: jest.fn().mockResolvedValue({ posts: [] })
      };
    });
    GetLatestArticles.mockImplementation(() => {
      return {
        execute: jest.fn().mockResolvedValue({ posts: [] })
      };
    });

    const { getByText } = render(<LatestArticles />);
    expect(getByText(/Loading.../i)).toBeInTheDocument();
  });

  // Plus de tests pour vérifier les autres comportements comme l'affichage des articles, etc.
});
