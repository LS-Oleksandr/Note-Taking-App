import { expect } from 'chai';
import sinon from 'sinon';
import { homepage, about } from '../server/controllers/mainController.js';

describe('Route Handlers', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      render: sinon.spy(),
    };
  });

  describe('GET / Homepage', () => {
    it('should render the index page with correct locals and layout', async () => {
      await homepage(req, res);

      expect(res.render.calledOnce).to.be.true;
      expect(res.render.firstCall.args[0]).to.equal('index');
      expect(res.render.firstCall.args[1]).to.deep.equal({
        locals: {
          title: 'Note-taking App',
          description: 'NodeJS Notes app',
        },
        layout: '../views/layouts/front-page',
      });
    });
  });

  describe('GET / About', () => {
    it('should render the about page with correct locals', async () => {
      await about(req, res);

      expect(res.render.calledOnce).to.be.true;
      expect(res.render.firstCall.args[0]).to.equal('about');
      expect(res.render.firstCall.args[1]).to.deep.equal({
        title: 'About Note app',
        description: 'Note app info',
      });
    });
  });
});