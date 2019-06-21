module.exports = {
  list: (req, res) => {
    res.send('List');
  },
  show: (req, res) => {
    res.send(`Show ${req.params.id}`);
  },
  create: (req, res) => {
    res.send('Create');
  },
  edit: (req, res) => {
    res.send(`Edit ${req.params.id}`);
  },
  delete: (req, res) => {
    res.send(`Delete ${req.params.id}`);
  },
};
