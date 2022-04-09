const address = {
  street: "",
  city: "",
  country: "",
};
// const street = address.street;
// const city = address.city;
// const country = address.country;

// We can rewrite the upper code
// Using destructuring method

// const { street, city , country } = address;
const { street: st } = address; // We just define an alias variable name st and put the street value in it
