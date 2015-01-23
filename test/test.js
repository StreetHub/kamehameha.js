"use strict";

var Kamehameha = require('../lib/kamehameha');

describe('Kamehameha', function () {

    it('should make the magic happen', function (done) {

        Kamehameha.release({ images: ["logo"], delay: 500 }, function() {
            done();
        });
    });
});
