import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from "../App";
import { TextInput, NumberInput, Select, Checkbox } from "../components/FormComponents";
import { StyledError } from "../components/StyledComponents";

configure({ adapter: new Adapter() });

describe("App", () => {
    it("App component should render correctly", () => {
        const initialState = {
            customers: [],
            locations: [],
            status: 'idle'
        };
        const mockStore = configureStore();
        const store = mockStore(initialState);
        const tree = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("TextInput", () => {
    it('Should render an TextInput component', () => {
        const wrapper = shallow(<TextInput name="firstName" placeholder="First Name"/>);
        expect(wrapper.find('input[name="firstName"]').exists()).toBe(true);
        expect(wrapper.find('label').text()).toBe("First Name");
    });

    it('Should render an error Required in TextInput component', () => {
        const wrapper = shallow(<TextInput name="lastName" errors={{type: 'required'}}/>);
        expect(wrapper.find(StyledError).text()).toBe('This field is required');
    });

    it('Should render an error Pattern in TextInput component', () => {
        const wrapper = shallow(<TextInput name="email" errors={{type: 'pattern', message: 'Invalid email address'}}/>);
        expect(wrapper.find(StyledError).text()).toBe('Invalid email address');
    });

    it('Should have been changed', () => {
        const onChange = jest.fn();
        const changeEvent = {};
        const wrapper = shallow(<TextInput name="address" onChange={onChange}/>);
        expect(onChange).not.toBeCalled();
        wrapper.find('input').simulate('change', changeEvent);
        expect(onChange).toBeCalledWith(changeEvent);
    });
});

describe("NumberInput", () => {
    it('Should render an TextInput component', () => {
        const wrapper = shallow(<NumberInput name="telNumber" placeholder="Phone Number"/>);
        expect(wrapper.find('input[name="telNumber"]').exists()).toBe(true);
        expect(wrapper.find('label').text()).toBe("Phone Number");
    });

    it('Should render an error Required in TextInput component', () => {
        const wrapper = shallow(<NumberInput name="telNumber" errors={{type: 'required'}}/>);
        expect(wrapper.find(StyledError).text()).toBe('This field is required');
    });

    it('Should have been changed', () => {
        const onChange = jest.fn();
        const changeEvent = {};
        const wrapper = shallow(<NumberInput name="telNumber" onChange={onChange}/>);
        expect(onChange).not.toBeCalled();
        wrapper.find('input').simulate('change', changeEvent);
        expect(onChange).toBeCalledWith(changeEvent);
    });
});

describe("Select", () => {
    const options = [
        {value: "male", label: "Male"},
        {value: "female", label: "Female"}
    ];

    it('Should render an Select component', () => {
        const wrapper = shallow(<Select name="gender" placeholder="Gender" options={options}/>);
        expect(wrapper.find('select[name="gender"]').exists()).toBe(true);
        expect(wrapper.find('label').text()).toBe("Gender");
    });

    it('Should render an error Required in Select component', () => {
        const wrapper = shallow(<Select name="gender" errors={{type: 'required'}} options={options}/>);
        expect(wrapper.find(StyledError).text()).toBe('This field is required');
    });

    it('Should render options correctly', () => {
        const wrapper = shallow(<Select name="gender" errors={{type: 'required'}} options={options}/>);
        expect(wrapper.find('option').at(0).prop('value')).toBe('');
        expect(wrapper.find('option').at(1).prop('value')).toBe('male');
        expect(wrapper.find('option').at(2).prop('value')).toBe('female');
    });
});

describe("Checkbox", () => {
    it('Should render an Checkbox component', () => {
        const wrapper = shallow(<Checkbox name="confirmation" placeholder="Confirmation"/>);
        expect(wrapper.find('input[name="confirmation"]').exists()).toBe(true);
        expect(wrapper.find('label').text()).toBe("Confirmation");
    });

    it('Should render an error Required in Checkbox component', () => {
        const wrapper = shallow(<Checkbox name="confirmation" errors={{type: 'required'}}/>);
        expect(wrapper.find(StyledError).text()).toBe('This field is required');
    });
});