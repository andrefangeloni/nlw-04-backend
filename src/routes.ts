import { Router } from 'express';

import { NPSController } from './controllers/NPSController';
import { UserController } from './controllers/UserController';
import { AnswerController } from './controllers/AnswerController';
import { SurveyController } from './controllers/SurveyController';
import { SendEmailController } from './controllers/SendEmailController';

const router = Router();

const npsController = new NPSController();
const userController = new UserController();
const answerController = new AnswerController();
const surveyController = new SurveyController();
const sendEmailController = new SendEmailController();

router.post('/users', userController.create);

router.get('/surveys', surveyController.show);
router.post('/surveys', surveyController.create);

router.post('/sendEmail', sendEmailController.execute);

router.get('/answers/:value', answerController.execute);

router.get('/nps/:survey_id', npsController.execute);

export { router };
