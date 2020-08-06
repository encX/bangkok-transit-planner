import { Router, Request, Response, NextFunction } from 'express';
import stationRepository from '../repositories/station.repo';

const stationController = Router({ strict: true });

stationController.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const data = await stationRepository.getStations();
    res.send(data);
});

export default stationController;