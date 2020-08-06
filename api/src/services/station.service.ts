import stationRepository from "../repositories/station.repo";
import { Station } from "../models/station";

class StationService {
    async getStations(): Promise<Station[]> {
        return stationRepository.getStations();
    }
}

const stationService = new StationService();
export default stationService;
