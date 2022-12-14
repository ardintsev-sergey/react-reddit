/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from "enzyme"
import { Dropdown } from "../Dropdown"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Dropdown', () => {
    test('should render', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />}/>) 
        expect(wrapper).toBeDefined();
        console.log(wrapper.find('div.container').debug())
        expect(wrapper.find('button')).toBeDefined();
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy()
    })

    test('should render (snapshot', () =>{
        const wrapper = shallow(<Dropdown children={<div />} button={<button />}/>)

        expect(wrapper).toMatchSnapshot()
    })
})