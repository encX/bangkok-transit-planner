import { Station } from "../models/station";

class StationRepository {
    async getStations(): Promise<Station[]> {
        return [{ name: 'Test', id: 1 }];
    }    
}

const stationRepository = new StationRepository();
export default stationRepository;
