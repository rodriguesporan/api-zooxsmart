const City = require('../models/cityModel');
const State = require('../models/stateModel');
const { ObjectId } = require('mongoose').Types;

module.exports = {
  list: async (req, res) => {
    const cities = await City.find({}).sort('-createdAt').populate('state');
    res.json(cities);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const city = await City.findById(id).populate('state');
    res.json(city);
  },
  create: async (req, res) => {
    const { name, stateId } = req.body;
    const city = await City.create({ name, state: stateId });
    const cities = await City.find({ state: ObjectId(stateId) });
    await State.findByIdAndUpdate(stateId, { cities });
    res.json(city);
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const { name, stateId } = req.body;
    const prevCity = await City.findById(id);
    const city = await City.findByIdAndUpdate(id, { name, state: stateId }, { new: true });
    // busca as cidades referentes ao estado antes do update
    const prevCities = await City.find({ state: ObjectId(prevCity.state) });
    // atualiza o estado com as cidades anteriores
    await State.findByIdAndUpdate(prevCity.state, { prevCities });
    // busca as cidades após a atulização
    const cities = await City.find({ state: ObjectId(stateId) });
    // atualiza o estado
    await State.findByIdAndUpdate(stateId, { cities });
    res.json(city);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const city = await City.findByIdAndDelete(id);
    const cities = await City.find({ state: ObjectId(city.state) });
    await State.findByIdAndUpdate(city.state, { cities });
    res.json(city);
  },
};
