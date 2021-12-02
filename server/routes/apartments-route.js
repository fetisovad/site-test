const {Router} = require('express')
const {Apartment} = require('../models/apartments')

const router = Router()


router.get('/', async (req, res) => {
    try {
        const apartment = await Apartment.findAll()
        res.json(apartment)
    } catch (e) {
        console.log(e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.query
        console.log(id)
        const apartment = await Apartment.findOne({where: {id}})

        res.json(apartment)
    } catch (e) {
        console.log(e)
    }
})

module.exports = router