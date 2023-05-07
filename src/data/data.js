const products = [

    {
        _id:"1",
        name : "this is just dummy name",
        image : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1f087891-6787-423d-8e0a-0fa8220e64bc/go-flyease-easy-on-off-shoes-6nd2cc.png",
        descrption : "this is just dummy desk this is just dummy deskthis is just dummy deskthis is just dummy deskthis is just dummy deskthis is just dummy deskthis is just dummy deskthis is just dummy deskthis is just dummy deskthis is just dummy deskthis is just dummy deskthis is just dummy desk" ,
        price : 100 ,
        countInStock : 0 ,
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
export const inputs= [
    {
    label: "firstName",
    type: "text"
    },
    {
    label: "lastName",
    type: "text"
    },
    {
    label: "birthDate",
    type: "date"
    },
    {
    label: "phone",
    type: "text"
    },
    {
    label: "email",
    type: "text"
    },
    {
    label: "password",
    type: "text"
    },
    {
    label: "age",
    type: "text"
    }
];
const label2d = [
    ["firstName", "First Name"],
    ["lastName", "Last Name"],
    ["birthDate", "Birth Date(yyyy/mm/dd)"],
    ["phone", "Phone Number"],
    ["email", "Email"],
    ["password", "Password"],
   // ["password", "Confirm Password"],
    ["age","Age"]
];
export const labelToPlaceholder = new Map(label2d);
export const testId="a@a.com";
export const isValidDate=(dateStr)=>{
    // Check that the date string matches the format 'yyyy/mm/dd'
    const datePattern = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!datePattern.test(dateStr)) {
      return false;
    }
  
    // Create a new Date object from the date string
    const dateObj = new Date(dateStr.replaceAll("/", "-"));
  
    // Check that the date object is valid
    if (isNaN(dateObj.getTime())) {
      return false;
    }
  
    // Check that the year, month, and day values match the input string
    const [year, month, day] = dateStr.split('/');
    if (
      dateObj.getFullYear() !== Number(year) ||
      dateObj.getMonth() !== Number(month) - 1 ||
      dateObj.getDate() !== Number(day)
    ) {
      return false;
    }
  
    // The date string is valid
    return true;
}

export const date2str=(date)=>{
    // date=new Date();
    // console.log(date);
    const isoString = date.toISOString();
    const year = isoString.substring(0, 4);
    const month = isoString.substring(5, 7);
    const day = isoString.substring(8, 10);
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
}
export const str2date=(dateStr)=>{
    if(!isValidDate(dateStr) ) return null;
    // console.log(dateStr.replaceAll("/", "-"));
    const date = new Date(dateStr.replaceAll("/", "-") );
    // console.log(date);
    // console.log("--------------------------");
    return isNaN(date)?null:date;
}
export const calculateAge=(str)=>{
    const birthDate=str2date(str);
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    const birthMonth = new Date(birthDate).getMonth();
    const currentMonth = new Date().getMonth();

    if (currentMonth < birthMonth) {
      age--;
    } else if (currentMonth === birthMonth) {
      const birthDay = new Date(birthDate).getDate();
      const currentDay = new Date().getDate();
      if (currentDay < birthDay) {
        age--;
      }
    }
    return age.toString(10);
  }
export const minPassLen=6;
export const minPhoneLen=11;
export {Colors , products, orderInfos}