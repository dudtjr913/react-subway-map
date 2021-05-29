/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import BACKEND from '../constants/backend';
import MESSAGE from '../constants/message';
import { CREWS } from '../types';
import { LINE_LIST, STATION_LIST } from './mockData';

export const handlers = [
  rest.get(`${BACKEND[CREWS.DANYEE].baseUrl}/stations`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(STATION_LIST));
  }),
  rest.post(`${BACKEND[CREWS.DANYEE].baseUrl}/stations`, (req, res, ctx) => {
    if (req.body.name.length < 2 || req.body.name.length > 20) {
      return res(
        ctx.status(400),
        ctx.json({ status: 400, message: MESSAGE.ERROR.INVALID_STATION_NAME_LENGTH })
      );
    }

    const newStation = {
      id: 14,
      ...req.body,
    };

    return res(ctx.status(201), ctx.json(newStation));
  }),
  rest.put(`${BACKEND[CREWS.DANYEE].baseUrl}/stations/:id`, (req, res, ctx) => {
    if (req.body.name.length < 2 || req.body.name.length > 20) {
      return res(
        ctx.status(400),
        ctx.json({ status: 400, message: MESSAGE.ERROR.INVALID_STATION_NAME_LENGTH })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        id: Number(req.params.id),
        ...req.body,
      })
    );
  }),
  rest.delete(`${BACKEND[CREWS.DANYEE].baseUrl}/stations/:id`, (req, res, ctx) => {
    return res(ctx.status(204));
  }),

  rest.get(`${BACKEND[CREWS.DANYEE].baseUrl}/lines`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(LINE_LIST));
  }),
  rest.post(`${BACKEND[CREWS.DANYEE].baseUrl}/lines`, (req, res, ctx) => {
    if (req.body.name.length < 2 || req.body.name.length > 10) {
      return res(
        ctx.status(400),
        ctx.json({ status: 400, message: MESSAGE.ERROR.INVALID_LINE_NAME_LENGTH })
      );
    }

    const newLine = {
      id: 100,
      ...req.body,
    };

    return res(ctx.status(201), ctx.json(newLine));
  }),
  rest.put(`${BACKEND[CREWS.DANYEE].baseUrl}/lines/:id`, (req, res, ctx) => {
    if (req.body.name.length < 2 || req.body.name.length > 10) {
      return res(
        ctx.status(400),
        ctx.json({ status: 400, message: MESSAGE.ERROR.INVALID_LINE_NAME_LENGTH })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        id: Number(req.params.id),
        ...req.body,
      })
    );
  }),
  rest.delete(`${BACKEND[CREWS.DANYEE].baseUrl}/lines/:id`, (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];
