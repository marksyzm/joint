if (typeof exports === 'object') {
    var joint = require('jointjs');
    var Backbone = require('backbone');
    var _ = require('lodash');
    var g = require('../src/geometry');
    var V = require('../src/vectorizer').V;
}

//      JointJS library.
//      (c) 2011-2013 client IO

joint.shapes.fsa = {};

joint.shapes.fsa.State = joint.shapes.basic.Circle.extend({
    defaults: joint.util.deepSupplement({
        type: 'fsa.State',
        attrs: {
            circle: { 'stroke-width': 3 },
            text: { 'font-weight': '800' }
        }
    }, joint.shapes.basic.Circle.prototype.defaults)
});

joint.shapes.fsa.StartState = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><circle/></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'fsa.StartState',
        size: { width: 20, height: 20 },
        attrs: {
            circle: {
                transform: 'translate(10, 10)',
                r: 10,
                fill: '#000000'
            }
        }

    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.fsa.EndState = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><circle class="outer"/><circle class="inner"/></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'fsa.EndState',
        size: { width: 20, height: 20 },
        attrs: {
            '.outer': {
                transform: 'translate(10, 10)',
                r: 10,
                fill: '#ffffff',
                stroke: '#000000'
            },

            '.inner': {
                transform: 'translate(10, 10)',
                r: 6,
                fill: '#000000'
            }
        }

    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.fsa.Arrow = joint.dia.Link.extend({

    defaults: joint.util.deepSupplement({
	type: 'fsa.Arrow',
        attrs: { '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' }},
        smooth: true
    }, joint.dia.Link.prototype.defaults)
});

if (typeof exports === 'object') {

    module.exports = joint.shapes.fsa;
}
