const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product
      }]
  }).then((a) => {
    res.json(a)
  }).catch((err) => {
    res.json(err);
  })

});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [{
      model: Product
    }]
  }).then((a) => {
    res.json(a)
  }).catch((err) => {
    res.json(err)
  })
});

router.post('/', (req, res) => {
  Tag.create(req.body).then((a) => {
    res.json(a)
  })
});

router.put('/:id', (req, res) => {
  Tag.update(
  {
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  }).then((a) => {
    res.json(a)
  }).catch((err) => {
    res.json(err)
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((a) => {
    res.json(a)
  }).catch((err) => {
    res.json(err)
  })
});

module.exports = router;
