import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addCustomer } from "../actions";
import { fetchLocations } from "../actions";
import Input from "./Input";
import Select from "./Select";
import AddressesHint from "./AddressesHint";

const StyledForm = styled.form`
    box-shadow: 0px 0px 5px 1px #3c8a123b;
    padding: 20px 30px 10px 30px;
    margin-bottom: 20px;
    width: 25%;
    min-width: 400px;
`;

const Form = () => {

    const { register, reset, setValue, formState: { errors }, clearErrors , handleSubmit, formState } = useForm();

    const dispatch = useDispatch();

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                firstName: "",
                lastName: "",
                telNumber: "",
                email: "",
                gender: "",
                address: "",
                confirmation: false
            });
          }
    }, [formState, reset]);

    const onSubmit = data => {
        dispatch(addCustomer(data));
        dispatch(fetchLocations([]));
    };

    const options = [
        {value: "male", label: "Male"},
        {value: "female", label: "Female"}
    ];
    
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("firstName", { required: true})} 
                type="text" 
                placeholder="First Name" 
                errors={errors.firstName} 
            />
            <Input {...register("lastName", { required: true })} 
                type="text" 
                placeholder="Last Name" 
                errors={errors.lastName} 
            />
            <Input {...register("telNumber", { required: true })} 
                type="number" 
                placeholder="Phone Number" 
                errors={errors.telNumber}
                onKeyPress={(e) => {
                    if (e.key === "e" || e.key === "+" || e.key === "-") {
                        e.preventDefault();
                    }
                }}
            />
            <Input {...register("email", { required: true })} 
                type="email" 
                placeholder="Email" 
                errors={errors.email}
            />
            <Select {...register("gender", { required: true })} 
                placeholder="Gender"
                options={options}
                errors={errors.gender}
            />
            <Input {...register("address", {
                required: true, 
                onChange: (e) => {
                    if (errors.address) {
                        clearErrors("address");
                    }
                    dispatch(fetchLocations(e.target.value));
                }
            })} 
                type="text" 
                placeholder="Address"
                errors={errors.address}
            />
            <AddressesHint addressFieldName="address" setValue={setValue}/>
            <Input {...register("confirmation", { required: true })}
                type="checkbox"
                placeholder="Confirmation"
                errors={errors.confirmation}
            />
            <Input type="submit" />
        </StyledForm>
    );
}

export default Form;