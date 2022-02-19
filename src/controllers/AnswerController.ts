import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class AnswerController {
  async execute(request: Request, response: Response) {
    const { u } = request.query;
    const { value } = request.params;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u),
    });

    if (!surveyUser) {
      return response.status(404).json({ error: 'survey-user-not-found' });
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export { AnswerController };
