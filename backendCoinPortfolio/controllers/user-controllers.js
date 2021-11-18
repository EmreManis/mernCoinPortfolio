const { v4:uuid }= require("uuid");

const DummyUsers = [
    {
        id: "u1",
        email: "test@test.com",
        password: "test"
    }
];

const userSignUp = (req, res, next) => {
    const { email, password } = req.body;
    
    const createdUser = {
        id: uuid(),
        email,
        password
    }

    DummyUsers.push(createdUser);

    res.status(201).json({user: createdUser});
};

const userLogin = (req, res, next) => {};

exports.userSignUp = userSignUp;
exports.userLogin = userLogin;