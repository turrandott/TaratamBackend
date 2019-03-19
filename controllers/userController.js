var User = require('../models/user');

// Display list of all Users.
exports.user_list = function(req, res) {
  User.find({}, 'email')
    //.populate('author')
    .exec(function (err, list_users) {
      if (err) { return next(err); }
      // Successful, so render
      console.log(list_users);
      res.send({ title: 'User List', user_list:  list_users});
    });
};

// Display detail page for a specific User.
exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
};

// Display User create form on GET.
exports.user_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User create GET');
};

// Handle User create on POST.
exports.user_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: User create POST');
};

// Display User delete form on GET.
exports.user_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User delete GET');
};

// Handle User delete on POST.
exports.user_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: User delete POST');
};

// Display User update form on GET.
exports.user_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User update GET');
};

// Handle User update on POST.
exports.user_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: User update POST');
};

exports.create_user = function(req, res) {
  console.log('лапрл', req.body.email);
  new User({password: req.body.password, email: req.body.email}).save((err, doc) => {
    if (err) res.json(err);
    else res.status(201).end();
  });
};
