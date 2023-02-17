module.exports = function(req, res, next) {
    
    console.log("User isAdmin: " + req.user.isAdmin)
    // Status code of 401 is Unauthorized
    if (!req.user || !req.user.isAdmin) return res.status(401).json('Unauthorized');
    // A okay
    next();
  }; 