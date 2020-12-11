export default (formData) => {
  const newFormData = { ...formData, [formData.paymentWay]: formData.buyPrice };

  delete newFormData.paymentWay;
  delete newFormData.buyPrice;

  return newFormData;
};

// const newFormData = Object.assign({}, formData, {
//     [formData.paymentWay]: formData.buyPrice,
//   });
