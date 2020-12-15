export default function payWay(formData) {
  if (formData.type === 'buy' || formData.type === 'sell') {
    const newFormData = {
      ...formData,
      [formData.paymentWay]: formData.value,
    };

    delete newFormData.paymentWay;
    delete newFormData.value;

    return newFormData;
  }

  return formData;
}
