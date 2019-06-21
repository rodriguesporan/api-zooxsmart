const State = require('../models/stateModel');

module.exports = {
  list: async (req, res) => {
    const states = await State.find({}).sort('-createdAt').populate('city');
    res.json(states);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const state = await State.findById(id).populate('city');
    res.json(state);
  },
  create: async (req, res) => {
    const { name, uf } = req.body;
    const state = await State.create({ name, uf });
    res.json(state);
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const { name, uf } = req.body;
    const state = await State.findByIdAndUpdate(id, { name, uf }, { new: true });
    res.json(state);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const state = await State.findByIdAndDelete(id);
    res.json(state);
  },
};
