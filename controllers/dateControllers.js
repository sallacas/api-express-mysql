import { Date } from '../models/date.js';

export const getAllDates = async (req, res) => {
    try {
        const dates = await Date.findAll();
        if (!dates) return res.status(204).json({ 'message': 'No dates found' });
        res.json(dates);
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}
export const getDateById = async (req, res) => {
    try {
        const { id } = req.params;
        const date = await Date.findByPk(id);
        if (!date) return res.status(204).json({ 'message': 'Date not found' });
        res.json(date);
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}
export const getDateFiltered = async (req, res) => {
    try {
        const filterParams = req.body;
        console.log(filterParams);
        const date = await Date.findAll({ where: filterParams });
        if (!date) return res.status(204).json({ 'message': 'Date not found' });
        res.json(date);
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

export const createDate = async (req, res) => {
    try {
        const { nombre_medico, especialidad, fecha, duracion } = req.body;
        const newDate = await Date.create({ nombre_medico, especialidad, fecha, duracion });
        res.json(newDate);
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}
export const updateDate = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_medico, especialidad, fecha, duracion } = req.body;
        const date = await Date.update({ nombre_medico, especialidad, fecha, duracion }, { where: { id } });
        if (!date) return res.status(204).json({ 'message': 'Date not found' });
        res.json({ message: 'Date updated successfully', data: date });
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}
export const deleteDate = async (req, res) => {
    try {
        const { id } = req.params;
        await Date.destroy({ where: { id } });
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}