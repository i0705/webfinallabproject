const FormatPrice = ({ price }) => {
    return Intl.NumberFormat("ur-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 2,
    }).format(price );
  };
  
  export default FormatPrice;
  