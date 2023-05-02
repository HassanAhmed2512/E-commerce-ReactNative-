const products = [

    {
        _id:"1",
        name : "this is just dummy name",
        image : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1f087891-6787-423d-8e0a-0fa8220e64bc/go-flyease-easy-on-off-shoes-6nd2cc.png",
        descrption : "this is just dummy desk" ,
        price : 100 ,
        countInStock : 3 ,
        rating : 4 ,
        numReviews : 4 
    } ,
    {
        _id:"2",
        name : "this is just dummy name",
        image : "https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-wool-runnerjpg.jpg?q=h_1090,w_1938,x_0,y_0",
        descrption : "this is just dummy desk" ,
        price : 500 ,
        countInStock : 5 ,
        rating : 3 ,
        numReviews : 4 
    }
]

const Colors = {

    main : "#48B600",
    white : "#FFFFFF",
    black : "#000000" ,
    lightBlack : "#BCBCBC",
    orange : "#FFCE31" ,
    red : "#FF0000" ,
    gray : "#F4F4F4",
    subGreen : "#EEFAE6",
    deepGray : "#E1F0D7",
    deepestGray : "#C4C4C4",
    blue : "#3B87F9",
    underline : "#E5E5E5",
    paypal : "#FFB730"
}
const orderInfos=[
    {
        title:"products",
        price:3.99,
        color:"black"
    },
    {
        title:"shipping",
        price:5.99,
        color:"black"
    },
    {
        title:"Total Amount",
        price:9.99,
        color:"main"
    }
]
export {Colors , products, orderInfos}