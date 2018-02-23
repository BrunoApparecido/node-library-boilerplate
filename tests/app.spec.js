/* eslint-disable */

import chai, { expect } from 'chai';
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'

import {testFetch} from '../src/index.js'

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');


describe('App',() => {
  describe('tests', ()=>{
    it('should execute a fetch method',()=> {
      const fetchedStub = sinon.stub(global, 'fetch');

      testFetch();

      expect(fetchedStub).to.have.been.calledOnce;
    });
  });
});
