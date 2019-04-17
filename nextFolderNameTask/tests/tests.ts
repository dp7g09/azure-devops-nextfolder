import * as assert from 'assert';
import { getDirItems } from '../NextNameGenerator';


describe('Test NextNameGenerator', function () {

    it('Should work for empty folder', function(done: Mocha.Done) {
        this.timeout(20000);
        var nextName = getDirItems('.//tests//TestData//EmptyFolder', 'RC');
        assert.equal(nextName, 'RC1', 'Next name should have been RC1 for empty folder.');
        done();
    });

    it('Should work for folder with sequentially named folders', function(done: Mocha.Done) {
        this.timeout(20000);
        var nextName = getDirItems('.//tests//TestData//SequentialNames', 'RC');
        assert.equal(nextName, 'RC3', 'Next name should have been RC3.');
        done();
    });

    it('Should work for folder with a missing number in sequence', function(done: Mocha.Done) {
        this.timeout(20000);
        var nextName = getDirItems('.//tests//TestData//SequenceMissing', 'RC');
        assert.equal(nextName, 'RC5', 'Next name should have been RC5.');
        done();
    });
});