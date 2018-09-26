 module.exports = function(app) {

	var api = app.api.placar;

	app.route('/tabela/')
		.get(api.lista);

    app.route('/tabela/')
        .post(api.insere);
};
