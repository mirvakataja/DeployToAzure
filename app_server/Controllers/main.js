const index = function(req, res) {
res.render('index', { title: 'Kataja' });
};

module.exports = {
    index
};
