const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [{ model: Product}]
  }).then((categoryData) => {
    res.json(categoryData)
  })
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, { include: [{ model: Product}]
  }).then(
    (id) => {
      res.json(id)
    })
  
});

router.post('/', (req, res) => {
  Category.create(req.body).then(
    (cat) => {
      res.json(cat);
    })
    .catch((err) =>
      res.json(err))
});

router.put('/:id', (req, res) => {
  Category.update(
  {
    category_name: req.body.category_name,
  },
  {
    where: {
      id: req.params.id,
    }
  }).then((a) => {
    res.json(a)
  }).catch((err) => {
    res.json(err)
  })
});





router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((deleted) => {
    res.json(deleted)
    })
    .catch((err) => {
      res.json(err)
    })
});

module.exports = router;
