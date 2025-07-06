
const form = document.querySelector(".form");

const schema = {
    name: 'required',
    surname: 'required|min:3',
    email: 'required|email',
    phone: 'required|digits:9',
    company: 'required|min:3',
    about: 'required|min:3|max:200',
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    const validator = new Validator(values, schema);

    clearErrors();
    handleFormValues(validator);
})

function handleFormValues(validator) {
    if(validator.passes()) {
        formSuccess();
        return;
    }

    formFailure(validator.errors);
}


function formSuccess() {
    form.reset();

    setTimeout(() => {
        window.location.reload();
    }, 1000)

}

function clearErrors () {
    for(let field in schema) {
        setFieldError(field);
    }
}

function formFailure({errors}) {
    for (let error in errors) {
        const message = errors[error].join(" ");
        setFieldError(error, message);
    }
}

function setFieldError(field, message = "") {
    const pError = document.querySelector(`.error__${field}`);
    if (pError) {
        pError.textContent = message;
    }
}