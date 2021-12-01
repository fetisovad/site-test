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

module.exports = router