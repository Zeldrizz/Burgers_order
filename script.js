const product = {
  plainBurger:{
    name: 'Гамбургер простой',
    price: 10000,
    kcall:500,
    amount:0,
    Summ: function () {
      return this.price * this.amount
    },
    Kcall: function () {
      return this.kcall * this.amount
    }
  },

  freshBurger: {
    name: 'Гамбургер Фреш',
    price: 20000,
    kcall:600,
    amount:0,
    Summ: function () {
      return this.price * this.amount
    },
    Kcall: function () {
      return this.kcall * this.amount
    }
  },

  freshCombo: {
    name: 'Фреш Комбо',
    price: 31900,
    kcall:1000,
    amount:0,
    Summ: function () {
      return this.price * this.amount
    },
    Kcall: function () {
      return this.kcall * this.amount
    },
  },
};


const ExtaProduct = {
  doubleMayonnaise: {
    name:'Двойной майонез',
    price: 1500,
    kcall: 100
  },
  lettuce: {
    name: 'Салатный лист',
    price: 1000,
    kcall: 20,
  },
  cheese:{
    name:'Сыр',
    price: 2000,
    kcall: 60
  }
};

const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
      checkExtraProdusct = document.querySelectorAll('.main__productr-checkbox');


for (let i = 0; i < btnPlusOrMinus.length; i++) {
  btnPlusOrMinus[i].addEventListener('click', function(){
    plusOrMinus(this);
    
  })
}

function plusOrMinus(element) {
  // closest() метод подключающийся к родительскому элементу 
  // сделали так чтобы подключалось к своему блоку
  const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        out = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        elementDate = element.getAttribute('data-symbol');
// подключили все 

        if (elementDate == '+' && product[parentId].amount < 10){
          product[parentId].amount++;
        } else if (elementDate == '-' && product[parentId].amount > 0){
          product[parentId].amount--;
        }

        out.innerHTML = product[parentId].amount;
        price.innerHTML = product[parentId].Summ();
        kcall.innerHTML = product[parentId].Kcall();

// product[parentId] типы бургеровб название ключей
}

const plainBurg = document.getElementById('plain'),
      freshBurg = document.getElementById('fresh'),
      comboBurg = document.getElementById('combo'),
      view = document.querySelector('.view'),
      viewImg = document.querySelector('.view__img'),
      viewBtn = document.querySelector('.view__close');


plainBurg.addEventListener('click', function(){
  viewImg.setAttribute('src', './images/product2.jpg');
  view.style.display = 'block';
  view.style = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  `;
  viewBtn.addEventListener('click', function(){
    view.style.display = 'none';
  });
});

freshBurg.addEventListener('dblclick', function(){
  viewImg.setAttribute('src', './images/product1.jpg');
  view.style.display = 'block';
  view.style = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  `;
  viewBtn.addEventListener('click', function(){
    view.style.display = 'none';
  });
});

comboBurg.addEventListener('dblclick', function(){
  viewImg.setAttribute('src', './images/product3.jpg');
  view.style.display = 'block';
  view.style = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  `;
  viewBtn.addEventListener('click', function(){
    view.style.display = 'none';
  });
});
