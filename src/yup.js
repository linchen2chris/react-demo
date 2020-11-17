var y = require("yup");

let schema = y.object({
  b: y.string().required("b requried"),
  c: y.object().when('b', {
		is: 'bbb',
		then: y.object({d: y.string().required('d req')})
	}).when('b', {
		is: 'b1',
		then: y.object({d: y.string().required('ddd req')})
	}),
});

schema
  .validate({ b: "b1", c: {} } )
  .catch(function (err) {
    console.log(111, err.errors); // => ['age must be a number']
  });
