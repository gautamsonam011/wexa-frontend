export const formatCurrency = (
  amount: number
) => {

  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  ).format(amount);
};

export const formatNumber = (
  value: number
) => {

  return new Intl.NumberFormat(
    "en-US"
  ).format(value);
};

export const formatDate = (
  date: string
) => {

  return new Date(
    date
  ).toLocaleDateString();
};