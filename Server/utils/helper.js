

const allowedOrigins = [
	"http://localhost:5173",
	"http://localhost:8001",
	"http://192.168.0.108:5173",
	"http://192.168.0.108:8001"

	// add here the production URL
];

const corsOptions = {
	origin: (origin, callback) => {

console.log({origin, callback});
		if (allowedOrigins.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	optionsSuccessStatus: 204,
	credentials: true, // Allow credentials like cookies
};


const Response = (data, res, m,) => {
	var check = data === null ? false : data === undefined ? false : data?.length === 0 ? false : true;
	if (check) {
		res.status(200).send({ doc: data, message: 'Success', status: 200 })
	} else {
		res.status(404).send({ message: m ? m : 'fail', status: 404 })
	}
}

const Fail = (err, message, res, code) => {

	if (!res) {
		console.error("Response object is null.");
		return;
	}
	res.status(code).send({ error: err, message: message, status: code ? code : 500 });

}






module.exports = { corsOptions, Response, Fail }