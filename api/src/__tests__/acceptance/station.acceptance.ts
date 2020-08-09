import {Client, expect} from '@loopback/testlab';
import {App} from '../..';
import {Station} from '../../models';
import {setupApplication} from './test-helper';

describe('Station areas', () => {
  let app: App;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  describe('GET /stations', () => {
    it('should return list of stations', async () => {
      const response = await client.get('/stations').expect(200);
      expect(response.body).to.be.Array();

      const stations = response.body as Station[];
      stations.forEach(station => expect(station).to.have.keys('name', 'id'));
    });
  });
});
