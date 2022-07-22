import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { StyledForm, FormHeader } from "./StyledComponents";
import { addCustomer } from "../actions";
import { fetchLocations, locationsCleared } from "../actions";
import { TextInput, NumberInput, Select, AddressesHint, Checkbox, SubmitButton } from "./FormComponents";

const Form = () => {

    const { register, reset, setValue, formState: { errors }, handleSubmit, formState } = useForm();

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
        dispatch(locationsCleared());
    };

    const options = [
        {value: "male", label: "Male"},
        {value: "female", label: "Female"}
    ];
    
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormHeader>Registration form</FormHeader>
            <TextInput {...register("firstName", { required: true})}
                placeholder="First Name" 
                errors={errors.firstName} 
            />
            <TextInput {...register("lastName", { required: true })}
                placeholder="Last Name" 
                errors={errors.lastName} 
            />
            <NumberInput {...register("telNumber", { required: true })}
                placeholder="Phone Number" 
                errors={errors.telNumber}
            />
            <TextInput {...register("email", { 
                required: true,
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                } 
            })} 
                type="email" 
                placeholder="Email" 
                errors={errors.email}
            />
            <Select {...register("gender", { required: true })} 
                placeholder="Gender"
                default="Select gender"
                options={options}
                errors={errors.gender}
            />
            <TextInput {...register("address", {
                required: true, 
                onChange: (e) => {
                    if (e.target.value.length > 0) {
                        dispatch(fetchLocations());
                    } else {
                        dispatch(locationsCleared());
                    }
                }
            })}
                placeholder="Address"
                errors={errors.address}
            />
            <AddressesHint addressFieldName="address" setValue={setValue}/>
            <Checkbox {...register("confirmation", { required: true })}
                placeholder="Confirmation"
                errors={errors.confirmation}
            />
            <SubmitButton/>
        </StyledForm>
    );
}

export default Form;