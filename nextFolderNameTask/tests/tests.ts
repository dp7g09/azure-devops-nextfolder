import 'mocha';
import * as assert from 'assert';
//import { suite, test, describe, slow, timeout  } from "mocha-typescript";
import { getDirItems } from '../NextNameGenerator';


describe('Test NextNameGenerator', function () {

    it('Should work for empty folder', function(done: Mocha.Done) {
        var nextName = getDirItems('.//TestData//EmptyFolder', 'RC');
        assert.equal(nextName, 'RC1', 'Next name should have been RC1 for empty folder.');
    });
});