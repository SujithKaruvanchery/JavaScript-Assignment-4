$("#form-register").validate({
    rules: {
        name: {
            required: true,
            minlength: "3",
            maxlength: "50"
        },
        email: {
            required: true
        },
        phone: {
            required: true,
            minlength: "10",
            maxlength: "14"
        },
        age: {
            required: true
        },
        gender: {
            required: true,
            minlength: "4",
            maxlength: "15"
        },
        address: {
            maxlength: "50",
            required: false
        }
    }
});