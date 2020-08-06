import { Router, Request, Response, NextFunction } from 'express';
import stationController from './station.controller';

const router = Router({ strict: true });

router.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.send({ hello: 'test' });
});

router.use('/stations', stationController);

export default router;
