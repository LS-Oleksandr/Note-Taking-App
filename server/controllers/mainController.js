// GET / Homepage

exports.homepage = async (req, res) => {
  const locals = {
    title: "Note-taking App",
    description: "NodeJS Notes app",
  };

  res.render("index", {
    locals,
    layout: '../views/layouts/front-page'
  });
};

// GET / About
exports.about = async (req, res) => {
    const locals = {
      title: "About Note app",
      description: "Note app info",
    };
  
    res.render("about", locals);
  };
