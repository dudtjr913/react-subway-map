/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import BACKEND from '../constants/backend';
import { CREWS } from '../types';
import { LINE_LIST, STATION_LIST } from './mockData';

export const handlers = [
  rest.get(`${BACKEND[CREWS.DANYEE].baseUrl}/stations`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(STATION_LIST));
  }),
  rest.post('/stations', (req, res, ctx) => {
    const newStation = {
      id: 13,
      ...req.body,
    };

    return res(ctx.status(201), ctx.json(newStation));
  }),
  rest.delete(`${BACKEND[CREWS.DANYEE].baseUrl}/stations/:id`, (req, res, ctx) => {
    return res(ctx.status(204));
  }),

  rest.get(`${BACKEND[CREWS.DANYEE].baseUrl}/lines`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(LINE_LIST));
  }),
];
