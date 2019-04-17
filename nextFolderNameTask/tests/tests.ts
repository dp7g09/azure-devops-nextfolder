import * as assert from 'assert';
import { getDirItems } from '../NextNameGenerator';


describe('Test NextNameGenerator', function () {

    it('Should work for empty folder', function(done: Mocha.Done) {
        this.timeout(20000);
        var nextName = getDirItems('.//tests//TestData//EmptyFolder', 'RC');
        assert.equal(nextName, 'RC1', 'Next name should have been RC1 for empty folder.');
        done();
    });
});