var updateBtns = document.getElementByClassName('update-cart')

for(var i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.Log('productId:', productId, 'action:', action)
        console.Log('USER:', user)
            if(user === 'AnonymousUser'){
                console.Log('Not logged in')
            }
            else{
              updateUserOrder(productId, action)
            }
    })
  }

  function updateUserOrder(productId, action){
    console.Log('User is logged in...')

    var url = '/updateItem/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
            'X-CSRFToken':csrftoken,
            },
         body: Json.stringify({'productId':  productId, 'action':action})
    })

        .then((response) => {
            return response.json()
        })

         .then((data) => {
            console.Log('data:', data)
            location.reload()
         });
  }
