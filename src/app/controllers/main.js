
function index (req, res){
    res.render("main/index", { 
        titulo: "Cadastro" })
}

module.exports = { index }