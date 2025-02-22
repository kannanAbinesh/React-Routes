const registerValidation = (formData) => {

    if (!formData.username || !formData.email || !formData.password || !formData.phoneNumber) {
        return { isError: true, errorMessage: 'Please fill in all fields' };
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
        return { isError: true, errorMessage: 'Invalid email format' };
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(formData?.password)) {
        return { isError: true, errorMessage: 'Invalid password format.' };
    };

    return { isError: false }
};

export default registerValidation;