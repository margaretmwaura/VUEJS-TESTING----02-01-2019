import Vue from 'vue';
// The path is relative to the project root.
import { expect } from 'chai'
import TestMe from "../../src/components/TestMe.vue";
import { mount } from '@vue/test-utils'
import { shallowMount} from '@vue/test-utils'
describe('TestMe.vue', () => {
    it(`testing text`, () => {
        // Extend the component to get the constructor, which we can then initialize directly.
        const wrapper = mount(TestMe);
        expect(wrapper.find('p').text()).to.equal("This is Maggie")
    });
});

describe('TestMe.vue', () => {
    it('increments count when button is clicked', () => {
        const wrapper = mount(TestMe);
        wrapper.find('button').trigger('click');
        wrapper.vm.$forceUpdate();
        console.log(wrapper.vm.count);
        // expect(wrapper.find('h4').text()).to.equal(1);
    })
});

describe('TestMe.vue' , () =>
{
    it('updates dom' , () =>
    {
        const Constructor = Vue.extend(TestMe);

        const comp = new Constructor({
            data: {
                awesome : false,
                count: 3,
            },
            methods: {
                increment() {
                    this.count++
                }
            }
        }).$mount();
        comp.$el.querySelector('button').addEventListener('click', function(){
            this.count++
        }) ;
        comp.$el.querySelector('button').click();
        console.log(comp.$data.count);
        expect(comp.$el.textContent).contains("1")
    })
});

describe('TestMe.vue',() =>
{
    it(`should render evaluate the v-if`, () => {
    const Constructor = Vue.extend(TestMe);

    const comp = new Constructor({
        data: {
            awesome : false
        }
    }).$mount();

    expect(comp.$el.textContent).contains("Oh no")
    });

});
describe('TestMe.vue', () => {
    it(`should render receivedValue as its text content`, () => {
        const Constructor = Vue.extend(TestMe);

        const comp = new Constructor({
            data: {
                name : 'Maggie'
            }
        }).$mount();

        expect(comp.$el.textContent).contains("Maggie")
    });
});
describe('TestMe.vue', () => {
    it(`should render receivedValue as its text content`, () => {
        const Constructor = Vue.extend(TestMe);

        const comp = new Constructor({

        }).$mount();

        expect(comp.$el.textContent).contains("Wanjiru")
    });
});
