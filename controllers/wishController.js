var Wish = require('../models/wish');

// Display list of all Wish.
exports.wish_list = function(req, res) {

  Wish.find({}, 'email wish ')
    //.populate('author')
    .exec(function (err, list_wishes) {
      if (err) { return next(err); }
      // Successful, so render
      console.log(list_wishes);
      res.send({ title: 'Wish List', wish_list:  list_wishes});
    });

    //res.send('NOT IMPLEMENTED: Wish list');
};

// Display detail page for a specific Wish.
exports.wish_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Wish detail: ' + req.params.id);
};

// Display Wish create form on GET.
exports.wish_create_get = function(req, res) {
    console.log(req);
    res.status(201).end();

};

// Handle Wish create on POST.
exports.wish_create_post = function(req, res) {
    //res.send('NOT IMPLEMENTED: Wish create POST');
    new Wish({wish: req.body.wish, email: req.body.email}).save((err, doc) => {
      if (err) res.json(err);
      else res.status(201).end();
    });


};

// Display Wish delete form on GET.
exports.wish_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Wish delete GET');
};

// Handle Wish delete on POST.
exports.wish_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Wish delete POST');
};

// Display Wish update form on GET.
exports.wish_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Wish update GET');
};

// Handle Wish update on POST.
exports.wish_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Wish update POST');
};
