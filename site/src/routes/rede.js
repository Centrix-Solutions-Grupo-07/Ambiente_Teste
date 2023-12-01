var express = require("express");
var router = express.Router();

var redeController = require("../controllers/redeController");

router.get("/importancia/:fkAndarDeTrabalho",  function (req, res) {
    redeController.buscarImportanciaMaquina(req, res);
});

router.get("/maqEmp/:fkAndarDeTrabalho", function (req, res){
    redeController.contarMaquinasAndar(req, res);
});

router.get("/alertaAndarMeiaLua/:fkAndarDeTrabalho", function (req, res){
    redeController.alertasAndarMeiaLua(req, res);
});

router.get("/alertaMes", function (res, res){
    redeController.alertasDoMes(res, res);
});

router.get("/kpiAtencao", function (res, res){
    redeController.kpiAtencao(res,res);
});

router.get("/kpiPerigo", function (res, res){
    redeController.kpiPerigo(res,res);
});

router.post("/atualizarRede", function (req, res) {
    redeController.atualizarRede(req, res);
})

module.exports = router;