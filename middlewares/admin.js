module.exports = (req, res, next) => {
    console.log("Estou dentro do midware admin");
    next();
};