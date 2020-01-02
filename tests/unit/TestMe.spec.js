import Vue from 'vue';
// The path is relative to the project root.
import { expect } from 'chai'
import TestMe from "../../src/components/TestMe.vue";
import { shallowMount } from '@vue/test-utils'
describe('TestMe.vue', () => {
    it(`should render propValue as its text content`, () => {
        // Extend the component to get the constructor, which we can then initialize directly.
        const Constructor = Vue.extend(TestMe);

        const comp = new Constructor({
            propsData: {
                // Props are passed in "propsData".
                propValue: 'Test Text'
            }
        }).$mount();

        expect(comp.$el.textContent)
            .to.equal('Test Text');
    });
});

describe('TestMe.vue', () => {
    it('increments count when button is clicked', () => {
        const wrapper = shallowMount(TestMe);
        wrapper.find('button').trigger('click');
        expect(wrapper.find('div').text()).contains('1')
    })
});
