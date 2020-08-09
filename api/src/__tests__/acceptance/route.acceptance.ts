import {Client, expect} from '@loopback/testlab';
import {App} from '../..';
import {Route} from '../../models';
import {setupApplication} from './test-helper';

describe('Route areas', () => {
  let app: App;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  describe('GET /routes', () => {
    it('should require `from` and `to` integer query params', async () => {
      await client.get('/routes').expect(400); // missing both params
      await client.get('/routes?from=1').expect(400); // missing to
      await client.get('/routes?to=1').expect(400); // missing from
      await client.get('/routes?from=1.5&to=2.5').expect(400); // non integer
    });

    it('should return list of routes', async () => {
      const response = await client.get(`/routes?from=1&to=5`).expect(200);
      expect(response.body).to.be.Array();

      const stations = response.body as Route[];
      stations.forEach(station =>
        expect(station).to.have.keys('cost', 'stations'),
      );
    });
  });
});
